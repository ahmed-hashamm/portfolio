import React from 'react'
import { ProjectCard } from './Projects/ProjectCard'
import { eatsLogo,Dev, goodeats } from '../assets'



const Portfolio = () => {
  const description1="The ultimate hub for all developers where you can post blogs and project ideas, whether you have an idea to post or looking for inspiration, Dev-Com is the perfect place for you";
  const description2=" A local fast food outlet ,menu section to display the delicious food items along with the top rated menu items. A beautifull cart to add items and displaying the total bill.";
  return (
    <div  className=' h-max  justify-center items-center mx-6  flex-col gap-20 border-t pt-6 border-zinc-600'>
      <h1 className='text-[4vw] text-zinc-100 carter-one-regular font-semibold text-center mb-28'>Projects</h1>
       <ProjectCard title="Dev-Com" description={description1} img={Dev} link="d"/>
       <ProjectCard className="md:flex-row-reverse"  title="GoodEats" description={description2} img={eatsLogo} />
       
        </div>
  )
}
export default Portfolio