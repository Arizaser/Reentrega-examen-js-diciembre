/**
 * @author MANUEL ARIZA SERRANO
 * 
 * En el formulario, cada control tendrá su propio span de error, que se rellenará en rojo.
 * Al pulsarse el botón “nuevo Empleado” del formulario se validará todo el formulario y sólo en
 * ese caso se creará el nuevo Empleado.
 * Los controles del formulario son:
 * 1. Nombre del Empleado: Anacleto Ramírez, Rigoberta López Castañuela
 * 2. Fecha de nacimiento: 14/01/1993, 01-01-2001, pero NO 29/02/2015.
 * 3. DNI: 12345678Z, 12345678z, 12345678-Z ó 12345678 Z
 * 4. TODOS Se validarán al perder el foco
 * Atento en la validación: evita la duplicación de invocación en la medida de lo posible.
 * Para la validación se utilizará "Validar.js":
 * • Contendrá tanto las expresiones regulares como sus mensajes de error,
 * • Contendrá también otros métodos típicos de la validación (letra dni, fecha válida).
 * • Extrae la letra del dni y comprueba mediante expresiones regulares.
 * • No contendrá nada de la capa de presentación, ni duplicación de código.
 */

{
    let inputNombre;
    let errorNombre;
    let inputFecha
    let errorFecha;
    let inputDni;
    let errorDni;
    let errorCrear;

    let init = () => {
        errorNombre = document.getElementById("errorNombre");
        errorFecha = document.getElementById("errorFecha");
        errorDni = document.getElementById("errorDni");

        inputNombre = document.getElementById("nombre")
        inputNombre.addEventListener("blur", validarNombre);

        inputFecha = document.getElementById("fecha")
        inputFecha.addEventListener("blur", validarFecha);

        inputDni = document.getElementById("dni")
        inputDni.addEventListener("blur", validarDni);

        errorCrear = document.getElementById("errorCrear");

        document.getElementById("crearEmpleado").addEventListener("click", crearEmpleado);
    }

    let validarNombre = () => {
        if (/(^[A-Z]{1}[a-zñáéíóú])/.test(inputNombre.value)) {
            errorNombre.className = "correcto";
            errorNombre.innerHTML = "Es correcto";
        }else{
            errorNombre.className = "error";
            errorNombre.innerHTML = "Es incorrecto";
        }
    }

    let validarFecha = () => {
        if (/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/.test(inputFecha.value)) {
            errorFecha.className = "correcto";
            errorFecha.innerHTML = "Es correcto";
        }else{
            errorFecha.className = "error";
            errorFecha.innerHTML = "Es incorrecto";
        }
    }

    let validarDni = () => {
        const regex = /^([0-9]{8})[- ]?([A-Za-z]{1})$/;
        let letrasDni="TRWAGMYFPDXBNJZSQVHLCKET";
        if (regex.test(inputDni.value)) {
            let numero = regex.exec(inputDni.value)[1];
            let letra = (regex.exec(inputDni.value)[2]).toUpperCase();
            if (letra == letrasDni[numero%23]) {
                errorDni.className = "correcto";
                errorDni.innerHTML = "Es correcto";
            }else{
                errorDni.className = "error";
                errorDni.innerHTML = "Es incorrecto";
            }
            
        }else{
            errorDni.className = "error";
            errorDni.innerHTML = "Es incorrecto";
        }
    }

    let crearEmpleado = () => {
        if (/(^[A-Z]{1}[a-zñáéíóú])/.test(inputNombre.value) && /([0-9]{2})-([0-9]{2})-([0-9]{4})/.test(inputFecha.value)) {
            let empleado = new Empleado(inputNombre.value, inputFecha.value, inputDni.value);
            errorCrear.innerHTML = "";
        }else{
            errorCrear.className = "error";
            errorCrear.innerHTML = "No se puede crear el empleado porque hay datos erróneos.";
        }
    }

    document.addEventListener("DOMContentLoaded", init);
}