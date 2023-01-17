import { InitialCard } from "../components/InitialCard"
import { AboutMe } from "../components/AboutMe"
import { Portafolio } from "../components/Portafolio"


export const Inicio = () => {
  return (
    <>
        <InitialCard />

        {/* AboutMe Component */}
        <AboutMe />

        {/* Portafolio Component */}
        <Portafolio />

    </>
  )
}
