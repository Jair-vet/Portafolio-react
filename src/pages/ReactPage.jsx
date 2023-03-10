import { Proyect } from "../components/Proyect"
import { Titulo } from "../components/Titulo"

export const React = () => {
  return (
    <>
      <Titulo titulo='React Js'/>
      <section className="mx-auto"> 
        <h2 className="text-center mt-36 text-6xl text-white font-mono">React Js Proyects</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 justify-center mt-5 m-6">
          {/* GiffExpert App */}
          <Proyect 
            enlace='https://app.netlify.com/sites/famous-fenglisu-01958d/overview'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004822/Applications%20made/GiftExpertApp_ufz7i9.png'
          />
          {/* Administrador de Notas */}
          <Proyect 
            enlace='https://wonderful-euclid-05642b.netlify.app/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1670014703/Applications%20made/Tablon_de_Tareas_lurm8b.png'
          />
          {/* Journal App */}
          <Proyect 
            enlace='journal-app-react-ten.vercel.app'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1673044862/Applications%20made/JournalApp_crgnlz.png'
          />
          {/* ToDo App */}
          <Proyect 
            enlace='https://unique-dolphin-ffc4c1.netlify.app'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1673044862/Applications%20made/TodoApp_yfmftv.png'
          />
          {/* Hero App */}
          <Proyect 
            enlace='https://glittering-concha-4449f2.netlify.app'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1673044862/Applications%20made/HeroApp_rxnmmz.png'
          />
          {/* Cotiza Cripto App */}
          <Proyect 
            enlace='https://cranky-kare-b4bfa0.netlify.app'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004816/Applications%20made/Cotizador-Cripto_mqbhuk.png'
          />
          {/* Veterinaria App */}
          <Proyect 
            enlace='https://bespoke-hummingbird-910c46.netlify.app/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004819/Applications%20made/Veterinaria_wbsmp8.png'
          />
          {/* Planificador de Gastos App */}
          <Proyect 
            enlace='https://darling-kitsune-b68047.netlify.app/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004820/Applications%20made/Control-gastos_odg67z.png'
          />
          {/* CRM */}
          <Proyect 
            enlace='https://unique-dolphin-ffc4c1.netlify.app/'
            imagen='https://user-images.githubusercontent.com/63264620/212576697-5db891f5-7b41-4fbd-b8b1-b0ef71c2aff9.png'
          />
          
          
        </div>
       
      </section>
    </>
  )
}
 