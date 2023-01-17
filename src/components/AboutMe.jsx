
export const AboutMe = () => {
  return (
    <>
        {/* SECCION SOBRE MI  */}
        <section id="sobremi" className="sobremi  bg-blackBg">
            <div className="contenido-seccion bg-blackBg">
                <h2 className="font-mono text-center text-5xl text-white p-8 bg-blackBg">About me</h2>
                <div className="text-left bg-blackBg">
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

                <div className="md:flex gap-2 bg-blackBg">
                   {/* datos personales */}
                    <div className="md:w-1/2 mt-10 md:text-left bg-black-800 mt-2 md:mx-10">
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
                                    href="../../src/pdf/CV2.1.1.pdf"
                                    target="_blank">
                                    Descargar CV <i class="fa-solid fa-download"></i>
                                    <span class="overlay"></span>
                                </a>
                            </button>
                        </div>
                    </div>

                    {/* <!-- intereses --> */}
                    <div className="mt-10 mt-2 md:mx-auto">
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
