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
    constructor(id, servicioAstro, precio, entregable, diasParaEntrega) {
        this.id = id;
        this.servicioAstro = servicioAstro;
        this.precio = precio;
        this.entregable = entregable;
        this.diasParaEntrega = diasParaEntrega;
    }
}

class DadosYRunas {
    constructor(id, servicioDados, precio, entregable, diasParaEntrega, cantidadPreguntas) {
        this.id = id;
        this.servicioDados = servicioDados;
        this.precio = precio;
        this.entregable = entregable;
        this.diasParaEntrega = diasParaEntrega;
        this.cantidadPreguntas = cantidadPreguntas;
    }
}

class Tarot {
    constructor(id, servicioTarot, precio, entregable, diasParaEntrega, cantidadPreguntas) {
        this.id = id;
        this.servicioTarot = servicioTarot;
        this.precio = precio;
        this.entregable = entregable;
        this.diasParaEntrega = diasParaEntrega;
        this.cantidadPreguntas = cantidadPreguntas;
    }
}

class Eventos {
    constructor(id, servicioEvento, precio, descripción, fecha, hora, lugar, vacantes) {
        this.id = id;
        this.servicioEvento = servicioEvento;
        this.precio = precio;
        this.descripción = descripción;
        this.fecha = fecha;
        this.hora = hora;
        this.lugar = lugar;
        this.vacantes = vacantes;
    }
}

class Talleres {
    constructor(id, descripcion, precio, duracion) {
        this.id = id;
        this.descripcion = descripcion;
        this.precio = precio;
        this.duracion = duracion;
    }
}

