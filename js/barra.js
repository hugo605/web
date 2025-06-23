

document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    // Agregar evento de clic para animación
    downloadBtn.addEventListener('click', function() {
        // Animación de confirmación
        downloadBtn.innerHTML = '<i class="fas fa-check"></i> <span>¡Descargando!</span>';
        downloadBtn.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
        
        // Restaurar después de 3 segundos
        setTimeout(() => {
            downloadBtn.innerHTML = '<i class="fas fa-file-download"></i> <span>Descargar Catálogo</span>';
            downloadBtn.style.background = 'linear-gradient(135deg, #e74c3c, #c0392b)';
        }, 3000);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM
    const navIcons = document.querySelectorAll('.nav-icon');
    const calcBtn = document.getElementById('calcBtn');
    const whatsappBtn = document.getElementById('whatsappBtn');
    const homeBtn = document.getElementById('homeBtn');
    const closeCalcBtn = document.getElementById('closeCalcBtn');
    const closeWhatsappBtn = document.getElementById('closeWhatsappBtn');
    const calculatorModal = document.getElementById('calculatorModal');
    const whatsappModal = document.getElementById('whatsappModal');
    const areaInput = document.getElementById('area');
    const productSelect = document.getElementById('product');
    const resultElement = document.getElementById('result');
    const productInfoElement = document.getElementById('product-info');
    const whatsappForm = document.getElementById('whatsappForm');
    
    // Rendimientos de cada producto (m² por bolsa)
    const productYields = {
        'porcelanato-celeste': 4.0,
        'porcelanato-dorado': 3.5,
        'ceramica-verde': 5.0,
        'ceramica-rojo': 4.5,
        'cemento-blanco': 6.0
    };
    
    // Descripciones de los productos
    const productDescriptions = {
        'porcelanato-celeste': 'Porcelanato Celeste - Rendimiento: 4 m² por bolsa',
        'porcelanato-dorado': 'Porcelanato Dorado - Rendimiento: 3.5 m² por bolsa',
        'ceramica-verde': 'Cerámica Verde - Rendimiento: 5 m² por bolsa',
        'ceramica-rojo': 'Cerámica Rojo - Rendimiento: 4.5 m² por bolsa',
        'cemento-blanco': 'Cemento Blanco - Rendimiento: 6 m² por bolsa'
    };
    
    // Manejar la selección de iconos
    navIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            // Si el clic fue en un enlace, no cambiar la selección
            if (e.target.tagName === 'A' || e.target.parentElement.tagName === 'A') {
                return;
            }
            
            // Quitar clase activa de todos
            navIcons.forEach(el => {
                el.classList.remove('active');
            });
            
            // Añadir clase activa al actual
            this.classList.add('active');
            
            // Si es el botón de calcular, abrir el modal
            if (this === calcBtn) {
                calculatorModal.style.display = 'flex';
                whatsappModal.style.display = 'none';
            }
            // Si es el botón de WhatsApp, abrir su modal
            else if (this === whatsappBtn) {
                whatsappModal.style.display = 'flex';
                calculatorModal.style.display = 'none';
            }
            // Si es el botón de inicio, cerrar todos los modales
            else if (this === homeBtn) {
                calculatorModal.style.display = 'none';
                whatsappModal.style.display = 'none';
            }
        });
    });
    
    // Cerrar modales
    closeCalcBtn.addEventListener('click', () => {
        calculatorModal.style.display = 'none';
    });
    
    closeWhatsappBtn.addEventListener('click', () => {
        whatsappModal.style.display = 'none';
    });
    
    // Cerrar modales al hacer clic fuera del contenido
    window.addEventListener('click', (e) => {
        if (e.target === calculatorModal) {
            calculatorModal.style.display = 'none';
        }
        if (e.target === whatsappModal) {
            whatsappModal.style.display = 'none';
        }
    });
    
    // Función para calcular las bolsas requeridas
    function calculateBags() {
        const selectedProduct = productSelect.value;
        const area = parseFloat(areaInput.value);
        
        if (!selectedProduct || isNaN(area) || area <= 0) {
            resultElement.textContent = '0';
            productInfoElement.textContent = 'Seleccione un producto e ingrese el área';
            return;
        }
        
        const yieldPerBag = productYields[selectedProduct];
        const bagsNeeded = Math.ceil(area / yieldPerBag);
        
        // Mostrar resultado
        resultElement.textContent = bagsNeeded;
        productInfoElement.textContent = productDescriptions[selectedProduct];
        
        // Animación del resultado
        resultElement.style.animation = 'pulse 0.5s';
        setTimeout(() => {
            resultElement.style.animation = '';
        }, 500);
    }
    
    // Event listeners para cambios en la calculadora
    productSelect.addEventListener('change', calculateBags);
    areaInput.addEventListener('input', calculateBags);
    
    // Inicializar cálculo
    calculateBags();
    
    // Manejar envío del formulario de WhatsApp
    whatsappForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Formatear el mensaje
        let fullMessage = `Hola, soy ${name}. `;
        if (phone) fullMessage += `\nMi número es: ${phone}\n\n`;
        fullMessage += message;
        
        // Número de destino fijo
        const phoneNumber = '59174911902';
        
        // Codificar el mensaje para URL
        const encodedMessage = encodeURIComponent(fullMessage);
        
        // Crear el enlace de WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // Abrir WhatsApp en una nueva pestaña
        window.open(whatsappUrl, '_blank');
        
        // Cerrar el modal
        whatsappModal.style.display = 'none';
        
        // Resetear el formulario
        whatsappForm.reset();
        
        // Mostrar mensaje de confirmación
        alert('¡Gracias por tu mensaje! Serás redirigido a WhatsApp.');
    });
});
