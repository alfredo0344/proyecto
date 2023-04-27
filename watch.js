let hora = document.getElementById("hour");
let minuto = document.getElementById("min");

setInterval(
    ()=>{
        let tiempo = new Date();
        hora.innerText = tiempo.getHours();
        minuto.innerText = tiempo.getMinutes();
        console.log(`${hora.getHours()}:${hora.getMinutes()}`)
    }, 1000
)

const loop = document.getElementById("fondo");

loop.addEventListener('animationend', () => {
    loop.classList.add('animate__animated', 'animate__bounceOutLeft');
  });