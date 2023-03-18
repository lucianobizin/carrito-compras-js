/* Alcance del proyecto

Este proyecto se enmarca dentro de un sitio web de venta de servicios que favorecen el auto-conocimiento evolutivo-terapéutico.
Es un caso de un potencial clientes que se ha acercado para verificar la posibilidad de la generación de un sitio web que posea una página dentro del sitio por medio de la cual pueda ofrecer sus servicios y productos desde Bilbao, España.
Se ofrecerán varios servicios y productos por rubro y se los podrá añadir a un carrito para su posterior venta.

Esta es una segunda aproximación a fin de presentar la temática (entiendo que se podría haber clases y subclases que favorecerían el ordenamiento)

En esta ocasión se agregó el código HTML de la

NOTA: la primera aproximación se conservó en index(entrega2).js

*/

// 1. SE CREAN LAS CLASES DE LOS SERVICIOS Y PRODUCTOS OFRECIDOS
// Se crean las clases de los servicios y productos ofrecidos en ./pages/productos_servicios.html

class Astrologia {
    constructor(id, nombre, precio, entregable, diasParaEntrega) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.entregable = entregable;
        this.diasParaEntrega = diasParaEntrega;
    }
}

class DadosYRunas {
    constructor(id, nombre, precio, entregable, diasParaEntrega, cantidadPreguntas) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.entregable = entregable;
        this.diasParaEntrega = diasParaEntrega;
        this.cantidadPreguntas = cantidadPreguntas;
    }
}

class Tarot {
    constructor(id, nombre, precio, entregable, diasParaEntrega, cantidadPreguntas) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.entregable = entregable;
        this.diasParaEntrega = diasParaEntrega;
        this.cantidadPreguntas = cantidadPreguntas;
    }
}

class Eventos {
    constructor(id, nombre, precio, descripción, fecha, hora, lugar, vacantes) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripción = descripción;
        this.fecha = fecha;
        this.hora = hora;
        this.lugar = lugar;
        this.vacantes = vacantes;
    }
}

class Talleres {
    constructor(id, nombre, precio, duracion) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.duracion = duracion;
    }
}

class Productos {
    constructor(id, nombre, precio, cantidad, areaDespacho) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.areaDespacho = areaDespacho;
    }
}

// 2. SE INSTANCIAS LOS SERVICIOS Y PRODUCTOS
// Listado inicial de servicios y productos ofrecidos

// Se crean los servicios ofrecidos de Astrología
const cartaNatal = new Astrologia(1.1, 'Carta natal', 25, 'Carta + Documento PDF con especificaciones técnicas', 14);
const revolucionSolar = new Astrologia(1.2, 'Revolucón solar', 20, 'Diagrama y Documento PDF con especificaciones técnicas', 7);
const transitos = new Astrologia(1.3, 'Tránsitos', 18, 'Documento PDF con análisis de influencias', 7);
const progresiones = new Astrologia(1.4, 'Progresiones', 18, 'Documento PDF con riesgos y oportunidades', 7);
const sinestrias = new Astrologia(1.5, 'Sinestrías', 20, 'Documento PDF explicativo y videos', 7);
const analisisCompletoMBTI = new Astrologia (1.6, 'Análisis Completo MBTI', 50, 'Documento PDF explicativo y videos')

// Se crean los servicios de cursos
const introduccionTarot = new Talleres (2.1, 'Introducción al tarot', 25, 60);
const nivelMedioTarot = new Talleres (2.2, 'Nivel medio de tarot', 25, 60);
const nivelAvanzadoTarot = new Talleres (2.3, 'Nivel avanzado de tarot', 25, 60);
const introduccionAstro = new Talleres (2.4, 'Introducción a la astrología', 25, 60);
const nivelMedioAstro = new Talleres (2.5, 'Nivel medio de astrología', 25, 60);
const nivelAvanzadoAstro = new Talleres (2.6, 'Nivel avanzado de astrología', 25, 60);

