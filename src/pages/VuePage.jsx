import { Proyect } from "../components/Proyect"
import { Titulo } from "../components/Titulo"

export const VuePage = () => {
  return (
    <>
      <Titulo titulo='Vue Js'/>
      <section className="mx-auto"> 
        <h2 className="text-center mt-36 text-6xl text-white font-mono">Css Proyects</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 justify-center mt-5 m-6">
          {/* DayBook App */}
          <Proyect 
            enlace='https://super-dieffenbachia-a85345.netlify.app/#/auth'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1670027210/Applications%20made/JournalApp_g39ivy.png'
          />
          {/* Map App */}
          <Proyect 
            enlace='https://deft-basbousa-5af3b7.netlify.app/#/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1672159389/Applications%20made/MapApp_lbaelz.png'
          />
          {/* Credit Card */}
          <Proyect 
            enlace='https://jair-vet.github.io/Credit-Card-VUE/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004818/Applications%20made/Credit-Card-VUE_vuuraq.png'
          />
          {/* Pokemon */}
          <Proyect 
            enlace='https://eclectic-starship-d44a61.netlify.app/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1670014137/Applications%20made/PokemonApp_w59fsv.png'
          />
          
        </div>
       
      </section>
    </>
    
  )
}
