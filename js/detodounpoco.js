/**
 * @author MANUEL ARIZA SERRANO
 * 
 * Contendrá dos botones: Informa y Salir.
 * Al hacer clic en Informa:
 * • Añadirá un párrafo con el día actual (lunes, martes... miércoles) partiendo de Date().
 * • En función de la hora actual se creará un segundo párrafo que contendrá la hora y los
 * minutos, además de un mensaje informativo:
 * ◦ Si hora > 18:00: 
 * ▪ Son las hh:mm. Ya es hora de que dejes de trabajar. Hay que conciliar la vida
 * laboral con la familiar
 * ◦ Si hora < 8:00:
 * ▪ Son las hh:mm. Ya es hora de que comiences a trabajar. Hay que levantar el
 * país.
 * ◦ Si hora entre 8:00 y 18:00:
 * ▪ Son las hh:mm. Pronto llegan las vacaciones. Aguanta
 * Al hacer clic en Salir:
 * • Se cerrará la ventana.
 */

{

    let parrafoInfoDia;
    let parrafoInfoHora;

    let init = () => {
        parrafoInfoDia = document.getElementById("info");
        parrafoInfoHora = document.getElementById("infoHora");
        document.getElementById("informa").addEventListener("click", informa);
        document.getElementById("salir").addEventListener("click", () => { window.close(); });
    }

    let informa = () => {
        a = new Date();
        switch (a.getDay()) {
            case 1:
                parrafoInfoDia.innerHTML = "Lunes";
                break;
            case 2:
                parrafoInfoDia.innerHTML = "Martes";
                break;
            case 3:
                parrafoInfoDia.innerHTML = "Miércoles";
                break;
            case 4:
                parrafoInfoDia.innerHTML = "Jueves";
                break;
            case 5:
                parrafoInfoDia.innerHTML = "Viernes";
                break;
            case 6:
                parrafoInfoDia.innerHTML = "Sábado";
                break;
            case 7:
                parrafoInfoDia.innerHTML = "Domingo";
                break;
            default:
                break;
        }

        if (a.getHours()>18) {
            parrafoInfoHora.innerHTML = `Son las ${a.getHours()}:${a.getMinutes()}. Ya es hora de que dejes de trabajar. Hay que conciliar la vida 
            laboral con la familiar`;
        } else if(a.getHours()<8) {
            parrafoInfoHora.innerHTML = `Son las ${a.getHours()}:${a.getMinutes()}. Ya es hora de que comiences a trabajar. Hay que levantar el 
            país.`;
        }else{
            parrafoInfoHora.innerHTML = `Son las ${a.getHours()}:${a.getMinutes()}. Pronto llegan las vacaciones. Aguanta.`;
        }
       
    }

    document.addEventListener("DOMContentLoaded", init);
}