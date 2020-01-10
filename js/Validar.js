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

let Validar = {
    validarNombre: function (nombre) {
        if (/^[A-Z][A-Za-zñÑáéíóúÁÉÍÓÚ]+[ ][A-Za-zñÑáéíóúÁÉÍÓÚ]+[ ]?[A-Za-zñÑáéíóúÁÉÍÓÚ]+$/.test(nombre)) {
            return "";
        } else {
            return "Introduzca un formato válido (Formato: primera letra del nombre mayúscula y apellido)";
        }
    },
    validarFecha: function (fecha) {
        if (/^([0-2][0-9]|3[0-1])[/-](0[0-9]|1[0-2])[/-]\d{4}$/.test(fecha)) {
            return "";
        } else {
            return "Introduzca una fecha válida (Fórmato: dd/mm/aaaa o dd-mm-aaaa)";
        }
    },
    validarDni: function (dni) {
        const regex = /^([0-9]{8})[- ]?([A-Za-z]{1})$/;
        let letrasDni = "TRWAGMYFPDXBNJZSQVHLCKET";
        let executable = regex.exec(dni);
        if (regex.test(dni)) {
            let numero = executable[1];
            let letra = (executable[2]).toUpperCase();
            if (letra == letrasDni[numero % 23]) {
                return "";
            } else {
                return "La letra del dni no coincide con el nif";
            }
        } else {
            return "Introduzca dni correcto (Formato: 00000000A, 00000000-A o 00000000 A)";
        }
    }
}


