
export const AboutMe = () => {
  return (
    <>
        {/* SECCION SOBRE MI  */}
        <section id="sobremi" className="sobremi  bg-blackBg">
            <div className="contenido-seccion bg-blackBg mt-[100px]">
                <div className="text-left bg-blackBg">
                    <h2 className="font-mono text-center text-5xl text-white p-8 bg-blackBg">About me</h2>
                    <div className="md:flex md:flex-row flex-col items-center mb-4">
                        <div className="block">
                            <img 
                                className="block border-solid border-[8px] border-greenBorder w-[60%] m-auto rounded-[100%] mb-6"
                                src="https://res.cloudinary.com/dytlbyofu/image/upload/v1673887901/Portafolio%20assets/boss_sm6orb.jpg" alt="">
                            </img>
                        </div>
                        <div>
                            <p className="px-10 text-white">
                                <span className="text-2xl font-bold text-greenBorder font-mono typed">Hi, I'm Jair Aceves  </span>
                                I am a kind, sociable and responsible person with learning in many areas of IT.
                                I like web development, in my free time 
                                I like to listen to music and create new ideas to develop new pages.
                                I am a person who likes to work with clear objectives.
                                I like to continue learning new tools to be able to improve my achievements.
                            </p>
                            <p className="px-10 text-white mb-10">
                                I have many abilities which I can overexploit in order to deliver the best of myself and thus deliver a great job.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="md:flex gap-2 bg-blackBg">
                   {/* datos personales */}
                    <div className="md:w-1/2 md:text-left bg-black-800 mt-2 md:mx-10">
                        <h3>Personal Info</h3>
                        <ul className="inline-block ul-center">
                            <div></div>
                            <li className="text-white mb-4">
                                <strong className="strong-tag-info">Birthday</strong>
                                23.06.2000
                            </li>
                            <li className="text-white  mb-4">
                                <strong className="strong-tag-info">Phone</strong>
                                MX: (+52) 3121555316
                            </li>
                            <li className="text-white  mb-4">
                                <strong className="strong-tag-info">Email</strong>
                                jairaceves56@gmail.com
                            </li>
                            <li className="text-white  mb-4">
                                <strong className="strong-tag-info">Website</strong>
                                www.example.com
                            </li>
                            <li className="text-white  mb-4">
                                <strong className="strong-tag-info">Adress</strong>
                                Guadalajara Jalisco, México
                            </li>

                        </ul>
                        <div className="md:w-3/5 mx-auto w-[50%] bg-greenBorder rounded-md p-2 text-center">
                            <span className="text-white bg-transparent font-bold">FREELANCE</span>
                        </div>
                        <div className="md:w-3/5 rounded-md p-2 text-center">
                            <button className="rounded-md">
                                <a 
                                    className=""
                                    href="https://res.cloudinary.com/dytlbyofu/image/upload/v1715033576/CV/Cv-sp_yxpn9z.pdf"
                                    target="_blank">
                                    Descargar CV <i className="fa-solid fa-download"></i>
                                    <span className="overlay"></span>
                                </a>
                            </button>
                        </div>
                    </div>

                    {/* <!-- intereses --> */}
                    <div className="mt-10 md:mx-auto">
                        <h3>Interests</h3>
                        <div className="flex flex-wrap">
                            <div className="interes-icon">
                                <div className="">
                                    <i className="fa-solid fa-gamepad interes-i"></i>
                                </div>
                                <span className="items-center">GAMES</span>
                            </div>
                            <div className="interes-icon">
                                <div>
                                    <i className="fa-solid fa-headphones interes-i"></i>
                                </div>
                                <span>MUSIC</span>
                            </div>
                            <div className="interes-icon">
                                <div>
                                    <i className="fa-solid fa-plane interes-i"></i>
                                </div>
                                <span>TRAVEL</span>
                            </div>
                            <div className="interes-icon">
                                <div>
                                    <i className="fa-brands fa-apple interes-i"></i>
                                </div>
                                <span>MAC OS</span>
                            </div>
                            <div className="interes-icon">
                                <div>
                                    <i className="fa-solid fa-football interes-i"></i>
                                </div>
                                <span>SPORTS</span>
                            </div>
                            <div className="interes-icon">
                                <div>
                                    <i className="fa-solid fa-video interes-i"></i>
                                </div>
                                <span>VIDEOS</span>
                            </div>
                            <div className="interes-icon">
                                <div>
                                    <i className="fa-solid fa-car interes-i"></i>
                                </div>
                                <span>CARS</span>
                            </div>
                            <div className="interes-icon">
                                <div>
                                    <i className="fa-solid fa-bowl-food interes-i"></i>
                                </div>
                                <span>FOOD</span>
                            </div>
                            
                        </div>
                    </div>
                
                </div>
            </div>
        </section>
    </>
  )
}
