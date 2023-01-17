
export const InitialCard = () => {
    return (
        <>
            {/* SECCION INICIO  */}
            <section id="inicio" className="inicio">
            <div className="max-w-[350px] p-[20px] mt-28 m-auto bg-blackBg text-center rounded-[40px]">
                <div className="block">
                    <img 
                        className="block border-solid border-[8px] border-greenBorder w-[80%] m-auto rounded-[100%]"
                        src="https://res.cloudinary.com/dytlbyofu/image/upload/v1673887901/Portafolio%20assets/boss_sm6orb.jpg" alt="">
                        </img>
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
