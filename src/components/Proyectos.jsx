import React, { useEffect, useState } from 'react'
import { SeedData } from '../data'

export const Proyectos = () => {

    const { CssPage, JavaScriptPage, ReactPage, TailwindCssPage, VuePage } = SeedData
    
    const randomProjects = () => {
        const completeList = [...CssPage, ...JavaScriptPage, ...ReactPage, ...TailwindCssPage, ...VuePage]
        const listComplete = [...completeList].sort(() => Math.random() > 0.5 ? 1 : -1).slice(0,3)
        return listComplete
    }
    
    const [changeArray, setChangeArray] = useState(true)
    
    useEffect(() => {
        setInterval(() => {
            setChangeArray(false)
            randomProjects()
            setChangeArray(true)
        }, 7000)
    }, [useState])
    


    const [ ...listComplete ] = randomProjects()
 
    return (
        <>
            {/* <!-- SECCION PORTFOLIO --> */}
            <section 
                id="proyectos"
                className="relative w-[100%] pt-[50px] pb-[30px] bg-grayColor">
            </section>
            <section id="proyectos" className="bg-grayColor mx-auto mb-10 p-10">
                <h2 className="text-center text-4xl text-white font-mono relative mb-10">PROYECTS</h2>
                <div className="mb-2">
                    <p className="text-white text-lg text-center">In this section you will find all the proyects that I have done.</p>
                </div>
                
                {/* <!-- Card Proyect Continer --> */}
                <div className='flex md:flex-row flex-col items-center justify-center duration-700'>
                            {   
                                changeArray 
                                ? // Si es true
                                listComplete.map((project) => (
                                    <div className="p-1 m-3 shadow-xl rounded-md hover:bg-indigo-400 hover:-translate-y-6 duration-300" key={project.name}>
                                        {/* <!-- Image 1 --> */}
                                        <div className="relative group ">
                                            <a  href={ project.link } target="_blank" key={ project.name }>
                                                <img src={ project.image  } alt={ project.name } className="w-96 h-60 rounded-md" />
                                                <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 
                                                            bg-black opacity-0 group-hover:opacity-100 bg-opacity-60 rounded-b-xl">
                                                    <div className="flex justify-between w-full flex-row items-center">
                                                        <div className="">
                                                            <p className="text-sm font-bold items-center"> { project.name } </p>
                                                        </div>
                                                    </div>
                                                </div> 
                                                
                                            </a>
                                        </div>
                                    </div>
                                    ))

                                : // Si es False

                                listComplete.map((project) => (
                                    <div className="p-1 m-3 shadow-2xl rounded-md hover:bg-indigo-400 duration-300" key={project.name}>
                                        {/* <!-- Image 1 --> */}
                                        <div className="relative group">
                                            <img src={ project.image  } alt={ project.name } className="w-96 h-60 rounded-xl" />
                                            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 
                                                        bg-black opacity-0 group-hover:opacity-100 bg-opacity-60 rounded-b-xl">
                                                <div className="flex justify-between w-full flex-row items-center">
                                                    <div className="">
                                                        <p className="text-sm font-bold items-center"> { project.name } </p>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                ))
                            }
                            </div>
                    

                {/* Git Hub Proyects */}
                <div className='flex flex-col items-center mt-4'>
                    <a 
                        href="https://github.com/Jair-vet" 
                        target="_blank">
                        <img 
                            src="https://res.cloudinary.com/dytlbyofu/image/upload/v1686795816/skills-tools/git-hub_folzvx.png" 
                            alt="GitHub Logo"
                            className='w-16 text-white'
                        />
                    </a>
                    <p className="text-white text-lg text-center mt-2"> All Codes are in my Github Repository.</p>
                </div>

            </section>
        </>
    )
}
