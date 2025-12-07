# Automation Fravega
## 📌 Descripción

En este proyecto realicé pruebas automatizadas **end-to-end** sobre la plataforma de [Fravega](https://www.fravega.com/), con el objetivo de practicar y validar flujos reales de usuario en un e-commerce.

Entre los flujos automatizados se encuentran:

✔ Autenticación (login / logout)  
✔ Búsqueda por nombre y **SKU**  
✔ Aplicación de filtros  
✔ Gestión completa del carrito (agregar, quitar, checkout)  
✔ Comparación de productos  
✔ Cambio de ubicación (código postal, retiro en sucursal)  
✔ Manejo de elementos dinámicos (overlays, modales, loaders)  
✔ Validaciones de UI y contenido  

También implementé [![Allure](https://img.shields.io/badge/Allure-Report-purple)]() para generar reportes automáticos luego de cada ejecución.


## Pre requisitos
- [Node.js] (v22.2)
  
## Instalacion
```bash
git clone https://github.com/NicoPavon11/automation-fravega.git
cd automation-fravega
npm install
```
## 📁 Estructura del proyecto
- `cypress/e2e/` - Contiene los archivos de prueba organizados por funcionalidad
- `cypress/fixtures/` - Contiene los datos del usuario
- `cypress/support/commands` - Comandos customizados para reutilizar logica en los test.
- `cypress/support/selectors` - Selectores centralizados para mantener el codigo limple y facilitar mantenimiento.
- `package.json` - Scripts y dependecias del proyecto.



## Scripts disponibles
##### Todos los test generan reporte automaticamente, se abre al finalizar
- `npm run cy:run:all` - Corre todos los test.
- `npm run cy:run:auth` - Test de login y logout.
- `npm run cy:run:cart` - Test completo de carrito(agregar,quitar,checkout).
- `npm run cy:run:compare` - Test completo de comparar productos(Agregar,quitar,comparar).
- `npm run cy:run:location` - Test completo de ubicacion(cambiar CP,retiros por sucursal).
- `npm run cy:run:search` - Test completo de busqueda(busqueda por nombre,SKU,filtros)



