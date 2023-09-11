let sabor = document.querySelector("#sabor").value;
let tamano = document.querySelector("#tamano").value;

// Función para calcular el total
function calcularTotal() {
  // Precios de los sabores
  let preciosSabores = {
    pepperoni: 0,
    hawaiana: 0,
    vegetariana: 0,
    margheritha: 0,
    torino: 0,
    superpeperoni: 0,
    espinaca: 0
  };

  // Precios de los tamaños
  let preciosTamano = {
    personal: 50,
    mediana: 70,
    grande: 100
  };

  if (preciosSabores != preciosSabores) {
    // Mostramos un mensaje de error
    document.querySelector("#total").innerHTML = "Por favor, seleccione un sabor";
    return;
  }else{
    // Calculamos el precio de la pizza
    let precioPizza = preciosSabores[sabor] + preciosTamano[tamano];
  }

  // Mostramos el total
  document.querySelector("#total").innerHTML = "El total es de $" + precioPizza;
}

// Ejecutamos la función al enviar el formulario
document.querySelector("form").addEventListener("submit", calcularTotal);