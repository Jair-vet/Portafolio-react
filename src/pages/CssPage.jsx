import { Proyect } from "../components/Proyect"
import { Titulo } from "../components/Titulo"

export const CssPage = () => {
  return (
    <>
      <Titulo titulo='Css'/>

      <section className="mx-auto"> 
        <h2 className="text-center mt-36 text-6xl text-white font-mono">Css Proyects</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 justify-center mt-5 m-6">
          {/* Nucleus */}
          <Proyect 
            enlace='https://jair-vet.github.io/Nucleus_app/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1670014703/Applications%20made/NucleosWallet_zlsb8l.png'
          />
          {/* TechPRO */}
          <Proyect 
            enlace='https://jair-vet.github.io/TechPRO/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1670014703/Applications%20made/Tech_Pro_ugxttz.png'
          />
          {/* Tienda Muebles */}
          <Proyect 
            enlace='https://jair-vet.github.io/Tienda-Ecomerce/index.html'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004820/Applications%20made/Tienda-muebles_zspujs.png'
          />
          {/* Arquitectura Bosque */}
          <Proyect 
            enlace='https://jair-vet.github.io/ArquitecturaBosque/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004822/Applications%20made/Arquitectura_rvzyfj.png'
          />
          {/* Expanding Card */}
          <Proyect 
            enlace='https://jair-vet.github.io/Expanding-Cards/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004824/Applications%20made/Expanding_Card_n8bsj0.png'
          />
         {/* Login Drop */}
          <Proyect 
            enlace='https://jair-vet.github.io/Login-Drop-Effect/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1672159388/Applications%20made/Login-Drop-Effect_wxtd7j.png'
          />
          {/* Login Card */}
          <Proyect 
            enlace='https://jair-vet.github.io/Basic-Login/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004824/Applications%20made/Login_Card_bskxgv.png'
          />
          {/* Landing Page */}
          <Proyect 
            enlace='https://jair-vet.github.io/Landing-Page/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004823/Applications%20made/Landing_Page_yhpqxx.png'
          />
          {/* Login and Signup */}
          <Proyect 
            enlace='https://jair-vet.github.io/Login-and-Signup/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004816/Applications%20made/Login-and-Signup_xpqwxu.png'
          />
          {/* 404 astronaut */}
          <Proyect 
            enlace='https://jair-vet.github.io/404-astronaut/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004818/Applications%20made/404-astronaut_yd8o0z.png'
          />
          {/* 404 Moon */}
          <Proyect 
            enlace='https://jair-vet.github.io/404-moon/'
            imagen='https://res.cloudinary.com/dytlbyofu/image/upload/v1674004818/Applications%20made/404-mon_smyvek.png'
          />
        </div>
       
      </section>
    </>

  )
}
