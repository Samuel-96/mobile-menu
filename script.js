const desplegable = document.querySelector("#desplegable");
const cerrar = document.querySelector("#cerrar");
cerrar.style.cursor = "pointer";

if ("ontouchstart" in document.documentElement)
    {
        //console.log("your device is a touch screen device.");
        desplegable.addEventListener("touchstart", menu);
        cerrar.addEventListener("touchstart", menu);
    }

desplegable.addEventListener("click", menu);
cerrar.addEventListener("click", menu);

function menu(){
  const menu = document.querySelector(".menu-content");
  console.log(menu.style.maxHeight);
  if(menu.style.maxHeight === "0px" || menu.style.maxHeight === ""){
    cerrar.style.width = "40px";
    cerrar.style.height = "40px";
    menu.style.maxHeight = "10000px";
    menu.style.transition = "max-height 0.5s ease-in";
  }
  else{
    cerrar.style.width = "0";
    cerrar.style.height = "0";
    menu.style.maxHeight = "0";
    menu.style.transition = "max-height 0.2s ease-out";
  }
}
    