class Productos {
    constructor(id, descripcion, precio, cantidad, areaDespacho) {
        this.id = id;
        this.descripcion = descripcion;
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
const analisisCompletoMBTI = new Astrologia (1.6, 'Análisis completo de astrología + MBTI', 50, 'Documento PDF explicativo y videos')

// Se crean los servicios de cursos
const introduccionTarot = new Talleres (2.1, 'Curso de introducción al tarot', 25, 60);
const nivelMedioTarot = new Talleres (2.1, 'Curso de nivel medio de tarot', 25, 60);
const nivelAvanzadoTarot = new Talleres (2.1, 'Curso de nivel avanzado de tarot', 25, 60);
const introduccionAstro = new Talleres (2.1, 'Curso de introducción a la astrologia', 25, 60);
const nivelMedioAstro = new Talleres (2.1, 'Curso de nivel medio de astrología', 25, 60);
const nivelAvanzadoAstro = new Talleres (2.1, 'Curso de nivel avanzado de astrologia', 25, 60);

// Se crean los servicios ofrecidos de Dados y Runas Nórdicas
const tiradaDados2Preg = new DadosYRunas(3.1, 'Tirada de dados 2 preguntas', 10, 'Videos, fotos y audios', 1, 2);
const tiradaDados3Preg = new DadosYRunas(3.2, 'Tirada de dados 3 preguntas', 13, 'Videos, fotos y audios', 1, 3);
const tiradaDados4Preg = new DadosYRunas(3.3, 'Tirada de dados 4 preguntas', 15, 'Videos, fotos y audios', 1, 4);
const tiradaRunasNordicas2Preg = new DadosYRunas(3.4, 'Tirada de runas nórdicas 2 preguntas', 10, 'Videos, fotos y audios', 1, 2);
const tiradaRunasNordicas3Preg = new DadosYRunas(3.5, 'Tirada de runas nórdicas 3 preguntas', 13, 'Videos, fotos y audios', 1, 3);
const tiradaRunasNordicas4Preg = new DadosYRunas(3.6, 'Tirada de runas nórdicas 4 preguntas', 15, 'Videos, fotos y audios', 1, 4);

// Se crean los servicios ofrecidos de Tarot
const tiradaCasasAstrologicas = new Tarot(4.1, 'Lectura de las casas astrológicas', 20, 'Videos, fotos y audios', 7, 0)
const tiradaTarot2Preg = new Tarot(4.2, 'Tirada de tarot 2 preguntas', 10, 'Videos, fotos y audios', 1, 2);
const tiradaTarot3Preg = new Tarot(4.3, 'Tirada de tarot 3 preguntas', 13, 'Videos, fotos y audios', 1, 3);
const tiradaTarot4Preg = new Tarot(4.4, 'Tirada de tarot 4 preguntas', 15, 'Videos, fotos y audios', 1, 4);
const tiradaTarot1hora = new Tarot(4.5, 'Tirada de tarot 1 hora', 15, 'Zoom (reunión virtual)', 1, 4);
const tallerVirtualIntroTarot = new Tarot(4.6, 'Taller introductorio al tarot (arcanos mayores)', 50, 'Videos, fotos y audios', 0, 0);

// Se crean los servicios ofrecidos de Eventos
const nocheTarotYVino = new Eventos(5.1, 'Noche de tarot y vino', 20, 'Una noche de encuentro, tarot y vino', '25/03/2023', 19, 'Bilbao', 50);
const mitologiaFemenina = new Eventos(5.2, 'Mitologías femeninas', 20, 'Encuentro para profundizar las mujeres en las mitologías', '28/04/2023', 17, 'Bilbao', 50);
const tardesSimbolosAstrologicos = new Eventos(5.3, 'Tardes de símbolos astrológicos', 20, 'Tardes para profundizar los símbolos astrológicos', '05/05/2023', 18, 'Bilbao', 50);
const chocolateVinoAstrologia = new Eventos(5.4, 'Chocolate, Vino y Astrología', 20, 'Atardeceres con chocolate, buen vino y astrología', '13/06/2023', 19, 'Bilbao', 50);
const runasDadosMujeresYMás = new Eventos(5.5, 'Runas, dados, mujeres y más', 20, 'Una tarde para pasar entre nosotras con el misterio de los dados y las runas', '24/07/2023', 18, 'Bilbao', 50);
const despertandoFuerzaFemenina = new Eventos(5.6, 'Despertando la fuerza femenina', 20, 'Fin de semana de retiro holísitico para hacer fluir el manantial de la mujer', '15/08/2023', 8, 'Bilbao', 100);

// Se crean los productos ofrecidos
const deckTarot1 = new Productos(6.1, 'Deck de tarot', 20, 10, 'global');
const setPiedras = new Productos(6.2, 'Set de piedras', 5, 8, 'Pais Vasco');
const runasNordicas = new Productos(6.3, 'Runas Nórdicas talladas en madera regional', 15, 5, 'global');
const velaAromatizante = new Productos(6.4, 'Vela aromatizante para meditar', 7, 10, 'España');
const dadosTiradas = new Productos(6.5, 'Dados políedricos de doce caras', 7, 10, 'España');
const sahumerio = new Productos(6.6, 'Sahumerio 100% natural', 1.5, 20, 'Pais Vasco');

// 3. SE CREA EL CARROUSEL DE LOS SERVICIOS Y PRODUCTOS OFRECIDOS
// Se crea el carrousel de ./pages/productos_servicios.html
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselWidth = carouselItems.length * 100;
carousel.style.width = `${carouselWidth}%`;

// 4. SIMULACIÓN DE ADQUISICIÓN DE SERVICIOS Y PRODUCTOS

// 4.1. SE CREAN LOS ARRAYS CON LOS PRODUCTOS
const astrología = [cartaNatal, revolucionSolar, transitos, progresiones, sinestrias, analisisCompletoMBTI];
const cursos = [introduccionTarot, nivelMedioTarot, nivelAvanzadoTarot, introduccionAstro, nivelMedioAstro, nivelAvanzadoAstro];
const tiradasDadosYRunas = [tiradaDados2Preg, tiradaDados3Preg, tiradaDados4Preg, tiradaRunasNordicas2Preg, tiradaRunasNordicas3Preg, tiradaRunasNordicas4Preg];
const tarot = [tiradaCasasAstrologicas, tiradaTarot2Preg, tiradaTarot3Preg, tiradaTarot4Preg, tiradaTarot1hora, tallerVirtualIntroTarot];
const eventos = [nocheTarotYVino, mitologiaFemenina, tardesSimbolosAstrologicos, chocolateVinoAstrologia, runasDadosMujeresYMás, despertandoFuerzaFemenina];

// 4.2. FUNCIÓN DE COMPRA DE SERVICIOS Y PRODUCTOS

const comprarServiciosProductos = (elemento) => {
    Alert ("Usted ha decidido adquirir un servicio y/o producto")
    Prompt ("¿Qué servicio o producto quieres adquirir?")
}







// Se crea una variable para terminar la compra cuando el usuario lo desee
let terminarCompra = false;

// Se crea un while a fin de continuar o detener la compra de parte del usuario
while (terminarCompra === false) {

    // Se solicita que el usuario indique si quiere adquirir un producto o servicio
    let servicioOProductoDeseado = parseInt(
        prompt('Indica si deseas un producto o servicios escribiendo 1 para productos y 2 para servicios: '));

    // Se crea esta variable para permanecer (validar respuesta del usuario) o salir del ciclo
    let escogioProductoOServicio = false;

    while (escogioProductoOServicio === false) {
        if (servicioOProductoDeseado === 1) {
            alert('Su respuesta ha sido 1: producto');
            escogioProductoOServicio = true;
        } else if (servicioOProductoDeseado === 2) {
            alert('Su respuesta ha sido 2: servicio');
            escogioProductoOServicio = true;
        } else {
            servicioOProductoDeseado = parseInt(prompt('Indica si deseas un producto o servicios escribiendo 1 para productos y 2 para servicios: '))
        }
    }

    let terminarCompraServicio = false;
    let terminarCompraProducto = false;

    // Si el usuario eligió 1
    if (servicioOProductoDeseado === 1) {

        let servicioComprar = parseInt(
            prompt('Indica el número del servicio que deseas adquirir ---> 1. Astrologia, 2. Mbti, 3. Dados, 4. Runas, 5. Tarot, 6. Eventos'));

        while (terminarCompraServicio === false) {

            if (servicioComprar === 1) {
                alert('Su respuesta ha sido 1: Astrologia');
                terminarCompraServicio = true;
            } else if (servicioComprar === 2) {
                alert('Su respuesta ha sido 2: Mbti');
                terminarCompraServicio = true
            } else if (servicioComprar === 3) {
                alert('Su respuesta ha sido 3: Dados');
                terminarCompraServicio = true
            } else if (servicioComprar === 4) {
                alert('Su respuesta ha sido 4: Runas');
                terminarCompraServicio = true
            } else if (servicioComprar === 5) {
                alert('Su respuesta ha sido 5: Tarot');
                terminarCompraServicio = true
            } else if (servicioComprar === 6) {
                alert('Su respuesta ha sido 6: Evento');
                terminarCompraServicio = true
            } else {
                servicioComprar = parseInt(
                    prompt('Indica el número del servicio que deseas adquirir ---> 1. Astrologia, 2. Mbti, 3. Dados, 4. Runas, 5. Tarot, 6. Eventos: '))
            }
        }

        // si el usuario eligió 2
    } else if (servicioOProductoDeseado === 2) {

        let servicioComprar = parseInt(
            prompt('Indica el número del servicio que deseas adquirir ---> 1. Tarot, 2. Piedras, 3. Runas, 4. Dados, 5. Esencias, 6. Sahumerios: '));

        while (terminarCompraProducto === false) {

            if (servicioComprar === 1) {
                alert('Su respuesta ha sido 1: Tarot');
                terminarCompraProducto = true;
            } else if (servicioComprar === 2) {
                alert('Su respuesta ha sido 2: Piedras');
                terminarCompraProducto = true
            } else if (servicioComprar === 3) {
                alert('Su respuesta ha sido 3: Runas');
                terminarCompraProducto = true
            } else if (servicioComprar === 4) {
                alert('Su respuesta ha sido 4: Dados');
                terminarCompraProducto = true
            } else if (servicioComprar === 5) {
                alert('Su respuesta ha sido 5: Esencias');
                terminarCompraProducto = true
            } else if (servicioComprar === 6) {
                alert('Su respuesta ha sido 6: Sahumerios');
                terminarCompraProducto = true
            } else {
                servicioComprar = parseInt(
                    prompt('Indica el número del servicio que deseas adquirir ---> 1. Astrologia, 2. Mbti, 3. Dados, 4. Runas, 5. Tarot, 6. Eventos: '))
            }
        }
    }

    let agregarCarrito = false;
    let seguirComprando = parseInt(prompt('Desea seguir comprando, indique 1 para SI y 2 para NO'));

    while (agregarCarrito === false) {

        if (seguirComprando === 1) {
            agregarCarrito = true;
        } else if (seguirComprando === 2) {
            alert('Gracias por su compra');
            agregarCarrito = true;
            terminarCompra = true;
        } else {
            seguirComprando = parseInt(prompt('Desea seguir comprando, indique 1 para SI y 2 para NO'));
        }
    }
}

// Generando una función de simulación de presupuesto

alert ('Ahora simularemos un presupuesto')

function SimularPresupuesto () {

    let salirLoop = false;
    
    let precioProductoOServicio;
    let cantidadProductoOServicio;
    let total =0; 
    let subtotal=0;
    while (salirLoop === false){

        precioProductoOServicio = parseInt(prompt('Ingresa el precio de un producto o servicio a adquirir'));
        cantidadProductoOServicio = parseInt(prompt('Ingresa la cantidad del producto o servicio a adquirir'));
        subtotal = precioProductoOServicio*cantidadProductoOServicio;
        total = subtotal+total;
        // console.log (total);

        let respuesta = parseInt(prompt('Desea seguir presupuestando, indique 1 para SI y 2 para NO'));

        if (respuesta === 1) {
            continue
        } else if (respuesta === 2){
            return total;
        } else {
            respuesta = parseInt(prompt('Desea seguir presupuestando, indique 1 para SI y 2 para NO'));
        }
    }
}

const simulandoPresupuesto = SimularPresupuesto();
// console.log(simulandoPresupuesto);
alert(simulandoPresupuesto)









// // Revisando servicios y productos aleatorios
// console.log (sinestrias);
// console.log (tiradaRunasNordicas4Preg);
// console.log (tallerVirtualIntroTarot);
// console.log (nocheTarotYVino);