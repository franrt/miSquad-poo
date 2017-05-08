function amiga(id, nombre, apellido, edad, hobbies) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.hobbies = hobbies;
}
var squad = []; //para asignar una instancia a cada una. Las hice con const igual que los pokemones

const dani = new amiga("1", "Daniela", "Medina", 20, ["Pintar", "Bailar", "Cocinar"]);
const bere = new amiga("2", "Berenisse", "Ríos", 28, ["Leer", "Yoga", "Ser vegetariana"]);
const maca = new amiga("3", "Macarena", "Baltra", 27, ["Encuadernar", "Bailar", "Ver series"]);
const fran = new amiga("4", "Fran", "Ruiz-Tagle", 35, ["Ilustrar", "Pugs", "Cantar"]);
const clau = new amiga("5", "Claudia", "Rivera", 33, ["Gatos", "Patinar", "Escribir"]);
const susana = new amiga("6", "Susana", "Arce", 28, ["Ficcion", "Amistosa", "Emprender"]);
const andrea = new amiga("7", "Andrea", "Miranda", 24, ["Dibujar", "Leer", "Aprender"]);
const nico = new amiga("8", "Nicole", "Aliste", 32, ["Gamer", "Cosas Kawai", "Alicia"]);
squad.push(dani, bere, maca, fran, clau, susana, andrea, nico);

var comentario = [];

function Comentario(idGente, comentarios, likes) {
    this.idGente = idGente;
    this.comentarios = comentarios;
    this.likes = likes;
}

function imprimir(gente) {
    var contiene = document.getElementById("amigas");
    var texto = "";
    squad.forEach(function(gente) {
        texto +=
            "<div>" + "<img src=img/" + gente.id + ".png>" + "</div>" + "<div>" + gente.nombre + " " + gente.apellido + " " + gente.edad + "</div>"

        gente.hobbies.forEach(function(hobbies) {

            texto += "<li>" + hobbies + "</li>";

        });
        texto += "<h3> Comentarios </h3>" + "<div id =" + gente.id + ">" + "</div>" + "<textarea id='texto'>" + "</textarea>" + "<button class='onclick='agrega(" + gente.id + ")'></button>" +
            "<div id='contenido'>" + "</div>";

    });

    contiene.innerHTML = texto;

}
/*agregar los comentarios
function agrega(genteI) {
    var textArea = document.getElementById("texto" + genteI.toString()).value;
    var cajaComentario = document.getElementById("contenido" + genteI.toString());

    var coment = new Comentarios(genteI, textArea, 0);

    comentario.push(coment);

    cajaComentario.innerHTML += coment.comentarios;
    // para limpiar el comentario
    textArea = "";
}
*/
imprimir()