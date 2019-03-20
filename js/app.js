var user;
var description;
var image;
var today = new Date();
var dd = String(today.getDate());
var mm = String(today.getMonth());
var yyyy = today.getFullYear();
today = mm +"/" + dd + "/" + yyyy
//2 urls de imagenes
//https://cdn.iconscout.com/icon/premium/png-256-thumb/game-17-99612.png
//http://files.softicons.com/download/sport-icons/pretty-office-vii-icons-by-custom-icon-design/ico/Game-playingcards.ico
function obtenerDatos(){
     user = document.getElementById('user').value
     description = document.getElementById('description').value
     image = document.getElementById('image').value
}
function save(){
    //alert("si funciona")
    obtenerDatos();
    //se crea el elemento imagen y asignamos atributos
    imageTag = document.createElement('img');
    imageTag.setAttribute('src', image);
    imageTag.setAttribute('height','100px');
    imageTag.setAttribute('width','100px');
    document.body.appendChild(imageTag);
    //creamos el boton 
    buttonComment = document.createElement('button');
    buttonComment.innerHTML = "Comentarios";
    document.body.appendChild(buttonComment);
    //fecha
        //console.log(today);
    //document.getElementsByTagName('div')[1].appendChild(imageTag).innerHTML;
    document.getElementsByTagName('div')[1].innerHTML = "<h3>" + "<br>" + user + "<br>" + description;
    
    
}