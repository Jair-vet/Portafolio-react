import { Proyect } from "../components/Proyect"
import { Titulo } from "../components/Titulo"
import { SeedData } from "../data"

export const React = () => {

  const { ReactPage } = SeedData

  return (
    <>
      <Titulo titulo='React Js'/>
      <section className="mx-auto"> 
        <h2 className="text-center mt-36 text-6xl text-white font-mono">React Js Proyects</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 justify-center mt-12 m-6">
          {
            ReactPage.map(proyect => (
              <a className="a-tag-container" href={ proyect.link } target="_blank" key={ proyect.name }>
                <img
                className="img-tag-container"
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
 