import React from 'react'
import about_img_a from '../../img/Mario and Adrian A.jpg'
import about_img_b from '../../img/Mario and Adrian b.jpg'
import './About.css'

const About = () => {
  return (
    <section id='about' className='about-section py-24 px-6 md:px-12 bg-white overflow-hidden'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16'>
        
        <div className='flex-1'>
          <h1 className='mb-1'>Little Lemon</h1>
          <h2 className='text-secondary mb-8'>Chicago</h2>
          <p className='text-lg font-karla text-neutral-600 leading-relaxed mb-6'>
            Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. 
            The chefs, Mario and Adrian, bring their heritage from the shores of Italy and Greece directly to the heart of Chicago.
          </p>
          <p className='text-lg font-karla text-neutral-600 leading-relaxed'>
            Every dish is prepared with the freshest local ingredients, ensuring an authentic experience that celebrates the 
            vibrancy and warmth of Mediterranean culture.
          </p>
        </div>

        <div className='flex-1 relative h-[450px] w-full max-w-md md:max-w-none'>
          <div className='about-img-container img-a'>
            <img src={about_img_a} alt="Mario and Adrian cooking" />
          </div>
          <div className='about-img-container img-b shadow-xl'>
            <img src={about_img_b} alt="Mario and Adrian in the kitchen" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About