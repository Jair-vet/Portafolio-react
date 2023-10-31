let menuVisible = false;
//Función que oculta o muestra el menu
export const mostrarOcultarMenu = () => {
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

export function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
export const  efectoHabilidades = () => {
    var skills = document.getElementById("skills");
    if(!skills) return
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 500){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("git");
        habilidades[1].classList.add("docker");
        habilidades[2].classList.add("htmlcss");
        habilidades[3].classList.add("taildwind");
        habilidades[4].classList.add("pwa");
        habilidades[5].classList.add("postman");
        habilidades[6].classList.add("python");
        habilidades[7].classList.add("javascript");
        habilidades[8].classList.add("typescript");
        habilidades[9].classList.add("react");
        habilidades[10].classList.add("vue");
        habilidades[11].classList.add("node");
        habilidades[12].classList.add("sql");
        habilidades[13].classList.add("postgresql");
        habilidades[14].classList.add("angular");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 