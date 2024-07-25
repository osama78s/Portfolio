import React from 'react';
import Lottie from "lottie-react";
import aboutAnimation from '../../../public/animation/about.json';


export const About = () => {
  return (
    <>
      <div className='flex justify-between items-center mb-16'>
        <div className='mt-8 md:mt-28 lg:basis-4/5'>
          <h1 className='capitalize text-3xl md:text-5xl  font-bold dark:text-zinc-200 text-zinc-800 md:leading-snug leading-snug'>I’m Spencer Sharp. I live in cairo, where I design the future.</h1>
          <p className='mt-5 dark:text-title-p text-zinc-600 tracking-wide leading-7'>I am [Osama Saif], a passionate and experienced Front-End Developer. I specialize in designing and developing interactive and engaging user interfaces using HTML, CSS, and JavaScript, along with modern frameworks like React and Vue.js. I focus on delivering a seamless and exceptional user experience by paying attention to detail and adhering to best practices in design and responsiveness.</p>
          <p className='mt-5 dark:text-title-p text-zinc-600 tracking-wide leading-7'>Throughout my career, I have worked on a diverse range of projects, from small websites to large, complex applications, which has helped me build strong problem-solving skills and effective collaboration with design and development teams. I am always eager to learn new technologies and tools and stay updated with the latest trends in the web development world to ensure delivering innovative and high-quality solutions.</p>
          <p className='mt-5 dark:text-title-p text-zinc-600 tracking-wide leading-7'>If you are looking for a Front-End Developer who can turn ideas into tangible results and provide users with a comfortable and enjoyable experience, I am here to help.</p>
        </div>
        <Lottie className=' max-w-full hidden lg:flex' animationData={aboutAnimation} loop={true} />
      </div>
      <div className='divider' />
    </>
  )
}
