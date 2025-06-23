
        // Datos de los productos
        const products = {
            "porcelanato-celeste": {
                title: "Cemento Cola Porcelanato Celeste",
                color: "celeste",
                description: "Adhesivo de alto rendimiento para la instalación de todo tipo de porcelanatos, especialmente formulados para piezas de gran formato.",
                image: "img/CELESTE2.jpg",
                specs: [
                    "Tiempo abierto: 25 minutos",
                    "Tiempo de ajuste: 15 minutos",
                    "Resistencia a la compresión: >25 MPa",
                    "Resistencia a la tracción: >1.5 MPa",
                    "Contenido de sólidos: 98%"
                ],
                applications: "Ideal para porcelanatos de gran formato en pisos y paredes, tanto en interiores como en exteriores. Recomendado para áreas residenciales y comerciales.",
                whatsapp: "https://wa.me/59174911902?text=Estoy%20interesado%20en%20Cemento%20cola%20porcelanato%20celeste"
            },


            "porcelanato-dorado": {
                title: "Cemento Cola Porcelanato Dorado",
                color: "dorado",
                description: "Adhesivo premium de alta adherencia para instalaciones críticas de porcelanato en condiciones desafiantes.",
                image: "img/dorado4.jpg",
                specs: [
                    "Tiempo abierto: 30 minutos",
                    "Tiempo de ajuste: 20 minutos",
                    "Resistencia a la compresión: >30 MPa",
                    "Resistencia a la tracción: >2.0 MPa",
                    "Deformación elástica: 0.5%"
                ],
                applications: "Perfecto para instalaciones en pisos radiantes, áreas con vibraciones, y para porcelanatos de bajo coeficiente de absorción. Recomendado para proyectos de alta gama.",
                whatsapp: "https://wa.me/59173287793?text=Estoy%20interesado%20en%20Cemento%20cola%20porcelanato%20dorado"
            },
            "ceramica-verde": {
                title: "Cemento Cola Cerámica Verde",
                color: "verde",
                description: "Adhesivo versátil para la instalación de cerámicas tradicionales y de bajo absorción en interiores.",
                image: "img/verde.jpg",
                specs: [
                    "Tiempo abierto: 20 minutos",
                    "Tiempo de ajuste: 10 minutos",
                    "Resistencia a la compresión: >15 MPa",
                    "Resistencia a la tracción: >1.0 MPa",
                    "Contenido de sólidos: 95%"
                ],
                applications: "Excelente para cerámicas esmaltadas, azulejos y piezas de tamaño estándar en baños, cocinas y áreas residenciales. No recomendado para exteriores o áreas húmedas.",
                whatsapp: "https://wa.me/59173287793?text=Estoy%20interesado%20en%20Cemento%20cola%20cerámica%20verde"
            },
            "ceramica-rojo": {
                title: "Cemento Cola Cerámica Rojo",
                color: "rojo",
                description: "Adhesivo de alta resistencia para áreas de alto tráfico y condiciones exigentes.",
                image: "img/rojo3.jpg",
                specs: [
                    "Tiempo abierto: 25 minutos",
                    "Tiempo de ajuste: 15 minutos",
                    "Resistencia a la compresión: >35 MPa",
                    "Resistencia a la tracción: >2.2 MPa",
                    "Resistencia química: Excelente"
                ],
                applications: "Diseñado para áreas comerciales, industriales y de alto tráfico. Resistente a químicos, grasas y cargas pesadas. Ideal para cocinas industriales, garajes y áreas públicas.",
                whatsapp: "https://wa.me/59173287793?text=Estoy%20interesado%20en%20Cemento%20cola%20cerámica%20rojo"
            },
            "cemento-blanco": {
                title: "Cemento Blanco",
                color: "blanco",
                description: "Adhesivo de color blanco especialmente formulado para materiales translúcidos y piedras naturales.",
                image: "img/cemento blanco.jpg",
                specs: [
                    "Tiempo abierto: 30 minutos",
                    "Tiempo de ajuste: 20 minutos",
                    "Resistencia a la compresión: >20 MPa",
                    "Resistencia a la tracción: >1.2 MPa",
                    "Estabilidad de color: Excelente"
                ],
                applications: "Perfecto para mármol, piedras naturales, vidrio y cerámicas claras o translúcidas. Evita manchas y amarilleamiento, manteniendo la estética de los materiales claros.",
                whatsapp: "https://wa.me/59173287793?text=Estoy%20interesado%20en%20Cemento%20blanco"
            }
        };

        // Funcionalidad del modal
        document.querySelectorAll('.btn-details').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-product');
                const product = products[productId];
                
                document.getElementById('modal-title').textContent = product.title;
                document.getElementById('modal-description').textContent = product.description;
                document.getElementById('modal-image').src = product.image;
                document.getElementById('modal-applications').textContent = product.applications;
                document.getElementById('modal-color').className = `product-color-bar ${product.color}`;
                document.getElementById('modal-whatsapp').href = product.whatsapp;
                
                const specsList = document.getElementById('specs-list');
                specsList.innerHTML = '';
                
                product.specs.forEach(spec => {
                    const li = document.createElement('li');
                    li.innerHTML = `<i class="fas fa-check-circle"></i> ${spec}`;
                    specsList.appendChild(li);
                });
                
                document.getElementById('productModal').style.display = 'flex';
            });
        });

        // Cerrar modal
        document.querySelector('.close-modal').addEventListener('click', function() {
            document.getElementById('productModal').style.display = 'none';
        });

        // Cerrar modal al hacer clic fuera del contenido
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('productModal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    