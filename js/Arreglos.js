//arreglos
var frutas = [
    "uva",
    "mango",
    "Fresa",
    "Piña",
    "Sandia"
]; 
console.log(frutas);
console.log(frutas [2]);
console.log(frutas.push("mango"))
console.log(frutas) //le agrega el utimo valor
console.log(frutas.unshift("platano")) //agrega un valor al inicio
console.log(frutas);
console.log(frutas.pop()); //elimina el ultimo
console.log(frutas);
console.log(frutas.shift());
console.log(frutas);

//Eventos
function onclick() {
    
}
//ahora existe tmbn
document.getElementById("AddEventListener").addEventListener("click", function(){
    console.log("Has realizado un click");
    
})