// Se crean los servicios ofrecidos de Dados y Runas Nórdicas
const tiradaDados2Preg = new DadosYRunas(3.1, 'Tirada de dados 2 preguntas', 10, 'Videos, fotos y audios', 1, 2);
const tiradaDados3Preg = new DadosYRunas(3.2, 'Tirada de dados 3 preguntas', 13, 'Videos, fotos y audios', 1, 3);
const tiradaDados4Preg = new DadosYRunas(3.3, 'Tirada de dados 4 preguntas', 15, 'Videos, fotos y audios', 1, 4);
const tiradaRunasNordicas2Preg = new DadosYRunas(3.4, 'Tirada de runas nórdicas 2 preguntas', 10, 'Videos, fotos y audios', 1, 2);
const tiradaRunasNordicas3Preg = new DadosYRunas(3.5, 'Tirada de runas nórdicas 3 preguntas', 13, 'Videos, fotos y audios', 1, 3);
const tiradaRunasNordicas4Preg = new DadosYRunas(3.6, 'Tirada de runas nórdicas 4 preguntas', 15, 'Videos, fotos y audios', 1, 4);

// Se crean los servicios ofrecidos de Tarot
const tiradaCasasAstrologicas = new Tarot(4.1, 'Tirada de casas astrológicas', 20, 'Videos, fotos y audios', 7, 0)
const tiradaTarot2Preg = new Tarot(4.2, 'Tirada de tarot 2 preguntas', 10, 'Videos, fotos y audios', 1, 2);
const tiradaTarot3Preg = new Tarot(4.3, 'Tirada de tarot 3 preguntas', 13, 'Videos, fotos y audios', 1, 3);
const tiradaTarot4Preg = new Tarot(4.4, 'Tirada de tarot 4 preguntas', 15, 'Videos, fotos y audios', 1, 4);
const tiradaTarot1hora = new Tarot(4.5, 'Tirada de tarot 1 hora', 15, 'Zoom (reunión virtual)', 1, 4);
const tallerVirtualIntroTarot = new Tarot(4.6, 'Taller virtual de introducción al tarot', 50, 'Videos, fotos y audios', 0, 0);

// Se crean los servicios ofrecidos de Eventos
const nocheTarotYVino = new Eventos(5.1, 'Noche de tarot y vino', 20, 'Una noche de encuentro, tarot y vino', '25/03/2023', 19, 'Bilbao', 50);
const mitologiaFemenina = new Eventos(5.2, 'Mitologías femeninas', 20, 'Encuentro para profundizar las mujeres en las mitologías', '28/04/2023', 17, 'Bilbao', 50);
const tardesSimbolosAstrologicos = new Eventos(5.3, 'Tardes de símbolos astrológicos', 20, 'Tardes para profundizar los símbolos astrológicos', '05/05/2023', 18, 'Bilbao', 50);
const chocolateVinoAstrologia = new Eventos(5.4, 'Chocolate, vino y astrologia', 20, 'Atardeceres con chocolate, buen vino y astrología', '13/06/2023', 19, 'Bilbao', 50);
const runasDadosMujeresYMás = new Eventos(5.5, 'Runas, dados, mujeres y más', 20, 'Una tarde para pasar entre nosotras con el misterio de los dados y las runas', '24/07/2023', 18, 'Bilbao', 50);
const despertandoFuerzaFemenina = new Eventos(5.6, 'Despertando la fuerza femenina', 20, 'Fin de semana de retiro holísitico para hacer fluir el manantial de la mujer', '15/08/2023', 8, 'Bilbao', 100);

// Se crean los productos ofrecidos
const deckTarot = new Productos(6.1, 'Deck de tarot', 20, 10, 'global');
const setPiedras = new Productos(6.2, 'Set de piedras', 5, 8, 'Pais Vasco');
const runasNordicas = new Productos(6.3, 'Runas nórdicas', 15, 5, 'global');
const velaAromatizante = new Productos(6.4, 'Vela aromatizante', 7, 10, 'España');
const dadosTiradas = new Productos(6.5, 'Dados para tiradas', 7, 10, 'España');
const sahumerio = new Productos(6.6, 'Sahumerio', 1.5, 20, 'Pais Vasco');

