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
        let regex = /^([0-9]{2})([-/])([0-9]{2})\2([0-9]{4})$/;

        if (!regex.test(fecha)) {
            return "Introduzca un formato válido (Formato: dd/mm/aaaa o dd-mm-aaaa)";
        }

        let [,dia,,mes,agno] = regex.exec(fecha);
        dia = Number(dia); //Es necesario pasarlo a número para comprobarlo con la fecha creada en Date
        mes = Number(mes); 
        agno = Number(agno);
        let date = new Date(`${agno}/${mes}/${dia}`);

        if(date.getFullYear() === agno && date.getMonth() === mes-1 && date.getDate() === dia){
            return "";
        }
        else{
            return "La fecha introducida no existe.";
        }
        
    },
    validarDni: function (dni) {
        const regex = /^([0-9]{8})[- ]?([A-Za-z]{1})$/;
        let letrasDni = "TRWAGMYFPDXBNJZSQVHLCKET";

        if (!regex.test(dni))
            return `Formato dni incorrecto`;

        let [fullDni, numeroDni, letraDNI] = regex.exec(dni);

        if (letraDNI.toUpperCase() !== letrasDni[numeroDni % 23].toUpperCase())
            return `El dni ${fullDni} no tiene la letra correcta.`;

        return ``;
    }
}


