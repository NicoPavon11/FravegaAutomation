// run_all.js
const { execSync } = require('child_process');

// Función auxiliar para ejecutar comandos, ignorando errores (solo si es necesario)
function runCommand(command, ignoreError = false) {
    console.log(`\n==========================================`);
    console.log(`🚀 Ejecutando: ${command}`);
    try {
        // 'inherit' asegura que la salida del comando se muestre en tu consola
        execSync(command, { stdio: 'inherit' });
        console.log(`✅ Éxito al ejecutar el comando.`);
    } catch (error) {
        if (ignoreError) {
            console.error(`⚠️ Comando falló, pero continuamos: ${command}`);
            // El error de Cypress es esperado si fallan tests, pero no debe detener el script.
        } else {
            console.error(`🚨 Error crítico: ${command}`);
            // Si la generación del reporte falla, queremos detenernos
            process.exit(1); 
        }
    }
    console.log(`==========================================`);
}

// 1. Ejecutar Cypress (puede fallar, pero queremos continuar)
// Usamos 'npm run' para asegurar que las variables de entorno se carguen
runCommand('npm run cy:run', true); 

// 2. Generar el reporte (DEBE ser exitoso, si falla, detenemos el script)
// Usamos la sintaxis probada que funciona individualmente (sin --clean)
runCommand('npm run allure:report', false); 

// 3. Abrir el reporte (DEBE ser exitoso, si falla, detenemos el script)
runCommand('npm run allure:open', false);

console.log('\n✨ Proceso de tests y reportes finalizado.');