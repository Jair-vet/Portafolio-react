import { Proyect } from "../components/Proyect"
import { Titulo } from "../components/Titulo"

export const JavaScript = () => {
  return (
    <>
        <Titulo titulo='JavaScript' />
        <section className="mx-auto"> 
        <h2 className="text-center mt-36 text-6xl text-white font-mono">React Js Proyects</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 justify-center mt-12 m-6">
          {/* Cine Booking App */}
          <Proyect 
            enlace='https://jair-vet.github.io/Movie-seat-Booking/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674171227/Applications%20made/Movie_Seat_Booking_fxkzox.png'
          />
          {/* Register Validator App */}
          <Proyect 
            enlace='https://jair-vet.github.io/Form-Validator-Vanillajs/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674171227/Applications%20made/Form_Validator_jifgnc.png'
          />
          {/* Drink Water App */}
          <Proyect 
            enlace='https://jair-vet.github.io/Drink-Water/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004824/Applications%20made/Drink-Water_mk5mai.png'
          />
          {/* Search App */}
          <Proyect 
            enlace='https://jair-vet.github.io/Hidden-search/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004824/Applications%20made/Search_Icon_dpljqz.png'
          />
          {/* Progress Steps App */}
          <Proyect 
            enlace='https://jair-vet.github.io/Progress-Steps/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004822/Applications%20made/Progress_steps_bothvo.png'
          />
          {/* Jokes App */}
          <Proyect 
            enlace='https://jair-vet.github.io/Jokes-App/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004821/Applications%20made/Jokes-App_ggcxvd.png'
          />
          {/* Key Code App */}
          <Proyect 
            enlace='https://jair-vet.github.io/Key-Code-App/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004819/Applications%20made/Key-Code-App_zavfeu.png'
          />
          {/* Navigation App */}
          <Proyect 
            enlace='https://jair-vet.github.io/Navigation-Bar/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004819/Applications%20made/Navigation-Bar_x2sllk.png'
          />
          {/* Question Collapse App */}
          <Proyect 
            enlace='https://jair-vet.github.io/Questions-Collapse/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004819/Applications%20made/Questions-Collapse_inngx0.png'
          />
          {/* Using Coma App */}
          <Proyect 
            enlace='https://jair-vet.github.io/Using-Comma/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004818/Applications%20made/Using-Comma_zyirlj.png'
          />
          {/* Sound Bar App */}
          <Proyect 
            enlace='https://jair-vet.github.io/Sound-Board/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004817/Applications%20made/Sound-Board_bmvjtq.png'
          />
          {/* Increment Counter App */}
          <Proyect 
            enlace='https://jair-vet.github.io/Increment-Counter/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004818/Applications%20made/Increment-Counter_brvizm.png'
          />
          
          
        </div>
       
      </section>
    </>
  )
}
 