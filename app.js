// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Agrega amigos al listado
function agregarAmigo(){
    //Capturar el valor del campo de entrada
    const amigoNombre = document.getElementById("amigo");
    //Validar la entrada
    if (amigoNombre.value == ''){    
        alert("Por favor, inserte un nombre.");
    }
    //Actualizar el array de amigos y Limpiar el campo de entrada: 
    amigos.push(amigoNombre.value);
         
    actualizarLista();

    document.getElementById("amigo").value = '';
    
}

//Implementa una función para actualizar la lista de amigos
function actualizarLista() {
    const amigosElement = document.getElementById("amigos");
    amigosElement.innerHTML = ""; 
    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        const listItem = document.createElement("li");
        listItem.textContent = amigo;
        amigosElement.appendChild(listItem);
    }
}
//Implementa una función para sortear los amigos
function sortearAmigo(){
    if (amigos.length < 2){
        
        alert ("Debes agregar más amigos.");
        return;
    }else{
        const indiceRandom = Math.floor(Math.random() * amigos.length);
        const resultadoSeleccion = amigos[indiceRandom];
        const listaResultado = document.getElementById("resultado");
        listaResultado.innerHTML = resultadoSeleccion;
    }
}