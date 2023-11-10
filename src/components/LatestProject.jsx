
export const LatestProject = ({proyecto}) => {

    return (
        <div>
            {/* <div className="flex md:flex-row flex-col gap-7 mt-6"> */}
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 justify-center mt-5 m-6">
                { proyecto.map(proyecto => (
                        <a className="w-full text-grayColor hover:text-gray-500" href={ proyecto.link } target="_blank" key={ `${proyecto.link}+${proyecto.key}` }>
                            <img
                                className="object-cover duration-500 hover:duration-300 hover:scale-105 rounded-md w-full h-64"
                                src={ proyecto.image } 
                                alt={ proyecto.name } 
                            />
                            <p className="text-center text-3xl duration-500 font-bold uppercase mt-2 p-2">{ proyecto.name }</p>
                        </a>
                    ))
                }

            </div>
            {/* </div> */}
        </div>

    )
}
