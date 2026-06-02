let alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];

mostrarAlumnos();

function guardarAlumno(){

    let nombre = document.getElementById("nombre").value;
    let grado = document.getElementById("grado").value;

    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);
    let nota4 = Number(document.getElementById("nota4").value);

    if(nombre === "" || grado === ""){
        alert("Complete todos los campos");
        return;
    }

    let promedio =
    (nota1 + nota2 + nota3 + nota4) / 4;

    alumnos.push({
        nombre,
        grado,
        promedio
    });

    localStorage.setItem(
        "alumnos",
        JSON.stringify(alumnos)
    );

    limpiarFormulario();
    mostrarAlumnos();
}

function mostrarAlumnos(){

    let tabla =
    document.getElementById("tablaAlumnos");

    tabla.innerHTML = "";

    alumnos.forEach((alumno, index)=>{

        tabla.innerHTML += `
        <tr>
            <td>${alumno.nombre}</td>
            <td>${alumno.grado}</td>
            <td>${alumno.promedio.toFixed(2)}</td>
            <td>
                <button
                class="eliminar"
                onclick="eliminarAlumno(${index})">
                Eliminar
                </button>
            </td>
        </tr>
        `;
    });
}

function eliminarAlumno(index){

    alumnos.splice(index,1);

    localStorage.setItem(
        "alumnos",
        JSON.stringify(alumnos)
    );

    mostrarAlumnos();
}

function limpiarFormulario(){

    document.getElementById("nombre").value = "";
    document.getElementById("grado").value = "";

    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("nota4").value = "";
}
