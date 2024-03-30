import React from 'react'
import { ProjectCard1 } from './Projects/ProjectCard1'
import { ProjectCard2 } from './Projects/ProjectCard2'
import { ProjectCard3 } from './Projects/ProjecCard3'



const Portfolio = () => {
  return (
    <div  className=' h-max  justify-center items-center mx-6 p-8 flex-col border-t border-zinc-600'>
      <h1 className='text-[4vw] text-zinc-100 carter-one-regular font-semibold text-center mb-28'>Projects</h1>
       <ProjectCard1/>
       <ProjectCard2/>
       <ProjectCard3/>
        </div>
  )
}

export default Portfolio