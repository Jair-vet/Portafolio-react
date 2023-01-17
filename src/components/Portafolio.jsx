
export const Portafolio = () => {
  return (
    <>
      {/* <!-- SECCION PORTFOLIO --> */}
      <section id="portfolio" className="portfolio bg-dark-pattern">
          <div className="container mx-auto text-white overflow-visible flex justify-center p-1">
              <h2 className="text-center">PORFOLIO</h2>
          </div>
          <div className="border-dotted border-2 border-emerald-500 "></div>
      </section>
      <section className="section-padding-xl crash bg-dark-pattern">
          <div className="container">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <a href="https://proyectomodular-production.up.railway.app/" target="_blank" >
                      <img className="object-cover h-40" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670016444/Applications%20made/QuickJobs.png" alt="QuickJobs App"></img>
                  </a>
                  <a href="https://jair-vet.github.io/TechPRO/" target="_blank" >
                      <img className="object-cover h-40" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670014703/Applications%20made/Tech_Pro_ugxttz.png" alt="Tech Pro"></img>
                  </a>
                  <a href="https://jair-vet.github.io/Nucleus_app/" target="_blank" >
                      <img className="object-cover h-40" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670014703/Applications%20made/NucleosWallet_zlsb8l.png" alt="nucleus App"></img>
                  </a>
                  <a href="https://wonderful-euclid-05642b.netlify.app/" target="_blank" >
                      <img className="object-cover h-40" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670014703/Applications%20made/Tablon_de_Tareas_lurm8b.png" alt="Notas App"></img>
                  </a>
                  <a href="https://eclectic-starship-d44a61.netlify.app/" target="_blank" >
                      <img className="object-cover h-40" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670014137/Applications%20made/PokemonApp_w59fsv.png" alt="pokemon App"></img>
                  </a>
                  <a href="https://super-dieffenbachia-a85345.netlify.app/#/daybook" target="_blank" >
                      <img className="object-cover h-40" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670027210/Applications%20made/JournalApp_g39ivy.png" alt="DayBook App"></img>
                  </a>
              </div>
          </div>
      </section>
      <section className="bg-dark-pattern">
          <div className="border-dotted border-2 border-emerald-500 "></div>
      </section>
    </>
  )
}
