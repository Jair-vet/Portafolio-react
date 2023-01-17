
export const Navbar = () => {

    let menuVisible = false;
    //Función que oculta o muestra el menu
    const mostrarOcultarMenu = () => {
        if(menuVisible){
            document.getElementById("nav").classList ="";
            menuVisible = false;
        }else{
            document.getElementById("nav").classList ="responsive";
            menuVisible = true;
        }
    }

  return (
    <div className="fixed bg-[#1e2326] w-full top-0 left-0 z-50">
        <header className="max-w-[1100px] mx-auto flex justify-between items-center px-4 py-5">
            <div className="font-mono text-[36px] text-greenBorder">
                <a href="#" className="font-mono">Jair Aceves</a>
            </div>
            <nav id="nav" className="display-none">
                <ul className="flex list-none">
                    <li className="text-white no-underline p-3 mx-1">
                        <a 
                            className="nav-selector"
                            href="#inicio"
                            /* onclick="seleccionar()" */>INICIO
                        </a>
                    </li>
                    <li className="text-white no-underline p-3 mx-1">
                        <a 
                            className="nav-selector" 
                            href="#sobremi" 
                            /* onclick="seleccionar()" */>ABOUT ME
                        </a>
                    </li>
                    <li className="text-white no-underline p-3 mx-1">
                        <a className="nav-selector" href="#skills" /* onclick="seleccionar()" */>SKILLS</a>
                    </li>
                    <li className="text-white no-underline p-3 mx-1">
                        <a className="nav-selector" href="#curriculum" /* onclick="seleccionar()" */>RESUME</a>
                    </li>
                    <li className="text-white no-underline p-3 mx-1">
                        <a className="nav-selector" href="#portfolio" /* onclick="seleccionar()" */>PORTFOLIO</a>
                    </li>
                    <li className="text-white no-underline p-3 mx-1">
                        <a className="nav-selector" href="#certificates" /* onclick="seleccionar()" */>CERTIFICATES</a>
                    </li>
                    <li className="text-white no-underline p-3 mx-1">
                        <a className="nav-selector" href="#contacto" /* onclick="seleccionar()" */>CONTAC</a>
                    </li>
                </ul>
            </nav>
            <div className="nav-responsive" onClick={ mostrarOcultarMenu  }>
                <i className="fa-solid fa-bars"></i>
            </div>
        </header>
    </div>
  )
}
