import React, { useEffect, useState } from 'react'
import { SeedData } from '../data'
import { SlideShow } from './SlideShow'

export const Proyectos = () => {

    const { CssPage, JavaScriptPage, ReactPage, TailwindCssPage, VuePage } = SeedData
    
    const randomProjects = () => {
        const completeList = [...CssPage, ...JavaScriptPage, ...ReactPage, ...TailwindCssPage, ...VuePage]
        const listComplete = [...completeList].sort(() => Math.random() > 0.5 ? 1 : -1).slice(0,3)
        return listComplete
    }
    
    const [changeArray, setChangeArray] = useState(true)
    
    // useEffect(() => {
    //     if (changeArray){
    //         setInterval(() => {
    //             randomProjects()
    //             setChangeArray(false)
    //         }, 7000)
    //     }
    //     if (!changeArray){
    //         setInterval(() => {
    //             randomProjects()
    //             setChangeArray(true)
    //         }, 7000)
    //     }
    // }, [changeArray])
    


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
                    <SlideShow />
                           
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
