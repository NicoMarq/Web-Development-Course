

//DOM
/*
let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link);
});



let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener("click",function(){
        console.log(this);
    })
});

*/
//PASOS
//Obtener los elementos de la clase .close

let links = document.querySelectorAll(".close");


//Recorrerlos

links.forEach(function(link){

   //Agregar un evento click a cada uno de ellos
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content')

        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");
        
        content.classList.add("animate__fadeOutDown");
        content.classList.add("animate__animated");
       
        setTimeout(function(){
            location.href = "/"
        },600);
     

        return false;
      
    });
});
