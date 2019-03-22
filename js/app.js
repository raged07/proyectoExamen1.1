var user;
var description;
var image;
var today = new Date();
var dd = String(today.getDate());
var mm = String(today.getMonth());
var yyyy = today.getFullYear();
today = mm +"/" + dd + "/" + yyyy
var contadorComment = 0; 
var arregloDatos = [];
//2 urls de imagenes
//https://cdn.iconscout.com/icon/premium/png-256-thumb/game-17-99612.png
//http://files.softicons.com/download/sport-icons/pretty-office-vii-icons-by-custom-icon-design/ico/Game-playingcards.ico
function obtenerDatos(){
     user = document.getElementById('user').value
     description = document.getElementById('description').value
     image = document.getElementById('image').value

     arregloDatos.push(
        {
            usuario: user,
            descripcion: description,
            imagen: image,
            fecha: today,
            comments: []
        }
     );
     
     //Limpiar campos
     document.getElementById('user').value = "";
     document.getElementById('description').value = "";
     document.getElementById('image').value = "";
     post();
}
function post(){
    var generate;//no era global, generaba 2 posts
    for (let i = 0; i < arregloDatos.length; i++) {
        generate += 
        "<div id='commentSection'>"+
        "<div>"+
            "<img id='imag' src="+arregloDatos[i].imagen+" height=100px width=100px>"+
        "</div>"+
        "<div>"+
            "<span>"+(arregloDatos[i].usuario)+"</span>"+"<br>"+
            "<span>"+(arregloDatos[i].descripcion)+"</span>"+"<br>"+
            "<span>"+(arregloDatos[i].fecha)+"</span>"+
        "</div>"+
        "<div>"+
            "<button id='btnComment' type='button' onclick='comment("+i+")'>Comments </button>"+
        "</div>"+
        "<div id="+i+">";
        for (let j = 0; j < arregloDatos[i].comments.length; j++) {
            generate += "<div>Comment "+(arregloDatos[i].comments[j])+"</div><br>";
        }
        generate += "</div>"+
        "<div id='insComment"+i+"'></div><br>"+
        "</div>"
    }
    document.getElementById('section2').innerHTML = generate;
}


function comment(comment){
    var inComment = "<div><span>Comment</span></div>"+
        "<div><input type='text' id='inpComment'><button id='btnPost' onclick='add("+comment+")'>Post</button></div>";
        document.getElementById('insComment'+comment).innerHTML = inComment;
}


function add(pushComment){
    var inpComment = document.getElementById('inpComment').value;
    var posted = inpComment +" -> "+ today;
    arregloDatos[pushComment].comments.push(posted);
    post();
}