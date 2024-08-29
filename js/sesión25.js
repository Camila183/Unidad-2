

let carros = "";
let cars = ["Audi", "BMW", "Volvo", "Fiat"];

for(let c = 0; c < cars.length; c++) {
    carros += "<li>" + cars[c] + "</li>";
}

document.getElementById("cars-list").innerHTML = carros;


//galeria
let gallery =""
const imagenes=[
    "https://via.placeholder.com/150/0000FF/808080?text=Imagen+1", 
    "https://via.placeholder.com/150/FF0000/FFFFFF?text=Imagen+2",
    "https://via.placeholder.com/150/00FF00/000000?text=Imagen+3"
]

for (let g = 0; g< imagenes.length; g++) {
    gallery = gallery + "<img src ='" +   imagenes [g] +"'alt= 'imagen'" + (g+1)+ ">";
}

document.getElementById("galeria").innerHTML = gallery;