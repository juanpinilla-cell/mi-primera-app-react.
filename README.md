Mi Primera Aplicación en React 
Descripción
Esta aplicación es una herramienta sencilla y funcional para la gestión de tareas diarias, desarrollada como parte de la evaluación de la Semana 4 de la asignatura Programación Front End. El objetivo principal es permitir al usuario agregar nuevas tareas mediante un campo de entrada, visualizarlas en una lista dinámica y eliminarlas una vez completadas.
Tecnologías Utilizadas 
React: Librería principal para la creación de componentes y manejo de la interfaz de usuario.
Vite: Herramienta de construcción utilizada para inicializar y servir el proyecto de forma eficiente.
JavaScript (ES6+): Lenguaje base para la lógica de la aplicación y manipulación del estado.
HTML5 & CSS3: Para la estructura semántica y el diseño visual personalizado.
Documentación del Proyecto 
Flujo de la Aplicación
Carga Inicial: Al abrir la aplicación, se presenta un encabezado y un formulario vacío.
Agregar Tareas: El usuario escribe en el campo de texto y, al presionar "Agregar", la aplicación valida que no esté vacío, crea un nuevo objeto de tarea con un ID único y lo añade al estado principal.
Visualización: La lista se actualiza automáticamente mostrando todas las tareas almacenadas en el estado.
Eliminación: Cada tarea cuenta con un botón "Eliminar" que, al ser presionado, filtra el arreglo de tareas para remover el elemento seleccionado y actualiza la vista.
Componentes Principales
App.jsx: Es el componente principal (o contenedor) que gestiona el estado global de la lista utilizando el hook useState y define las funciones de lógica para manipular los datos.
TaskItem.jsx: Es un componente funcional encargado de renderizar la información de cada tarea individual y gestionar el evento de eliminación a través de props.
Decisiones de Diseño
Gestión de Estado: Se optó por un estado local centralizado en App.jsx para garantizar una sincronización fluida entre el input y la lista.
Interfaz: Se aplicaron estilos CSS enfocados en la legibilidad, utilizando una jerarquía clara con encabezados y una paleta de colores coherente (verde para acciones positivas y rojo para eliminación).
Instalación y Ejecución
Para ejecutar este proyecto en tu entorno local (Windows o Linux), 
sigue estos pasos:
Clonar el repositorio:
git clone https://docs.github.com/es/repositories/creating-and-managing-repositories/quickstart-for-repositories
Entrar a la carpeta:
cd mi-primera-app-react
Instalar las dependencias:
npm install
Iniciar el servidor de desarrollo:
npm run dev
Abrir en el navegador: 
Hacer clic en el enlace que aparecerá en la terminal (usualmente http://localhost:5173).
