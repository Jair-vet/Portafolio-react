import { NavLink } from "react-router-dom"

export const Titulo = ({ titulo }) => {
  return (
    <>
    <div className="fixed bg-[#1e2326] w-full top-0 left-0 z-50">
        <header className="max-w-[1100px] mx-auto flex justify-between items-center px-4 py-5">
            <div className="font-mono text-[36px] text-greenBorder">
                <a href="#" className="font-mono">{ titulo }</a>
            </div>
            <div>
              <NavLink 
                className="nav-selector text-white no-underline p-3 mx-1"
                to='/inicio'>
              Return
              </NavLink>
            </div>
        </header>
    </div>
    </>
    
  )
}