// 3. SE CREA EL CARROUSEL DE LOS SERVICIOS Y PRODUCTOS OFRECIDOS
// Se crea el carrousel de ./pages/productos_servicios.html
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselWidth = carouselItems.length * 100;
carousel.style.width = `${carouselWidth}%`;

// 4. SIMULACIÓN DE ADQUISICIÓN DE SERVICIOS Y PRODUCTOS

// 4.1. SE CREAN LOS ARRAYS CON LOS PRODUCTOS
const astrologia = [cartaNatal, revolucionSolar, transitos, progresiones, sinestrias, analisisCompletoMBTI];
const cursos = [introduccionTarot, nivelMedioTarot, nivelAvanzadoTarot, introduccionAstro, nivelMedioAstro, nivelAvanzadoAstro];
const tiradasDadosYRunas = [tiradaDados2Preg, tiradaDados3Preg, tiradaDados4Preg, tiradaRunasNordicas2Preg, tiradaRunasNordicas3Preg, tiradaRunasNordicas4Preg];
const tarot = [tiradaCasasAstrologicas, tiradaTarot2Preg, tiradaTarot3Preg, tiradaTarot4Preg, tiradaTarot1hora, tallerVirtualIntroTarot];
const eventos = [nocheTarotYVino, mitologiaFemenina, tardesSimbolosAstrologicos, chocolateVinoAstrologia, runasDadosMujeresYMás, despertandoFuerzaFemenina];
const productos = [deckTarot, setPiedras, runasNordicas, velaAromatizante, dadosTiradas, sahumerio];

// 4.2. SE CREA UN ARRAY GENERAL PARA CENTRALIZAR TODOS LOS PRODUCTOS Y SERVICIOS PARA CUALQUIER MANIPULACIÓN O BÚSQUEDA
const serviciosYProductos = [astrologia, cursos, tiradasDadosYRunas, tarot, eventos, productos];
// console.log(serviciosYProductos)

// 4.3. SE CREAR UNA FUNCIÓN PARA BUSCAR PRODUCTOS (se linkeará con el botón "Buscar productos de ./productos_servicios.html")
productoIngresado = prompt('¿Qué producto o servicio querés consultar? 1. Astrología, 2. Cursos, 3. Dados y Runas, 4. Tarot, 5. Eventos, 6. Productos')
productoIngresadoUpper = productoIngresado.toUpperCase();

productoCorrecto = false;    
while (productoCorrecto === false) {

    if (productoIngresadoUpper === 'ASTROLOGÍA') {
        alert('Su respuesta ha sido 1: Astrología');
        productoCorrecto = true;
    } else if (productoIngresadoUpper === 'CURSOS') {
        alert('Su respuesta ha sido 2: Mbti');
        productoCorrecto = true;
    } else if (productoIngresadoUpper === 'DADOS Y RUNAS') {
        alert('Su respuesta ha sido 3: Dados y Runas');
        productoCorrecto = true;
    } else if (productoIngresadoUpper ===  'TAROT') {
        alert('Su respuesta ha sido 4: Tarot');
        productoCorrecto = true;
    } else if (productoIngresadoUpper === 'EVENTOS') {
        alert('Su respuesta ha sido 5: Eventos');
        productoCorrecto = true;
    } else if (productoIngresadoUpper === 'PRODUCTOS') {
        alert('Su respuesta ha sido 6: Productos');
        productoCorrecto = true;
    } else {
        productoIngresado = prompt('Indica el nombre correcto del tipo de producto o servicio que deseas buscar: 1. Astrología, 2. Cursos, 3. DadosYrunas, 4. Tarot, 5. Eventos, 6. Productos').toLocaleUpperCase();
        productoIngresadoUpper = productoIngresado.toUpperCase();
    }

}

