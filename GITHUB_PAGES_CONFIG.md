# Configuración de GitHub Pages para PLANES (Club San Jorge)

La app es **Blazor WebAssembly** (estática). El workflow `.github/workflows/deploy.yml` compila el proyecto **PLANES** y la publica en GitHub Pages.

---

## Pasos para activar GitHub Pages

1. En el repositorio **RossnagelRuben/PLANES** → **Settings** → **Pages**.
2. En **Build and deployment**:
   - **Source**: **GitHub Actions**.
3. Guardar.

---

## Después de cada push a `main`

1. Ir a la pestaña **Actions** y esperar a que el workflow **"Deploy to GitHub Pages"** termine en verde.
2. Abrir la página: **https://rossnagelruben.github.io/PLANES/**

---

## Si la página no carga

- Si ves "Loading" o "An unhandled error", abre en el navegador:
  - https://rossnagelruben.github.io/PLANES/_framework/blazor.boot.json
- Si ves **JSON** → el despliegue está bien; el fallo puede ser de la app o la consola del navegador.
- Si ves **404** → revisa que en Settings → Pages tengas **Source: GitHub Actions**.

---

## Archivo de deploy

El workflow está en:

- **`.github/workflows/deploy.yml`**

Hace lo siguiente:

1. Compila el proyecto `PLANES.csproj` en Release.
2. Ajusta el `base href` a `/PLANES/` para que los recursos carguen en GitHub Pages.
3. Copia el contenido de `publish/wwwroot` a la carpeta `site` y añade `.nojekyll`.
4. Sube el artifact y lo despliega con **deploy-pages**.

No hace falta crear otro archivo de deploy; con hacer push a `main` se ejecuta el workflow.
