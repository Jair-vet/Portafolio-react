import { Typed } from "./Typed"

export const InitialCard = () => {
    return (
        <>
            {/* SECCION INICIO  */}
            <section id="inicio" className="inicio">
                <div className="max-w-[1080px] md:p-[80px] p-4 md:m-auto bg-blackBg text-center rounded-[40px]">
                    <div className="flex justify-center">
                        <div className="body-part-2">
                            <div>
                                <div className="hoodie-guy"></div>
                                    <div className="circle">
                                        <span style={{'--i' : 1}}  className='w-full'><img src="https://res.cloudinary.com/dytlbyofu/image/upload/v1689604494/porfolio%20tools/javascript_h4382v.svg" className='rounded-full'></img></span>
                                        <span style={{'--i' : 2}}  className='w-full'><img src="https://res.cloudinary.com/dytlbyofu/image/upload/v1689604494/porfolio%20tools/python_lzagbc.svg" ></img></span>
                                        <span style={{'--i' : 3}}  className='w-full'><img src="https://res.cloudinary.com/dytlbyofu/image/upload/v1689604494/porfolio%20tools/MySQL-Dark_hgecjd.svg" ></img></span>
                                        <span style={{'--i' : 4}}  className='w-full'><img src="https://res.cloudinary.com/dytlbyofu/image/upload/v1689604493/porfolio%20tools/html-5_a6zt5u.svg" className='mt-1'></img></span>
                                        <span style={{'--i' : 5}}  className='w-full'><img src="https://res.cloudinary.com/dytlbyofu/image/upload/v1689604493/porfolio%20tools/Firebase-Dark_amembm.svg" ></img></span>
                                        <span style={{'--i' : 6}}  className='w-full'><img src="https://res.cloudinary.com/dytlbyofu/image/upload/v1689604493/porfolio%20tools/Github-Dark_jymkly.svg" ></img></span>
                                        <span style={{'--i' : 7}}  className='w-full'><img src="https://res.cloudinary.com/dytlbyofu/image/upload/v1689604493/porfolio%20tools/css3_etphdk.svg" className='mt-1'></img></span>
                                        <span style={{'--i' : 8}}  className='w-full'><img src="https://res.cloudinary.com/dytlbyofu/image/upload/v1689604493/porfolio%20tools/flutter_fqoofl.svg" ></img></span>
                                        <span style={{'--i' : 9}}  className='w-full'><img src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670021494/skills-tools/TailwindLogo_ot5lzl.png" ></img></span>
                                        <span style={{'--i' : 10}} className='w-full'><img src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670010692/skills-tools/Vue-icon_gwtj8g.png" className='mt-3'></img></span>
                                        <span style={{'--i' : 11}} className='w-full'><img src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670010692/skills-tools/React-icon_wcrcad.png" className='mt-2'></img></span>
                                        <span style={{'--i' : 12}} className='w-full'><img src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670010691/skills-tools/postman-icon_aqryg7.webp" ></img></span>
                                        <span style={{'--i' : 13}} className='w-full'><img src="https://res.cloudinary.com/dytlbyofu/image/upload/v1689607569/porfolio%20tools/node_icon_xghddx.png" ></img></span>
                                        <span style={{'--i' : 14}} className='w-full'><img src="https://res.cloudinary.com/dytlbyofu/image/upload/v1670010691/skills-tools/docker-lcon_t9mlir.webp" className='mt-3 ml-1'></img></span>
                                        <span style={{'--i' : 15}} className='w-full'><img src="https://res.cloudinary.com/dytlbyofu/image/upload/v1689608552/porfolio%20tools/next-js-icon_h5luaz.png"></img></span>
                                        <span style={{'--i' : 16}} className='w-full'><img src="https://res.cloudinary.com/dytlbyofu/image/upload/v1689608684/porfolio%20tools/bootstrap-icon_wvw0yb.png"></img></span>
                                    </div>
                                </div>
                            <div className="background-circle border-2 border-greenBorder"></div>
                        </div>
                    </div>
                    <h1 className="font-mono text-[42px] font-bold mt-10">JAIR ACEVES</h1>
                    <h2 className="text-[15px] font-normal">Informartic enginneer - Fullstack / Web-development Jr</h2>
                    <div className="inline-block mt-10 mb-16 text-center">
                        <a 
                            className="social-icons"
                            href="https://www.facebook.com/carlos.aseves.9" 
                            target="_blank"><i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a 
                            className="social-icons"
                            href="https://github.com/Jair-vet" 
                            target="_blank"><i className="fa-brands fa-github"></i>
                        </a>
                        <a 
                            className="social-icons"
                            href="https://wa.me/+523121555316" 
                            target="_blank"><i className="fa-brands fa-whatsapp"></i>
                        </a>
                        <a 
                            className="social-icons"
                            href="https://www.instagram.com/_jair0699/" 
                            target="_blank"><i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </section>
        </>
  )
}
