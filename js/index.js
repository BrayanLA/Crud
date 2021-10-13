class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}
class carexhimba{
    
}
let arrayPersonas = [];
const add = () => {
    let inputNombre = document.querySelector('#nombre').value;
    let inputEdad = document.querySelector('#edad').value;

    if (parseInt(indexEvent) >= 0){
        UpDateAlert(inputNombre,inputEdad,indexEvent);

    }else {
        let newPersona =new  Persona(inputNombre,inputEdad);
        arrayPersonas.push(newPersona);
    }

    Showstudents();
    GuardarBD();
    clearInputs();
    indexEvent = -1



};
const clearInputs = () =>{
    this.nombre.value = '';
    this.edad.value = '';
};
const GuardarBD = () => {
    localStorage.setItem('PersonasLocalDB', JSON.stringify(arrayPersonas))
};
const Showstudents = () => {
    let RenderUi = document.querySelector('#viewPersonas');
    RenderUi.innerHTML = '';
    arrayPersonas.forEach((element, index)=>{
        RenderUi.innerHTML +=  `<div class="alert alert-success" role="alert" data-index="${index}"><b>${element.nombre}</b> - ${element.edad}<span class="float-right"><i class="material-icons">edit</i><i class="material-icons">delete</i></span></div>`
    })
};
const PrintDB = () =>{
    arrayPersonas = JSON.parse(localStorage.getItem('PersonasLocalDB'));
    if (arrayPersonas === null){
        arrayPersonas = []
    } else {
        Showstudents()
    }
};
document.addEventListener('DOMContentLoaded', PrintDB);
let indexEvent;
document.addEventListener('click', (e)=>{
    e.preventDefault();
    if (e.target.innerHTML === 'edit' || e.target.innerHTML === 'delete') {
        indexEvent = e.path[2].getAttribute("data-index");
        if (e.target.innerHTML === 'edit') {
            EditAlert(indexEvent)
        }

        if (e.target.innerHTML === 'delete') {
            DeleteAlert(indexEvent)
        }
    }
});

const EditAlert = () => {
    this.nombre.value = arrayPersonas[indexEvent].nombre;
    this.edad.value = arrayPersonas[indexEvent].edad;

};

const UpDateAlert = (nombre,edad) => {

    arrayPersonas[parseInt(indexEvent)]['nombre'] = nombre;
    arrayPersonas[parseInt(indexEvent)]['edad'] = edad;

    Showstudents();
    GuardarBD();
    clearInputs();
};

const DeleteAlert = () =>{
    arrayPersonas.splice([parseInt(indexEvent)],1);
    Showstudents();
    GuardarBD();
    clearInputs();
    indexEvent = -1
};

