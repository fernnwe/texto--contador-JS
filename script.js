const textoContador = document.querySelector("#textoContador")
const botonSumar = document.querySelector("#botonSumar")
const botonRestar = document.querySelector("#botonRestar")


botonSumar = addEventListener("click", function(){
           textoContador.textContent++;

})

botonRestar = addEventListener("click", function(){
    textoContador.textContent--;

})
