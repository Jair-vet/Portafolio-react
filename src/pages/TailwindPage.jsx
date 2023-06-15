import { Titulo } from "../components/Titulo"
import { SeedData } from "../data"

export const TailwindPage = () => {

  const { TailwindCssPage } = SeedData

  return (
    <>
      <Titulo titulo='TailwindCss'/>

      <section>
        <h2 className="text-center mt-36 text-6xl font-mono text-greenBorder">TailwindCsss Proyects</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 justify-center mt-12 m-6">
          {
            TailwindCssPage.map(proyect => (
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
