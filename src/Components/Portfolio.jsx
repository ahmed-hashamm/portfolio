import React from 'react'
import { ProjectCard } from './Projects/ProjectCard'
import { goodeats, gym, shopsy } from '../assets'



const Portfolio = () => {
  const description1="At ShopIn, we believe that style is more than just clothing. Seprate sections for men and women.Effectively displaying discounts and mega offers to catch the customer's eye."
  const description2=" A local fast food outlet ,menu section to display the delicious food items along with the top rated menu items. A beautifull cart to add items and displaying the total bill."
  const description3="Landing Page for Gainzz, a fitness app that offers personalized workout plans to users.A section to display the training staff and a contact form or booking."
  return (
    <div  className=' h-max  justify-center items-center mx-6 p-8 flex-col gap-20 border-t border-zinc-600'>
      <h1 className='text-[4vw] text-zinc-100 carter-one-regular font-semibold text-center mb-28'>Projects</h1>
       <ProjectCard title="ShopIn" description={description1} img={shopsy}/>
       <ProjectCard className="md:flex-row-reverse"  title="GoodEats" description={description2} img={goodeats} />
       <ProjectCard title="Gainz" description={description3} img={gym}/>
        </div>
  )
}

export default Portfolio