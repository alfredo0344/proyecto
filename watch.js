let hora = document.getElementById("hour");

setInterval(
    ()=>{
        let tiempo = new Date();
        hora.innerText = tiempo.toLocaleTimeString();
    }, 1000
)

const loop = document.getElementById("fondo");

loop.addEventListener('animationend', () => {
    loop.classList.add('animate__animated', 'animate__bounceOutLeft');
  });