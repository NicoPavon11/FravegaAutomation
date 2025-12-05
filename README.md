# Automation Fravega

## Descripcion
En este proyecto realize unas pruebas automatizadas end 2 end en [Fravega](https://www.fravega.com/) desarolladas con [Cypress](https://www.cypress.io/) para practicar y validar flujos de usuario en un Ecommerce real.   Incluye ejemplos de auth,busquedas con filtros, añadir productos al carrito, etc.   
    
Tambien implemente Allure report para tener un reporte automatico de las pruebas luego de ejecutar las mismas

### Pre requisitos
- [Node.js] (v22.2)

### Estructura del proyecto
- `cypress/e2e/` - Contiene los archivos de prueba organizados por funcionalidad
- `cypress/fixtures/` - Contiene los datos del usuario
- `cypress/support/commands` - Comandos customizados para reutilizar logica en los test.
- `cypress/support/selectors` - Selectores centralizados para mantener el codigo limple y facilitar mantenimiento.
- `package.json` - Scripts y dependecias del proyecto.

### Scripts disponibles
