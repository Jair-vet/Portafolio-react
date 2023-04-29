import { NavLink } from "react-router-dom"

export const Portafolio = () => {

  return (
    <>
      {/* <!-- SECCION PORTFOLIO --> */}
      <section 
        id="portfolio"
        className="relative w-[100%] pt-[50px] pb-[30px] bg-grayColor">
      </section>
      <section id="portfolio" className="bg-grayColor mx-auto mb-10 p-10">
        <h2 className="text-center text-4xl text-white font-mono relative mb-10">PORFOLIO</h2>
        <div className="m-5">
          <p className="text-white text-left text-lg uppercase">In this section you will find all the work that 
            I have done with the indicated tools.
             All Codes are in my Github Repository.
          </p>
        </div>
          <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 justify-center mx-6 bg-grayColor">
                {/* JavaScript */}
                <div className="text-sm text-center">
                  <NavLink
                      className="flex flex-col justify-center text-white uppercase items-center"
                      to='/javascript'>
                      <img className="img-tag-container-porfolio " src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670010691/skills-tools/js-logo_v6focr.png" alt="JavaScript Apps"></img>
                      <p className="uppercase" id="opacidad">click to see the projects</p>
                  </NavLink>
                </div>
                {/* VueJs */}
                <div className="text-sm text-center">
                  <NavLink
                      className="flex flex-col justify-center text-white uppercase items-center"
                      to='/vue'>
                      <img className="img-tag-container-porfolio" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670010692/skills-tools/Vue-icon_gwtj8g.png" alt="Vue Apps"></img>
                      <p className="uppercase" id="opacidad">click to see the projects</p>
                  </NavLink>
                </div>
                {/* ReactJs */}
                <div className="text-sm text-center">
                  <NavLink
                      className="flex flex-col justify-center text-white uppercase items-center"
                      to='/react'>
                      <img className="img-tag-container-porfolio" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670010692/skills-tools/React-icon_wcrcad.png" alt="React Apps"></img>
                      <p className="uppercase" id="opacidad">click to see the projects</p>
                  </NavLink>
                </div>
                {/* TailwindCss */}
                <div className="text-sm text-center">
                  <NavLink
                      className="flex flex-col justify-center text-white uppercase items-center"
                      to='/tailwind'>
                      <img className="img-tag-container-porfolio" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670021494/skills-tools/TailwindLogo_ot5lzl.png" alt="Tailwind Apps"></img>
                      <p className="uppercase" id="opacidad">click to see the projects</p>
                  </NavLink>
                </div>
                {/* Css */}
                <div className="text-sm text-center">
                  <NavLink
                      className="flex flex-col justify-center text-white uppercase items-center"
                      to='/css'>
                      <img className="img-tag-container-porfolio" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670010691/skills-tools/css-icon_jusqwv.png" alt="Css Apps"></img>
                      <p className="uppercase" id="opacidad">click to see the projects</p>
                  </NavLink>
                </div>
                {/* NodeJs */}
                <div className="text-sm text-center">
                  <NavLink
                      className="flex flex-col justify-center text-white uppercase items-center"
                      to='/node'>
                      <img className="img-tag-container-porfolio" src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="Node Apps"></img>
                      <p className="uppercase" id="opacidad">click to see the projects</p>
                  </NavLink>
                </div>
              </div>
          </div>
      </section>

    </>
  )
}
