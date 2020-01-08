/**
 * @author MANUEL ARIZA SERRANO
 * 
 * El examen parte de un index.html con un h2 "Examen diciembre 2019".
 * Contendrán también un enlace “De todo un poco” y un botón “empleado”, cada uno asociados
 * a su manejador de eventos ANÓNIMO.
 * • Al pulsar el enlace se creará una ventada nueva de forma dinámica (mediante
 * document.write())
 * • Al pulsar el botón aparecerá la nueva ventana con un formulario Empleado
 */

{
    let enlaceDeTodoUnPoco;
    let botonEmpleado;

let init = () => {
    enlaceDeTodoUnPoco = document.getElementById("enlace");
    botonEmpleado = document.getElementById("botonEmpleado");

    enlaceDeTodoUnPoco.addEventListener("click", () => {
        let ventana = window.open();
        ventana.document.write(`<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Manuel Ariza Serrano</title>
            <script src="js/detodounpoco.js"></script>
        </head>
        
        <body>
            <header>
                <noscript>Tu navegador no tiene habilitados los scripts. Si puedes, habilítalos</noscript>
                <h1>Manuel Ariza Serrano</h1>
                <h2>Examen diciembre 2019</h2>
            </header>
            <button id="informa">Informa</button><br>
            <p>
            <span id="info"></span><br>
            <span id="infoHora"></span><br>
            </p>
            <button id="salir">Salir</button>
        </body>
        
        </html>`);
        ventana.document.close();
    })

    botonEmpleado.addEventListener("click", () => {
        window.open("empleado.html")
    })
}

document.addEventListener("DOMContentLoaded", init);


}