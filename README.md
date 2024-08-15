# Floristería Dulces Pétalos
## Índice

- [Enunciado de la prueba](#enunciado)
- [Instalación](#instalación)

## Enunciado

Queremos crear una aplicación que muestre el catálogo de la floristería Dulces Pétalos.

- La aplicación tendrá dos vistas:
  1. Home: listado de productos
  2. Detalle de un producto
- El diseño es libre, aunque la estructura deberá ceñirse a los mockups que se presentan más adelante en este documento.
- Se utilizará React, con la posibilidad de instalar las librerías que se vean necesarias
- Se puede utilizar Javascript con ES6 o, si se quiere, Typescript.
- Se puede utilizar un boilerplate template para inicializar el proyecto.
- Se implementará una SPA, donde el enrutado se hará en el código de cliente. No queremos utilizar Server Side Rendering ni generar un site estático.
- El proyecto tendrá los siguientes scripts para la gestión de la aplicación:
  - `start` - Inicia el entorno de desarrollo
  - `build` - Compila para producción
  - `test`  - Lanza los tests
- El proyecto se presentará en un repositorio abierto en Github, Gitlab o Bitbucket. Se mirará la evolución del desarrollo a través del histórico de Git.

### Notas para el ejercicio

- Este ejercicio no es un examen. Lo que más nos interesa es el camino, la conversación que surgirá después de hacer el ejercicio. No importa que no llegues a completarlo, siempre podemos completarlo en pairing :)
- Te recomendamos que anotes aquellos obstáculos que te has encontrado y cómo los has resuelto, para comentarlos.
- No deberías dedicarle más de 5 horas al ejercicio. No te preocupes si pasado ese tiempo no está del todo completado.

## Mockups de las vistas

### Listado de productos

- En esta página se visualizarán todos los productos que devuelve la petición al API.
- Permitirá hacer un filtrado de los productos, en función del criterio de búsqueda introducido por el usuario.
- Al seleccionar un producto, permitirá navegar al detalle de este.
- Se mostrará un máximo de cuatro elementos por fila. Se adaptará a la resolución del dispositivo.

### Detalle de producto

- En esta página se visualizarán los detalles de un producto:
  - Imagen del producto
  - Descripción del producto
- Permitirá volver atrás en la navegación.

## Catálogo de componentes

### HEADER: Cabecera

- Mostrará el nombre de la empresa y/o un icono, que será un enlace a la home.
- Mostrará breadcrumbs, con links para la navegación.

### SEARCH: Búsqueda

- Permitirá la introducción de una cadena de texto.
- Se filtrarán los productos del listado en función de la cadena de texto, comparando nombre y nombre científico de la planta.
- El filtrado se hará en tiempo real, a medida que el usuario introduzca la cadena de texto.

### ITEM: Elemento del listado

- Dará la siguiente información de cada producto:
  - Imagen
  - Nombre
  - Nombre científico
  - Precio

### IMAGE: Imagen del producto

- Mostrará la imagen del producto.

### DESCRIPTION: Descripción del producto

- Mostrará detalles del producto:
  - Nombre
  - Nombre científico
  - Precio
  - Riegos por semana
  - Fertilizante recomendado: Podrá ser “fosforado” o “nitrogenado”
  - Altura

## Definición de API

Las llamadas están en la url: [https://dulces-petalos.herokuapp.com/](https://dulces-petalos.herokuapp.com/)

### Listado de productos

- **PATH**
  - `GET /api/product`
  - **Response:**
    ```json
    [
        {
        "id": Identificador,
        "name": Nombre común,
        "binomialName": Nombre científico,
        "price": Precio en euros,
        "imgUrl": Url de la imagen,
        "wateringsPerWeek": Riegos por semana,
        "fertilizerType": Tipo de fertilizante. Puede tener dos
        valores: “nitrogen” (nitrogenado) o “phosphorus” (fosforado),
        "heightInCm": Altura en centimetros
        },
        ...
    ]
    ```

### Detalle de un producto

- **PATH**
  - `GET /api/product/:id`
  - **Response:**
    ```json
    {
      "id": Identificador,
      "name": Nombre común,
      "binomialName": Nombre científico,
      "price": Precio en euros,
      "imgUrl": Url de la imagen,
      "wateringsPerWeek": Riegos por semana,
      "fertilizerType": Tipo de fertilizante. Puede tener dos valores: “nitrogen” (nitrogenado) o “phosphorus” (fosforado),
      "heightInCm": Altura en centímetros
    }
    ```

## Instalación
Instalar todas las dependencias

```bash
  npm install
```

Iniciar el entorno de desarrollo

```bash
  npm run start
```

Compilar a producción

```bash
  npm run build
```

Lanzar los test

```bash
  npm run test
```