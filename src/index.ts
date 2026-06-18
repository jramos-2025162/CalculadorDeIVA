import readlineSync from "readline-sync";

const TASA_IVA = 0.12;

function calcularIVA(subtotal: number, tasa: number): number {
  return subtotal * tasa;
}

function calcularTotal(subtotal: number, iva: number): number {
  return subtotal + iva;
}

function registrarProducto(): void {
  console.log("\n Registro de Producto");

  const nombre = readlineSync.question("Nombre del producto: ");
  const precioInput = readlineSync.question("Precio del producto: Q");
  const precio = Number(precioInput);

  if (isNaN(precio) || precio <= 0) {
    console.log("Ingrese un numero mayor a 0\n");
    return;
  }

  const iva = calcularIVA(precio, TASA_IVA);
  const total = calcularTotal(precio, iva);

  console.log("\nResumen del Producto");
  console.log(`Producto      : ${nombre}`);
  console.log(`Precio Base   : Q${precio.toFixed(2)}`);
  console.log(`IVA (12%)     : Q${iva.toFixed(2)}`);
  console.log(`Total con IVA : Q${total.toFixed(2)}`);
}

function flujoCompra(): void {
  let continuar = true;

  while (continuar) {
    registrarProducto();

    console.log("Quieres registrar otro producto mas?");
    console.log("1. Si");
    console.log("2. No, salir al menú principal");

    const opcion = readlineSync.question("Seleccione una opción (1 o 2): ");

    if (opcion !== "1") {
      continuar = false;
    }
  }
}

let ejecutarMenu = true;

while (ejecutarMenu) {
  console.log("\nAplicación de Ventas");
  console.log("1. Calcular IVA");
  console.log("2. Salir del programa");

  const opcion = readlineSync.question("Seleccione una opcion (1 o 2): ");

  if (opcion === "1") {
    flujoCompra();
  } else if (opcion === "2") {
    ejecutarMenu = false;
  } else {
    console.log("\nOpción no valida\n");
  }
}

console.log("\nGracias por haber usado la aplicación");