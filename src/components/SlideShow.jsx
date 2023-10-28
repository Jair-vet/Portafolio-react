import { SeedData } from "../data/index"


export const SlideShow = () => {

  const { ReactPage } = SeedData

  const appReciente = ReactPage[0]

  const proyectos = []
  proyectos.push(appReciente)

  return (
    <>
      <section className="mx-auto">
        <h2 className="text-center mt-36 text-6xl text-white font-mono">Latest Apps</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 justify-center mt-12 m-6">
          {
            proyectos.map(proyect => (
              <a className="w-full" href={ proyect.link } target="_blank" key={ proyect.name }>
                <img
                className="object-cover hover:duration-300 hover:scale-105 rounded-md"
                src={ proyect.image } 
                alt="" 
                />
                
              </a>
            ))
          }
        </div>
      </section>
  
    </>
  )
}
