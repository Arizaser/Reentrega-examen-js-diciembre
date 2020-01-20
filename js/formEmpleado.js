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

    document.addEventListener("DOMContentLoaded", init);

    let validarDni = () => {
        return errorDni.innerHTML = Validar.validarDni(inputDni.value);
    }

    let validarNombre = () => {
        return errorNombre.innerHTML = Validar.validarNombre(inputNombre.value);
    }

    let validarFecha = () => {
        return errorFecha.innerHTML = Validar.validarFecha(inputFecha.value);
    }

    let crearEmpleado = () => {
        let cadenaError = validarDni() + validarNombre() + validarFecha();
        if (cadenaError.length == 0) {
            let empleado = new Empleado(inputNombre.value, inputFecha.value, inputDni.value);
            errorCrear.innerHTML = "";
            for (const i of document.getElementsByTagName('input')) {
                i.value = "";
            }
        } else {
            errorCrear.innerHTML = "No se puede crear el empleado. Rellene los elementos del formulario correctamente.";
        }
    }

}