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

    let validarDni = () =>{
        errorDni.innerHTML = Validar.validarDni(inputDni.value);
    }
    
    let validarNombre = () => {
        errorNombre.innerHTML = Validar.validarNombre(inputNombre.value);
    }
    
    let validarFecha = () =>{
        errorFecha.innerHTML = Validar.validarFecha(inputFecha.value);
    }
    
    let crearEmpleado = () => {
        if (/^[A-Za-zñÑáéíóúÁÉÍÓÚ]+[ ][A-Za-zñÑáéíóúÁÉÍÓÚ]+[ ]?[A-Za-zñÑáéíóúÁÉÍÓÚ]+$/.test(inputNombre.value) && /^([0-2][0-9]|3[0-1])[/-](0[0-9]|1[0-2])[/-]\d{4}$/.test(inputFecha.value)) {
            let empleado = new Empleado(inputNombre.value, inputFecha.value, inputDni.value);
            errorCrear.innerHTML = "";
        } else {
            errorCrear.innerHTML = "No se puede crear el empleado porque hay datos erróneos.";
        }
    }

}