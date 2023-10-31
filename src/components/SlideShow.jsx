import { SeedData } from "../data/index"
import { LatestProject } from "./LatestProject"

export const SlideShow = () => {

  const { ReactPage } = SeedData

  const lastestProject = ReactPage.filter(project => project.proyect?.includes('new'))


  return (
    <>
      <section className="mx-auto">
        <h2 className="text-center mt-36 text-6xl text-white font-mono">Latest Apps</h2>
          <div className="flex">
            <LatestProject 
              key={lastestProject.key}
              proyecto={lastestProject}
            />
          </div>
      </section>
  
    </>
  )
}
