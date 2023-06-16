import { InitialCard } from "../components/InitialCard"
import { AboutMe } from "../components/AboutMe"
import { Portafolio } from "../components/Portafolio"
import { Navbar } from "../components/Navbar"
import { Certificados } from "../components/Certificados"
import { Footer } from "../components/Footer"
import { Skills } from "../components/Skills"

import {efectoHabilidades} from '../helpers/script'
import { Proyectos } from "../components/Proyectos"

export const Inicio = () => {
  window.onscroll = function(){
    efectoHabilidades();
} 
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

        <Proyectos />

        {/* Certificados Component */}
        <Certificados />

        {/* Footer Component */}
        <Footer />

    </>
  )
}