const BuscarProducto = (productoIngresado) => {

    switch (productoIngresadoUpper) {
        case 'ASTROLOGÍA': 
            productoAstrologia = prompt('Indica el servicio de Astrología que deseas buscar: 1. Carta natal, 2. Revolución solar, 3. Tránsitos, 4. Progresiones, 5. Sinestrías, 6. Análisis Completo MBTI]');
            productoAstrologiaUpper = productoAstrologia.toUpperCase();
            validador = false
            while (validador === false) {
                if (productoAstrologiaUpper === 'CARTA NATAL') {
                    alert('Su respuesta ha sido 1: Carta natal');
                    validador = true;
                } else if (productoAstrologiaUpper === 'REVOLUCIÓN SOLAR') {
                    alert('Su respuesta ha sido 2: Revolución solar');
                    validador = true;
                } else if (productoAstrologiaUpper === 'TRÁNSITOS') {
                    alert('Su respuesta ha sido 3: Tránsitos');
                    validador = true;
                } else if (productoAstrologiaUpper ===  'PROGRESIONES') {
                    alert('Su respuesta ha sido 4: Progresiones');
                    validador = true;
                } else if (productoAstrologiaUpper === 'SINESTRÍAS') {
                    alert('Su respuesta ha sido 5: Sinestrías');
                    validador = true;
                } else if (productoAstrologiaUpper === 'ANÁLISIS COMPLETO MBTI') {
                    alert('Su respuesta ha sido 6: Análisis completo MBTI');
                    validador = true;
                } else {
                    productoAstrologia = prompt('Indica el servicio de Astrología que deseas buscar: 1. Carta natal, 2. Revolución solar, 3. Tránsitos, 4. Progresiones, 5. Sinestrías, 6. Análisis Completo MBTI').toLocaleUpperCase();
                    productoAstrologiaUpper = productoAstrologia.toUpperCase();
                }
            }
            
            alert(`Usted ha elegido ${productoAstrologia} de los servicios de astrología`);
            serviciosYProductos.forEach ( (servProd) => {
                servProd.forEach ((servProdConcreto) => {
                    if (servProdConcreto.nombre === productoAstrologia){
                        alert (`Los detalles de su producto son: ${servProdConcreto.id}, ${servProdConcreto.nombre}, ${servProdConcreto.precio}`)
                    }
                })
            })
            break

        case 'CURSOS': 
            productoCursos = prompt('Indica el el curso que deseas buscar: 1. Introducción al tarot, 2. Nivel medio de tarot, 3. Nivel avanzado de tarot, 4. Introducción a la astrología, 5. Nivel medio de astrología, 6. Nivel avanzado de Astrología');
            productoCursosUpper = productoCursos.toUpperCase();
            validador = false
            while (validador === false) {
                if (productoCursosUpper === 'INTRODUCCIÓN AL TAROT') {
                    alert('Su respuesta ha sido 1: Introducción al tarot');
                    validador = true;
                } else if (productoCursosUpper === 'NIVEL MEDIO DE TAROT') {
                    alert('Su respuesta ha sido 2: Nivel medio de tarot');
                    validador = true;
                } else if (productoCursosUpper === 'NIVEL AVANZADO DE TAROT') {
                    alert('Su respuesta ha sido 3: Nivel avanzado de tarot');
                    validador = true;
                } else if (productoCursosUpper ===  'INTRODUCCIÓN A LA ASTROLOGÍA') {
                    alert('Su respuesta ha sido 4: Introducción a la astrología');
                    validador = true;
                } else if (productoCursosUpper === 'NIVEL MEDIO DE ASTROLOGÍA') {
                    alert('Su respuesta ha sido 5: Nivel medio de astrología');
                    validador = true;
                } else if (productoCursosUpper === 'NIVEL AVANZADO DE ASTROLOGÍA') {
                    alert('Su respuesta ha sido 6: Nivel avanzado de astrología');
                    validador = true;
                } else {
                    productoCursos = prompt('1. Introducción al tarot, 2. Nivel medio de tarot, 3. Nivel avanzado de tarot, 4. Introducción a la astrología, 5. Nivel medio de astrología, 6. Nivel avanzado de Astrología').toLocaleUpperCase();
                    productoCursosUpper = productoCursos.toUpperCase();
                }
            }
            
            alert(`Usted ha elegido ${productoCursos} de los servicios de Cursos`);
            serviciosYProductos.forEach ( (servProd) => {
                servProd.forEach ((servProdConcreto) => {
                    if (servProdConcreto.nombre === productoCursos){
                        alert (`Los detalles de su servicio o producto son: ${servProdConcreto.id}, ${servProdConcreto.nombre}, ${servProdConcreto.precio}`)
                    }
                })
            })
            break

        case 'DADOS Y RUNAS': 
            productoDadosRunas = prompt('Indica el servicio de dados o runas que deseas buscar: 1. Tirada de dados 2 preguntas, 2. Tirada de dados 3 preguntas, 3. Tirada de dados 4 preguntas, 4. Tirada de runas nórdicas 2 preguntas, 5. Tirada de runas nórdicas 3 preguntas, 6. Tirada de runas nórdicas 4 preguntas');
            productoDadosRunasUpper = productoDadosRunas.toUpperCase();
            validador = false
            while (validador === false) {
                if (productoDadosRunasUpper === 'TIRADA DE DATOS 2 PREGUNTAS') {
                    alert('Su respuesta ha sido 1: Tirada de dados 2 preguntas');
                    validador = true;
                } else if (productoDadosRunasUpper === 'TIRADA DE DATOS 3 PREGUNTAS') {
                    alert('Su respuesta ha sido 2: Tirada de dados 3 preguntas');
                    validador = true;
                } else if (productoDadosRunasUpper === 'TIRADA DE DATOS 4 PREGUNTAS') {
                    alert('Su respuesta ha sido 3: Tirada de dados 4 preguntas');
                    validador = true;
                } else if (productoDadosRunasUpper ===  'TIRADA DE RUNAS NÓRDICAS 2 PREGUNTAS') {
                    alert('Su respuesta ha sido 4: Tirada de runas nórdicas 2 preguntas');
                    validador = true;
                } else if (productoDadosRunasUpper === 'TIRADA DE RUNAS NÓRDICAS 3 PREGUNTAS') {
                    alert('Su respuesta ha sido 5: Tirada de runas nórdicas 3 preguntas');
                    validador = true;
                } else if (productoDadosRunasUpper === 'TIRADA DE RUNAS NÓRDICAS 4 PREGUNTAS') {
                    alert('Su respuesta ha sido 6: Tirada de runas nórdicas 4 preguntas');
                    validador = true;
                } else {
                    productoDadosRunas = prompt('1. Introducción al tarot, 2. Nivel medio de tarot, 3. Nivel avanzado de tarot, 4. Introducción a la astrología, 5. Nivel medio de astrología, 6. Nivel avanzado de Astrología').toLocaleUpperCase();
                    productoDadosRunasUpper = productoDadosRunas.toUpperCase();
                }
            }
            
            alert(`Usted ha elegido ${productoDadosRunas} de los servicios de Dados y Runas`);
            serviciosYProductos.forEach ( (servProd) => {
                servProd.forEach ((servProdConcreto) => {
                    if (servProdConcreto.nombre === productoDadosRunas){
                        alert (`Los detalles de su servicio y/o producto son: ${servProdConcreto.id}, ${servProdConcreto.nombre}, ${servProdConcreto.precio}`)
                    }
                })
            })
            break

        case 'TAROT': 
            productoTarot = prompt('Indica el servicio de tarot que deseas buscar: 1. Tirada de casas astrológicas, 2. Tirada de tarot 2 preguntas, 3. Tirada de tarot 3 preguntas, 4. Tirada de tarot 4 preguntas, 5. Tirada de tarot 1 hora, 6. Taller virtual de introducción al tarot');
            productoTarotUpper = productoTarot.toUpperCase();
            validador = false
            while (validador === false) {
                if (productoTarotUpper === 'TIRADA DE CASAS ASTROLÓGICAS') {
                    alert('Su respuesta ha sido 1: tirada de casas astrológicas');
                    validador = true;
                } else if (productoTarotUpper === 'TIRADA DE TAROT 2 PREGUNTAS') {
                    alert('Su respuesta ha sido 2: Tirada de tarot 2 preguntas');
                    validador = true;
                } else if (productoTarotUpper === 'TIRADA DE TAROT 3 PREGUNTAS') {
                    alert('Su respuesta ha sido 3: Tirada de tarot 3 preguntas');
                    validador = true;
                } else if (productoTarotUpper ===  'TIRADA DE TAROT 4 PREGUNTAS') {
                    alert('Su respuesta ha sido 4: Tirada de tarot 4 preguntas');
                    validador = true;
                } else if (productoTarotUpper === 'TIRADA DE TAROT 1 HORA') {
                    alert('Su respuesta ha sido 5: Tirada de tarot 1 hora');
                    validador = true;
                } else if (productoTarotUpper === 'TALLER VIRTUAL DE INTRODUCCIÓN AL TAROT') {
                    alert('Su respuesta ha sido 6: Taller virtual de introducción al tarot');
                    validador = true;
                } else {
                    productoTarot = prompt('1. Tirada de casas astrológicas, 2. Tirada de tarot 2 preguntas, 3. Tirada de tarot 3 preguntas, 4. Tirada de tarot 4 preguntas, 5. Tirada de tarot 1 hora, 6. Taller virtual de introducción al tarot').toLocaleUpperCase();
                    productoTarotUpper = productoTarot.toUpperCase();
                }
            }
            
            alert(`Usted ha elegido ${productoTarot} de los servicios y productos de Tarot`);
            serviciosYProductos.forEach ( (servProd) => {
                servProd.forEach ((servProdConcreto) => {
                    if (servProdConcreto.nombre === productoTarot){
                        alert (`Los detalles de su producto son: ${servProdConcreto.id}, ${servProdConcreto.nombre}, ${servProdConcreto.precio}`)
                    }
                })
            })
            break

        case 'EVENTOS': 
            productoEventos = prompt('Indica el servicio de eventos que deseas buscar: 1. Noche de tarot y vino, 2. Mitologías femeninas, 3. Tardes de simbolos astrologicos, 4. Chocolate, vino y astrologia, 5. Runas, dados, mujeres y más, 6. Despertando la fuerza femenina');
            productoEventosUpper = productoEventos.toUpperCase();
            validador = false
            while (validador === false) {
                if (productoEventosUpper === 'NOCHE DE TAROT Y VINO') {
                    alert('Su respuesta ha sido 1: Noche de tarot y vino');
                    validador = true;
                } else if (productoEventosUpper === 'MITOLOGÍA FEMENINA') {
                    alert('Su respuesta ha sido 2: Mitología femenina');
                    validador = true;
                } else if (productoEventosUpper === 'TARDES DE SÍMBOLOS ASTROLÓGICOS') {
                    alert('Su respuesta ha sido 3: Tardes de simbolos astrologicos');
                    validador = true;
                } else if (productoEventosUpper ===  'CHOCOLATE, VINO Y ASTROLOGÍA') {
                    alert('Su respuesta ha sido 4: Chocolate, vino y astrologia');
                    validador = true;
                } else if (productoEventosUpper === 'RUNAS, DADOS, MUJERES Y MÁS') {
                    alert('Su respuesta ha sido 5: Runas, dados, mujeres y más');
                    validador = true;
                } else if (productoEventosUpper === 'DESPERTANDO LA FUERZA FEMENINA') {
                    alert('Su respuesta ha sido 6: Despertando la fuerza femenina');
                    validador = true;
                } else {
                    productoEventos = prompt('1. Noche de tarot y vino, 2. Mitología femenina, 3. Tardes de simbolos astrologicos, 4. Chocolate, vino y astrologia, 5. Runas, dados, mujeres y más, 6. Despertando la fuerza femenina').toLocaleUpperCase();
                    productoEventosUpper = productoEventos.toUpperCase();
                }
            }
            
            alert(`Usted ha elegido ${productoEventos} de los productos y servicios de Eventos`);
            serviciosYProductos.forEach ( (servProd) => {
                servProd.forEach ((servProdConcreto) => {
                    if (servProdConcreto.nombre === productoEventos){
                        alert (`Los detalles de su producto son: ${servProdConcreto.id}, ${servProdConcreto.nombre}, ${servProdConcreto.precio}`)
                    }
                })
            })
            break

        case 'PRODUCTOS': 
            productoProductos = prompt('Indica el servicio de eventos que deseas buscar: 1. Deck de tarot, 2. Set de piedras, 3. Runas nórdicas, 4. Vela aromatizante, 5. Dados para tiradas, 6. Sahumerio');
            productoProductosUpper = productoProductos.toUpperCase();
            validador = false
            while (validador === false) {
                if (productoProductosUpper === 'DECK DE TAROT') {
                    alert('Su respuesta ha sido 1: Deck de tarot');
                    validador = true;
                } else if (productoProductosUpper === 'SET DE PIEDRAS') {
                    alert('Su respuesta ha sido 2: Set de piedras');
                    validador = true;
                } else if (productoProductosUpper === 'RUNAS NÓRDICAS') {
                    alert('Su respuesta ha sido 3: Runas nórdicas');
                    validador = true;
                } else if (productoProductosUpper ===  'VELA AROMATIZANTE') {
                    alert('Su respuesta ha sido 4: Vela aromatizante');
                    validador = true;
                } else if (productoProductosUpper === 'DADOS PARA TIRADAS') {
                    alert('Su respuesta ha sido 5: Dados para tiradas');
                    validador = true;
                } else if (productoProductosUpper === 'SAHUMERIO') {
                    alert('Su respuesta ha sido 6: Sahumerio');
                    validador = true;
                } else {
                    productoProducto = prompt('1. Deck de tarot, 2. Set de piedras, 3. Runas nórdicas, 4. Vela aromatizante, 5. Dados para tiradas, 6. Sahumerio').toLocaleUpperCase();
                    productoProductosUpper = productoProducto.toUpperCase();
                }
            }
            
            alert(`Usted ha elegido ${productoProducto} de la lista de productos`);
            serviciosYProductos.forEach ( (servProd) => {
                servProd.forEach ((servProdConcreto) => {
                    if (servProdConcreto.nombre === productoProducto){
                        alert (`Los detalles de su producto son: ${servProdConcreto.id}, ${servProdConcreto.nombre}, ${servProdConcreto.precio}`)
                    }
                })
            })
            break

        default:
            Alert ('Error crítico, debe volver a comenzar')
            break
    }
}

