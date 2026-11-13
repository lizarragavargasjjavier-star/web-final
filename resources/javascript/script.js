console.log("ok");

let nombres = [];
let edades = [];
let fechas=[];
let horas=[];


function agendar()
{
    let nom=document.getElementById("nombre").value;
    let ed=Number(document.getElementById("edad").value);
    let fecha=document.getElementById("fecha").value;
    let hora=document.getElementById("hora").value;

    nombres.push(nom);
    edades.push(ed);
    fechas.push(fecha);
    horas.push(hora);

    console.log(nombres);
    console.log(edades);
    console.log(fechas);
    console.log(horas);


    mostrar();
    alert("Se ha agendado correctamente");
}

function mostrar()
{
    limpiar();

    let tabla=document.getElementById("tablax");

    for (let i=0 ; i<nombres.length ; i++)
    {
        let tr=document.createElement("tr");
        let colNum=document.createElement("td");
        let colNom=document.createElement("td");
        let colEdad=document.createElement("td");
        let colFecha=document.createElement("td");
        let colHora=document.createElement("td");

        let numero=document.createTextNode(i+1);
        let nombre=document.createTextNode(nombres[i]);
        let edad=document.createTextNode(edades[i]);
        let fecha=document.createTextNode(fechas[i]);
        let hora=document.createTextNode(horas[i]);
        

        colNum.appendChild(numero);
        colNom.appendChild(nombre);
        colEdad.appendChild(edad);
        colFecha.appendChild(fecha);
        colHora.appendChild(hora);

        tr.appendChild(colNum);
        tr.appendChild(colNom);
        tr.appendChild(colEdad);
        tr.appendChild(colFecha);
        tr.appendChild(colHora);

        tabla.appendChild(tr);

    }
}


function limpiar()
{
    let tabla=document.getElementById("tablax");

    while(tabla.firstChild)
    {
        tabla.removeChild(tabla.firstChild);
    }
}




function factorRiesgo()
{
    let ul=document.getElementById("in1");
    
    
    let l1=document.createElement("li");
    let l2=document.createElement("li");
    let l3=document.createElement("li");

    let t1=document.createTextNode("Presión académica: Sobrecarga de materias, temor al fracaso, exigencia extrema y la incertidumbre sobre el futuro laboral.");
    let t2=document.createTextNode("Hábitos de vida desbalanceados: Privación de sueño, mala alimentación y falta de actividad física.");
    let t3=document.createTextNode("Transiciones y rupturas: Cambios de nivel educativo (ingreso a la universidad), problemas en las relaciones interpersonales o duelos emocionales.");

    l1.appendChild(t1);
    l2.appendChild(t2);
    l3.appendChild(t3);

    ul.appendChild(l1);
    ul.appendChild(l2);
    ul.appendChild(l3);

}

//---------------codigo test-----------//


   function evaluacionTest()
{
    let contador = 0;
    let respuestas = 0;

    for(let i = 1; i <= 5; i++)
    {
        let pregunta = document.getElementsByName("pregunta" + i);

    
        for(let j = 0; j < pregunta.length; j++)
        {
            if(pregunta[j].checked == true)
            {
                respuestas++;

                if(pregunta[j].value == "si")
                {
                    contador++;
                }
            }
        }
    }

    let resultado = document.getElementById("resultado");

   
    resultado.innerHTML = "";
    
    if(respuestas < 5)
    {
        let mensaje = document.createElement("h3");

        mensaje.textContent = "Debes responder todas las preguntas.";

        resultado.appendChild(mensaje);
    }
    else
    {
        if(contador >= 4)
        {
            let titulo = document.createElement("h2");
            titulo.textContent = "Recomendación";

            let parrafo = document.createElement("p");
            parrafo.textContent = "Te recomendamos agendar una cita con un profesional de salud mental para recibir orientación y apoyo.";

            let boton = document.createElement("button");
            boton.textContent = "Agendar una cita";

            boton.onclick = function()
            {
                location.href = "4.html";
            };

            resultado.appendChild(titulo);
            resultado.appendChild(parrafo);
            resultado.appendChild(boton);
        }
        else if(contador >= 2)
        {
            let titulo = document.createElement("h2");
            titulo.textContent = "Recomendaciones para aliviar el estrés";

            let parrafo = document.createElement("p");
            parrafo.textContent = "Te recomendamos poner en práctica los siguientes consejos:";

            let lista = document.createElement("ul");

            let consejo1 = document.createElement("li");
            consejo1.textContent = "Realizar actividad física.";

            let consejo2 = document.createElement("li");
            consejo2.textContent = "Organizar tus horarios de estudio.";

            let consejo3 = document.createElement("li");
            consejo3.textContent = "Dormir entre 7 y 9 horas.";

            let consejo4 = document.createElement("li");
            consejo4.textContent = "Practicar ejercicios de respiración.";

            let consejo5 = document.createElement("li");
            consejo5.textContent = "Compartir tus preocupaciones con amigos o familiares.";

            let consejo6 = document.createElement("li");
            consejo6.textContent = "Dedicar tiempo a tus pasatiempos favoritos.";

            
            lista.appendChild(consejo1);
            lista.appendChild(consejo2);
            lista.appendChild(consejo3);
            lista.appendChild(consejo4);
            lista.appendChild(consejo5);
            lista.appendChild(consejo6);

            
            resultado.appendChild(titulo);
            resultado.appendChild(parrafo);
            resultado.appendChild(lista);
        }
        else
        {
            let titulo = document.createElement("h2");
            titulo.textContent = "¡Excelente!";

            let parrafo = document.createElement("p");
            parrafo.textContent = "Continúa manteniendo hábitos saludables, cuidando tu bienestar emocional y disfrutando de tus actividades diarias.";

            resultado.appendChild(titulo);
            resultado.appendChild(parrafo);
        }
    }
}
