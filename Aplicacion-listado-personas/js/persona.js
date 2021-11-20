const personas = [
    new Persona("Santiago", "Tinjaca"),
    new Persona("Mark", "Zuckenberg"), 
    new Persona("Gabriel", "Maldonado"),
    new Persona("James", "Rodriguez")
];
function mostrarPersonas(){
    let texto = "";
    for(let persona of personas){
        texto += `<li> ${persona.nombre} ${persona.apellido}</li>`
    }
    document.getElementById("personas").innerHTML = texto;
}
function agregarPersona(){
    const forma = document.getElementById("forma"); 
    const nombre = forma["nombre"]
    const apellido = forma["apellido"]
    if( nombre.value != "" && apellido.value != ""){
        const persona = new Persona(nombre.value, apellido.value)
        console.log(persona)
        personas.push(persona);
        mostrarPersonas();
    }else{
        console.log("No introduciste nada")
    }
}