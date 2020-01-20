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
        const rx = /^([0-2][0-9]|3[0-1])[/-](0[0-9]|1[0-2])[/-]\d{4}$/;

        if (!rx.test(fecha))
            return "Introduzca un formato válido (Formato: dd/mm/aaaa o dd-mm-aaaa)";
        
        let [, dia, , mes, anno] = re.exec(fecha);
        dia = Number(dia);
        mes = Number(mes);
        anno = Number(anno);
        let date = new Date(`${anno}/${mes}/${dia}`);

        if (date.getFullYear() !== anno && date.getMonth() !== mes - 1 && date.getDate() !== dia)
            return "La fecha introducida no es correcta.";
        return "";
    },
    validarDni: function (dni) {
        const regex = /^([0-9]{8})[- ]?([A-Za-z]{1})$/;
        let letrasDni = "TRWAGMYFPDXBNJZSQVHLCKET";

        if (!re.test(dni))
            return `Formato dni incorrecto`;

        let [fullDni, numeroDni, letraDNI] = re.exec(dni);

        if (letraDNI.toUpperCase() !== letrasDni[numeroDni % 23].toUpperCase())
            return `El dni ${dniCompleto} no es correcto`;

        return ``;
    }
}


