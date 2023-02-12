# FullStack JS - Proyecto MERN - MongoDB, Express, React y Node con TailwindCSS.
Deployment del Proyecto MERN APV - Administracion de Pacientes de Veterinaria - Frontend

[Link del Proyecto](https://pj27fullstackjsmernfrontend.netlify.app)

  - `Inicio del proyecto usando vite: npm init vite@latest`
  - `Crear la carpeta principal del proyecto: FullStackJS y Crear la carpeta del frontend: frontend`
  - `Instalación de las dependencias: cd frontend : npm install`
  - `Instalar Tailwind.CSS en un proyecto de React: npm i --save-dev tailwindcss postcss autoprefixer`
  - `Crear los archivos de configuracion (postcss.config.cjs y tailwind.config.cjs) common JS: npx tailwindcss init -p`
  - `Configuramos el lugar donde usara Tailwind en (tailwind.config.cjs): content: [ "./index.html", "./src/**/*.jsx" ]`
  - `Añadimos las directivas de Tailwind en el CSS global (index.css): @tailwind base/components/utilities;`
  - `Instalación de React Router Dom (Librería para el Routing): npm i react-router-dom`
  - `Instalación de Axios (Librería para trabajar con las peticiones HTTP con Asyn Await): npm i axios`
  - `Ejecución del Servidor para desarrollo: npm run dev`
  - `Para hacer el Deployment del proyecto: npm run build`  
  -	`Subir el proyecto a Netlify, conectar con Github y configurar la variable de entorno`
    -	`VITE_BACKEND_URL`
