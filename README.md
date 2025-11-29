Sigue estos pasos para tener el proyecto funcionando en tu máquina local.

### 📋 Requisitos Previos

Asegúrate de tener instalado:

* **Node.js** (versión recomendada: 18 o superior)
* **npm** (Node Package Manager)

### ⚙️ Instalación

1.  **Clona el repositorio** (si aún no lo has hecho):

    ```bash
    git clone [URL_DEL_REPOSITORIO]
    cd backend-Producto-Profe  
    ```

2.  **Instala las dependencias principales:**

    ```bash
    npm install
    ```

3.  **Instala las dependencias de desarrollo necesarias** (como `nodemon`, `ts-node` y `typescript`) para ejecutar el servidor en modo desarrollo:

    ```bash
    npm install nodemon --save-dev
    npm install ts-node typescript --save-dev
    ```

    * **Nota:** Si usas un gestor de paquetes diferente (como `yarn` o `pnpm`), ajusta los comandos de instalación.

---

## ▶️ Comandos de Ejecución

### Modo Desarrollo

Utiliza este comando para iniciar el servidor. **`nodemon`** vigilará los cambios en tus archivos TypeScript y reiniciará automáticamente el servidor.

```bash
npm run dev