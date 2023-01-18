import { NavLink } from "react-router-dom"

export const Portafolio = () => {

  return (
    <>
      {/* <!-- SECCION PORTFOLIO --> */}
      <section 
        id="portfolio"
        className="relative w-[100%] pt-[50px] pb-[30px] bg-grayColor">
      </section>
      <section id="portfolio" className="bg-blackBg mx-auto ">
        <h2 className="text-center text-4xl text-white font-mono relative">PORFOLIO</h2>
          <div className="bg-blackBg">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 justify-center mx-6">
                <NavLink
                    className="flex justify-center"
                    to='/javascript'>
                    <img className="img-tag-container-porfolio" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670010691/skills-tools/js-logo_v6focr.png" alt="JavaScript Apps"></img>
                </NavLink>
                <NavLink
                    className="flex justify-center" 
                    to='/vue'>
                    <img className="img-tag-container-porfolio" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670010692/skills-tools/Vue-icon_gwtj8g.png" alt="Vue Apps"></img>
                </NavLink>
                <NavLink
                    className="flex justify-center" 
                    to='/react'>
                    <img className="img-tag-container-porfolio" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670010692/skills-tools/React-icon_wcrcad.png" alt="React Apps"></img>
                </NavLink>
                <NavLink
                    className="flex justify-center" 
                    to='/tailwind'>
                    <img className="img-tag-container-porfolio" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670021494/skills-tools/TailwindLogo_ot5lzl.png" alt="Tailwind Apps"></img>
                </NavLink>
                <NavLink
                    className="flex justify-center" 
                    to='/css'>
                    <img className="img-tag-container-porfolio" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670010691/skills-tools/css-icon_jusqwv.png" alt="Css Apps"></img>
                </NavLink>
                <NavLink
                    className="flex justify-center" 
                    to='/node'>
                    <img className="img-tag-container-porfolio" src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="Node Apps"></img>
                </NavLink>
                 
              </div>
          </div>
      </section>
      <section 
        className="relative w-[100%] pt-[50px] pb-[30px] bg-grayColor">
      </section>
    </>
  )
}
