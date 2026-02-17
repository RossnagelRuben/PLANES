# Configuración de GitHub Pages para Blazor WebAssembly

La app es **Blazor WebAssembly** (solo estático), que es lo correcto para GitHub Pages. El workflow genera el sitio y lo publica de dos formas; basta con usar **una** de ellas.

---

## Opción recomendada: main + carpeta /docs

El workflow sube el sitio construido a la carpeta **docs/** en la rama **main**. Así no dependes de elegir otra rama.

1. Repositorio → **Settings** → **Pages**.
2. **Source**: **Deploy from a branch**.
3. **Branch**: **main**.
4. **Folder**: **/docs** (importante: tiene que ser **docs**, no "root").
5. Guardar.

Cuando el workflow termine (después de un push a main), la carpeta `docs/` tendrá `index.html`, `_framework`, `.nojekyll`, etc., y la página cargará.

---

## Opción A: Desplegar desde la rama `gh-pages`

Cada push a `main` deja el sitio construido en la rama **gh-pages**. Así Pages sirve los archivos (incluida la carpeta `_framework`) sin depender de "GitHub Actions" como origen.

1. Repositorio **PLANES_DE_AHORRO** → **Settings** → **Pages**.
2. En **Build and deployment**:
   - **Source**: **Deploy from a branch**.
   - **Branch**: tiene que ser **gh-pages** (no `main`). Si eliges `main`, no hay `_framework` y la app no carga.
   - **Folder**: **/ (root)**.
3. Guardar.

La primera vez hay que hacer un push a `main` y esperar a que el workflow cree la rama `gh-pages`. Luego ya puedes elegirla en Settings.

---

## Opción B: Desplegar con GitHub Actions

1. **Settings** → **Pages**.
2. **Source**: **GitHub Actions**.
3. Guardar.

El workflow sube el artifact y `deploy-pages` lo publica.

---

## Después de cada push a `main`

1. Ir a **Actions** y esperar a que **"Deploy Blazor WASM"** termine en verde.
2. Abrir: https://rossnagelruben.github.io/PLANES_DE_AHORRO/

## Comprobar que funciona

- Si la app carga bien, verás la interfaz de Planes de Ahorro.
- Si ves "Loading" o "An unhandled error": abre  
  https://rossnagelruben.github.io/PLANES_DE_AHORRO/_framework/blazor.boot.json  
  - Si ves **JSON** → el despliegue está bien; el fallo puede ser otro (consola del navegador).
  - Si ves **404** → el origen de Pages no está sirviendo los archivos del deploy; revisa que hayas elegido **gh-pages** (Opción A) o **GitHub Actions** (Opción B).
