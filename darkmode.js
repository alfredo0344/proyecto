let boton = document.getElementById('botonTema');
let nav = document.getElementById("barra");
let div = document.getElementById("medio");
let footer = document.getElementById("pie");
let icon = document.getElementById("icon");


function cambiarOscuro(){
    //Aplicamos nuevos estilos
    nav.classList.remove("bg-[#86cecb]", "text-[#e12885]");
    nav.classList.add("bg-[#965fd4]", "text-[#8bd450]");
    div.classList.remove("bg-[#bec8d1]","text-[#373b3e]");
    div.classList.add("bg-[#1d1a2f]","text-[#3f6d4e]");
    footer.classList.remove("bg-[#137a7f]","text-[#e12885]");
    footer.classList.add("bg-[#734f9a]","text-[#8bd450]");    
    //Cambiar Imagen de luna por sol
    icon.setAttribute("src","./image/sun-icon-8581.png");

    //Removemos el evento con el manejador de tema oscuro
    boton.removeEventListener("click",cambiarOscuro);

    // Agregamos un evento con un manejador para el tema claro
    boton.addEventListener("click",cambiarClaro);
}

function cambiarClaro(){
    //Aplicamos nuevos estilos
    nav.classList.remove("bg-[#965fd4]", "text-[#8bd450]");
    nav.classList.add("bg-[#86cecb]", "text-[#e12885]");
    div.classList.remove("bg-[#1d1a2f]","text-[#3f6d4e]");
    div.classList.add("bg-[#bec8d1]","text-[#373b3e]");
    footer.classList.remove("bg-[#734f9a]","text-[#8bd450]");
    footer.classList.add("bg-[#137a7f]","text-[#e12885]")
    boton.classList.remove("light")
    boton.classList.add("dark");
    //Cambiar Imagen de sol por luna
   icon.setAttribute("src","./image/moonpng.parspng.com-3.png");
    
    //Removemos el evento con el manejador de tema claro
    boton.removeEventListener("click",cambiarClaro)

    // Agregamos un evento con un manejador para el tema oscuro
    boton.addEventListener("click",cambiarOscuro);
}



// Evento que se agrega al iniciar la carga de la pagina
boton.addEventListener("click",cambiarOscuro);