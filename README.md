# Calculadora de IVA con TypeScript

Es un proyecto de consola interactiva realizado con TypeScript sobre Node.js. Permite calcular de forma dinámica el precio base de un producto, desglosar su **IVA (12%)** y mostrar el total acumulado a través de un menú interactivo.

## Características

- Menú interactivo principal para calcular o salir del sistema.
- Registro independiente de productos solicitando nombre y precio.
- Formateo inmediato de la moneda con dos decimales (`Q0.00`).
- Control de flujo para volver al menú principal o seguir registrando.

## Tecnologías Utilizadas

- **TypeScript** (Configuración bajo módulos modernos ESM)
- **Node.js**
- **pnpm** (Package manager)
- **readline-sync** (Biblioteca para leer datos desde consola)

## Estructura del Proyecto

El código está organizado en módulos con responsabilidades específicas para mantener una estructura clara, ordenada y fácil de mantener.

### `src/calculos.ts`

Este módulo contiene toda la lógica matemática de la aplicación. Aquí se realizan los cálculos relacionados con el subtotal, el IVA y el total final de la compra.

### `src/index.ts`

Es el archivo principal del proyecto. Se encarga de la interacción con el usuario mediante la consola, solicita los datos necesarios y utiliza las funciones del módulo de cálculos para mostrar los resultados.

## Funciones Implementadas

Las funciones del módulo de cálculos han sido documentadas utilizando el estándar **JSDoc**, facilitando la comprensión de su funcionamiento.

### `calcularSubtotal(precios: number[])`

- Recibe un arreglo de precios.
- Devuelve la suma total de los productos ingresados.

### `calcularIVA(subtotal: number, tasa: number)`

- Calcula el valor del impuesto a partir del subtotal.
- Utiliza la tasa de IVA establecida (12%).

### `calcularTotal(subtotal: number, iva: number)`

- Suma el subtotal y el IVA.
- Devuelve el monto final de la compra.

## Pruebas Realizadas

Se realizaron diversas simulaciones desde la consola para verificar el correcto funcionamiento del sistema.

**Ejemplo de prueba:**

- Producto: **Leche**
- Precio: **Q14.75**

**Resultados obtenidos:**

- Subtotal: **Q14.75**
- IVA (12%): **Q1.77**
- Total: **Q16.52**

Los resultados fueron mostrados con dos decimales mediante el método `.toFixed(2)`, garantizando precisión en los cálculos y una presentación adecuada de los montos monetarios.

## Conclusión

La aplicación cumple con los requisitos planteados para el cálculo automático del IVA en Guatemala, aplicando una estructura modular que facilita su mantenimiento y escalabilidad.

Además, la separación entre la lógica de negocio y la interfaz de usuario permite un código más organizado, reutilizable y fácil de comprender.