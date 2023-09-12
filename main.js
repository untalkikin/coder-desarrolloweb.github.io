let sabor = document.querySelector("#sabor").value;
let tamano = document.querySelector("#tamano").value;

// Función para calcular el total
function calcularTotal() {
  // Precios de los sabores
  let preciosSabores = {
    pepperoni: 5,
    hawaiana: 5,
    vegetariana: 5,
    margheritha: 5,
    torino: 5,
    superpeperoni: 5,
    espinaca: 5
  };

  // Precios de los tamaños
  let preciosTamano = {
    personal: 45,
    mediana: 65,
    grande: 95
  };

  // Calculamos el precio de la pizza
  let precioPizza = preciosSabores[sabor] + preciosTamano[tamano];

  // Mostramos el total
  document.querySelector("#total").innerHTML = "El total es de $" + precioPizza;
}

// Ejecutamos la función al enviar el formulario
document.querySelector("form").addEventListener("submit", calcularTotal);