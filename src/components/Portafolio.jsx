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
                  <a href="#">
                      <img className="object-cover h-40" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670010691/skills-tools/js-logo_v6focr.png" alt="QuickJobs App"></img>
                  </a>
                  <a href="#">
                      <img className="object-cover h-40" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670010692/skills-tools/Vue-icon_gwtj8g.png" alt="Tech Pro"></img>
                  </a>
                  <a href="#">
                      <img className="object-cover h-40" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670010692/skills-tools/React-icon_wcrcad.png" alt="nucleus App"></img>
                  </a>
                  <a href="#">
                      <img className="object-cover h-40" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670021494/skills-tools/TailwindLogo_ot5lzl.png" alt="Notas App"></img>
                  </a>
                  <a href="#">
                      <img className="object-cover h-40" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670010691/skills-tools/css-icon_jusqwv.png" alt="pokemon App"></img>
                  </a>
                  <a href="#">
                      <img className="object-cover h-40" src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="DayBook App"></img>
                  </a>
                  <a href="#">
                      <img className="object-cover h-40" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" alt="DayBook App"></img>
                  </a>
                  <a href="#">
                      <img className="object-cover h-40" src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670010691/skills-tools/php-logo_p42kpg.webp" alt="DayBook App"></img>
                  </a>
              </div>
          </div>
      </section>
      <section className="bg-dark-pattern">
          <div className="border-dotted border-2 border-emerald-500 "></div>
      </section>
    </>
  )
}
