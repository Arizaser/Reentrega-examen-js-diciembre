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
    let dia;

    let init = () => {
        dia = new Date();
        parrafoInfoDia = document.getElementById("info");
        parrafoInfoHora = document.getElementById("infoHora");
        document.getElementById("informa").addEventListener("click", informa);
        document.getElementById("salir").addEventListener("click", () => { window.close(); });
    }

    let informa = () => {
        let hora = dia.getHours();
        let minutos = dia.getMinutes();
        let msg;
        switch (dia.getDay()) {
            case 1:
                msg = "Lunes";
                break;
            case 2:
                msg = "Martes";
                break;
            case 3:
                msg = "Miércoles";
                break;
            case 4:
                msg = "Jueves";
                break;
            case 5:
                msg = "Viernes";
                break;
            case 6:
                msg = "Sábado";
                break;
            case 7:
                msg = "Domingo";
                break;
            default:
                break;
        }

        parrafoInfoDia.innerHTML = msg;

        
        if (dia.getMinutes() <10) {
            minutos = `0${minutos}`;
        }

        if(dia.getMinutes() <10){
            hora = `0${hora}`;
        }

        if (dia.getHours()>18) {
            parrafoInfoHora.innerHTML = `Son las ${hora}:${minutos}. Ya es hora de que dejes de trabajar. Hay que conciliar la vida 
            laboral con la familiar`;
        } else if(dia.getHours()<8) {
            parrafoInfoHora.innerHTML = `Son las ${hora}:${minutos}. Ya es hora de que comiences a trabajar. Hay que levantar el 
            país.`;
        }else{
            parrafoInfoHora.innerHTML = `Son las ${hora}:${minutos}. Pronto llegan las vacaciones. Aguanta.`;
        }
       
    }

    document.addEventListener("DOMContentLoaded", init);
}