BuscarProducto (productoIngresado);

// 4.4. OTRO INTENTO => SE ESCUCHA LO QUE ESCRIBE EL USUARIO (EVENTOS) => NO FUNCIONA EL CAMBIO DE VARIABLE GLOBAL textoBusqueda

// let textoBusqueda = '';
// // Se crea la función para recoger el valor de <input type="text">
// function validarFormulario(elemento){
//     // Se cancela el comportamiento del evento
//     elemento.preventDefault();
//     // Se obtiene el elemento desde el cual se disparó el evento
//     let formulario = elemento.target
//     // Se obtiene el valor del hijo <input type="text">
//     textoBusqueda = formulario.children[0].value
// }

// // Se escucha el evento del input y del click del boton (como gatillo de alertas)
// const btnSubmit = document.getElementById ('btnSubmit')

// btnSubmit.onclick = () => {
//     console.log("Click")
//     const formularioBusqueda = document.getElementById ('btnBuscarServProd');
//     formularioBusqueda.addEventListener ('submit', validarFormulario)
//     serviciosYProductos.forEach ((servProd) => {
//         servProd.forEach ((servProdConcreto) => {
//             if (servProdConcreto.nombre === textoBusqueda){
//                 alert (`Se ha encontrado el servicio o producto ${textoBusqueda}`)
//                 alert (`Su servicio o producto cuenta con las siguientes características ${textoBusqueda.id, textoBusqueda.nombre, textoBusqueda.precio}`)
//             }
//         })
//     })
// }
