let div = document.getElementById("miDiv");
div.addEventListener("click", function() {
    alert("Hola soy el Div!");
});

let boton = document.querySelector("#miDiv button");
boton.addEventListener("click", function(event) {
    alert("Hola!");
    event.stopPropagation(); 
});