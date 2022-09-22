let screen = document.getElementById("pantalla");
const uno = document.getElementById("uno");
const borrar = document.getElementById("borra");

uno.addEventListener("click", () => {
    screen.innerHTML = "1"    
})

borrar.addEventListener("click", () => {
    screen.innerHTML = "0"
})