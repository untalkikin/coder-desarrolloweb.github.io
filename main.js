// Variables
let sabor = document.querySelector("#sabor").value;
let tamano = document.querySelector("#tamano").value;

// Función para calcular el total
function calcularTotal() {
  // Precios de los sabores
  let preciosSabores = {
    pepperoni: 15,
    hawaiana: 18,
    vegetariana: 20
  };

  // Precios de los tamaños
  let preciosTamano = {
    pequeña: 10,
    mediana: 15,
    grande: 20
  };

  // Calculamos el precio de la pizza
  let precioPizza = preciosSabores[sabor] + preciosTamano[tamano];

  // Mostramos el total
  document.querySelector("#total").innerHTML = "El total es de $" + precioPizza;
}

// Ejecutamos la función al enviar el formulario
document.querySelector("form").addEventListener("submit", calcularTotal);