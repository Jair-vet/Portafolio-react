import { NavLink } from "react-router-dom"

export const Portafolio = () => {

  return (
    <>
      {/* <!-- SECCION PORTFOLIO --> */}
      <section id="portfolio" className="portfolio bg-dark-pattern">
          <div className="container mx-auto text-white overflow-visible flex justify-center p-1">
              <h2 className="text-center">PORFOLIO</h2>
          </div>
          <div className="border-dotted border-2 border-emerald-500 "></div>
      </section>
      <section className="section-padding-xl crash bg-dark-pattern">
          <div className="container">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <NavLink 
                    to='/javascript'>
                    <img className="object-cover h-32" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670010691/skills-tools/js-logo_v6focr.png" alt="JavaScript Apps"></img>
                </NavLink>
                <NavLink 
                    to='/vue'>
                    <img className="object-cover h-40" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670010692/skills-tools/Vue-icon_gwtj8g.png" alt="Vue Apps"></img>
                </NavLink>
                <NavLink 
                    to='/react'>
                    <img className="object-cover h-40" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670010692/skills-tools/React-icon_wcrcad.png" alt="React Apps"></img>
                </NavLink>
                <NavLink 
                    to='/tailwind'>
                    <img className="object-cover h-40" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670021494/skills-tools/TailwindLogo_ot5lzl.png" alt="Tailwind Apps"></img>
                </NavLink>
                <NavLink 
                    to='/css'>
                    <img className="object-cover h-40" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670010691/skills-tools/css-icon_jusqwv.png" alt="Css Apps"></img>
                </NavLink>
                <NavLink 
                    to='/node'>
                    <img className="object-cover h-40" src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="Node Apps"></img>
                </NavLink>
                 
              </div>
          </div>
      </section>
      <section className="bg-dark-pattern">
          <div className="border-dotted border-2 border-emerald-500 "></div>
      </section>
    </>
  )
}
