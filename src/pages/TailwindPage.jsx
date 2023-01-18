import { Proyect } from "../components/Proyect"
import { Titulo } from "../components/Titulo"

export const TailwindPage = () => {
  return (
    <>
      <Titulo titulo='TailwindCss'/>

      <section>
        <h2 className="text-center mt-36 text-6xl font-mono text-greenBorder">TailwindCsss Proyects</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 justify-center mt-5 m-6">
          {/* Simple Cards */}
          <Proyect 
            enlace='https://jair-vet.github.io/Cards-using-Tailwind/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004822/Applications%20made/Cards-using-Tailwind_lyigmn.png'
          />
          {/* Shortly */}
          <Proyect 
            enlace='https://jair-vet.github.io/Shortly-link-Tailwind/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004821/Applications%20made/Shortly-link-Tailwind_kqtc7e.png'
          />
          {/* Testimonial Grid */}
          <Proyect 
            enlace='https://jair-vet.github.io/Testimonial-Grid-Tailwind/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1670548726/Applications%20made/testimonial-grid_spqzjw.png'
          />
          {/* Pricing Grid */}
          <Proyect 
            enlace='https://jair-vet.github.io/Pricing-Grid-Tailwind/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004822/Applications%20made/Pricing-Grid-Tailwind_dwhkiq.png'
          />
          {/* Loop Studios */}
          <Proyect 
            enlace='https://loop-studios-tailwind-one.vercel.app/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004821/Applications%20made/Captura_de_Pantalla_2023-01-17_a_la_s_19.06.08_y8h3yt.png'
          />
          {/* Perfil */}
          <Proyect 
            enlace='https://jair-vet.github.io/My-Perfil-Tailwind/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004821/Applications%20made/My-Perfil-Tailwind_zponqb.png'
          />
          {/* Email Card */}
          <Proyect 
            enlace='https://jair-vet.github.io/Email-Card-Tailwind/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004820/Applications%20made/Email-Card-Tailwind_vhuoug.png'
          />
          {/* Boostiger */}
          <Proyect 
            enlace='https://jair-vet.github.io/Boostiger/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004819/Applications%20made/Boostiger_j1spsp.png'
          />
          {/* Book Mark */}
          <Proyect 
            enlace='https://jair-vet.github.io/Bookmark-Tailwind/#faq'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004816/Applications%20made/Bookmark-Tailwind_soj6is.png'
          />
          {/* Fylo */}
          <Proyect 
            enlace='https://jair-vet.github.io/Fylo-Tailwind/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004819/Applications%20made/Fylo-Tailwind_r7rufm.png'
          />
          {/* Product Model Card */}
          <Proyect 
            enlace='https://jair-vet.github.io/Producto-model-Card/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004819/Applications%20made/Producto-model-Card_msge7f.png'
          />
          {/* Image-Gallery */}
          <Proyect 
            enlace='https://jair-vet.github.io/My-Perfil-Tailwind/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004818/Applications%20made/Image-Gallery_aj6sxk.png'
          />

        </div>
      </section>
    </>
  )
}
