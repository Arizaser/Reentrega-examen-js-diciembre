/**
 * @author MANUEL ARIZA SERRANO
 * 
 * Se creará un objeto nuevo. Para ello, mediante prototype, crea una clase
 * Empleado con sus atributos y el método crearNuevaVentana. Mostrará los
 * atributos. Prohibido usar la palabra reservada class.
 * 2. Se borrará la información del empleado en los controles.
 */

{

    Empleado = function (nombre, fechaNac, dni) {
        this.nombre = nombre;
        this.fechaNac = fechaNac;
        this.dni = dni;
        this.crearNuevaVentana();
    }

    Empleado.prototype.crearNuevaVentana = function () {
        let ventana = window.open();
        ventana.document.write(`<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Manuel Ariza Serrano</title>
        </head>
        <body>
            <header>
                <noscript>Tu navegador no tiene habilitados los scripts. Si puedes, habilítalos</noscript>
                <h1>Manuel Ariza Serrano</h1>
                <h2>Examen diciembre 2019</h2>
            </header>
            <ul>
                <li>Nombre: ${this.nombre}</li>
                <li>Fecha de nacimiento: ${this.fechaNac}</li>
                <li>DNI: ${this.dni}</li>
            </ul>
        </body>
        
        </html>`);
        ventana.document.close();
    }

}