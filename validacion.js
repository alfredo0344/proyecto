let nombre, apellido, telefono, email, direccion, mensaje, botonenviar, gif, formu, estado, estado1, estado2, estado3, estado4, estado5, error7

nombre = document.getElementById("nombre");
apellido = document.getElementById("apellido");
telefono = document.getElementById("telefono");
email = document.getElementById("email");
direccion = document.getElementById("direccion");
msj = document.getElementById("mensaje");
botonenviar = document.getElementById("enviar");
gif = document.getElementById("gif");
formu = document.getElementById("formu");
error7 = document.getElementById("error7");

nombre.addEventListener('keyup', isvalidname);
apellido.addEventListener('keyup',isvalidlastname);
telefono.addEventListener('keyup',isvalidtelephone);
email.addEventListener('keyup',isvalidemail);
direccion.addEventListener('keyup',isvaliddireccion);
msj.addEventListener('keyup', isvalidmensaje);
botonenviar.addEventListener('click', enviarinfo);


function isvalidname(){
    let mensaje = document.getElementById("error1")
    estado = /^[A-Za-z]+$/.test(nombre.value)
    if(!estado){
        mensaje.classList.remove("invisible");
        nombre.classList.add("border-rose-500");
    }
    else{
        mensaje.classList.add("invisible");
        nombre.classList.remove("border-rose-500");
    }

}

function isvalidlastname(){
    let mensaje = document.getElementById("error2")
    estado1 = /^[A-Za-z]+$/.test(apellido.value)
    if(!estado1){
        mensaje.classList.remove("invisible");
        apellido.classList.add("border-rose-500");
    }
    else{
        mensaje.classList.add("invisible");
        apellido.classList.remove("border-rose-500");
    }
}

function isvalidtelephone(){
    let mensaje = document.getElementById("error4")
    estado2 = /^\d{4}-\d{3}-\d{2}-\d{2}$/.test(telefono.value)
    if(!estado2){
        mensaje.classList.remove("invisible");
        telefono.classList.add("border-rose-500");
    }
    else{
        mensaje.classList.add("invisible");
        telefono.classList.remove("border-rose-500");
    }
}

function isvalidemail(){
    let mensaje = document.getElementById("error3")
    estado3 = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/.test(email.value)
    if(!estado3){
        mensaje.classList.remove("invisible");
        email.classList.add("border-rose-500");
    }
    else{
        mensaje.classList.add("invisible");
        email.classList.remove("border-rose-500");
    }
}

function isvaliddireccion(){
    let mensaje = document.getElementById("error5")
    estado4 = /^[^<>\/\\\=\[\]\{\}&]+$/.test(direccion.value)
    if(!estado4){
        mensaje.classList.remove("invisible");
        direccion.classList.add("border-rose-500");
    }
    else{
        mensaje.classList.add("invisible");
        direccion.classList.remove("border-rose-500");
    }

}
function isvalidmensaje(){
    let mensaje = document.getElementById("error6")
    estado5 = /^[^<>\/\\\=\[\]\{\}&]+$/.test(msj.value)
    if(!estado5){
        mensaje.classList.remove("invisible");
        msj.classList.add("border-rose-500");
    }
    else{
        mensaje.classList.add("invisible");
        msj.classList.remove("border-rose-500");
    }
}


// al hacer click en enviar, debe ocultarse el formulario, aparecer un loader y luego de 3 o 4 segundos, redirigir al index (window.location )

function enviarinfo(){
    if(estado && estado1 && estado2 && estado3 && estado4 && estado5 == true){
        setInterval(
            ()=>{
                gif.classList.remove("invisible");
                formu.classList.add("invisible");
                
                setInterval(
                    ()=>{
                        window.location.assign("./index.html")
                    },2000
                )
            },500
        )
    }
    else{
        error7.classList.remove("invisible");
    }
}