import { InitialCard } from "../components/InitialCard"
import { AboutMe } from "../components/AboutMe"
import { Portafolio } from "../components/Portafolio"
import { Navbar } from "../components/Navbar"
import { Certificados } from "../components/Certificados"
import { Footer } from "../components/Footer"
import { Skills } from "../components/Skills"


export const Inicio = () => {
  return (
    <>
        <Navbar />

        <InitialCard />

        {/* AboutMe Component */}
        <AboutMe />

        {/* Skills Componenet */}
        <Skills />

        {/* Portafolio Component */}
        <Portafolio />

        {/* Certificados Component */}
        <Certificados />

        {/* Footer Component */}
        <Footer />

    </>
  )
}
