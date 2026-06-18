export function calcularSubtotal(precios: number[]): number {
  let suma = 0;
  for (let precio of precios) {
    suma = suma + precio;
  }
  return suma;
}

export function calcularIVA(subtotal: number, tasa: number): number {
  return subtotal * tasa;
}

export function calcularTotal(subtotal: number, iva: number): number {
  return subtotal + iva;
}