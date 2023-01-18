import { InitialCard } from "../components/InitialCard"
import { AboutMe } from "../components/AboutMe"
import { Portafolio } from "../components/Portafolio"
import { Navbar } from "../components/Navbar"
import { Certificados } from "../components/Certificados"


export const Inicio = () => {
  return (
    <>
        <Navbar />

        <InitialCard />

        {/* AboutMe Component */}
        <AboutMe />

        {/* Portafolio Component */}
        <Portafolio />

        {/* Certificados Component */}
        <Certificados />

    </>
  )
}
