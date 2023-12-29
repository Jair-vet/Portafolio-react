import { Proyect } from "../components/Proyect"
import { Titulo } from "../components/Titulo"
import { Certificates } from "../data/certificate"

export const CertificatesPage = () => {

  const { certificados } = Certificates

  return (
    <>
        <Titulo titulo='Certificates'/>
        <section className="mx-auto"> 
          <h2 className="text-center mt-36 text-6xl text-white font-mono">Certificates</h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 justify-center mt-12 m-6">
            {
              certificados.map(proyect => (
                <a className="a-tag-container" href={ proyect.link } target="_blank" key={ proyect.id }>
                  <img
                    className="img-tag-container"
                    src={ proyect.logo }
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
 