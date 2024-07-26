import React from 'react'
import Lottie from "lottie-react";
import developerAnimation from '../../../../public/animation/developer.json';
import hero from '../../../assets/me.png';
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <>
            <div className='flex transform translate-y-5 items-center h-full md:mt-14 pb-8 justify-between '>
                <div className=''>
                    <img className='mb-7 w-20 border border-border rounded-full bg-navbg-light' src={hero} alt="logo" />
                    <h1 className='title dark:text-zinc-200 text-zinc-800 tracking-tight capitalize  leading-snug md:leading-snug text-4xl md:text-5xl mb-5 font-bold'>Software designer, founder, and Public relations.</h1>
                    <p className='title capitalize dark:text-title-p leading-8 text-sm  md:text-base md:leading-8 text-zinc-600 mb-10'>I’m Spencer, A Software Designer And entrepreneur based in Tanta City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.</p>
                    <div className="flex gap-6 items-center">
                        <Link target='_blank' to={'https://www.instagram.com/osama_saif11?igsh=czh5NTQ4c2FnMXY5'}>
                            <svg className='fill-zinc-500 hover:fill-zinc-600 transition-all duration-300 dark:fill-zinc-400 dark:hover:fill-zinc-300 cursor-pointer w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                        </Link>
                        <Link target='_blank' to={'https://www.linkedin.com/in/osama-saif-29932b295/details/projects/'}>
                            <svg className='fill-zinc-500 hover:fill-zinc-600 transition-all duration-300 dark:fill-zinc-400 dark:hover:fill-zinc-300 cursor-pointer w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                        </Link>
                        <Link to={'https://x.com/OsamaS16402'} target='_blank'>
                            <svg className='fill-zinc-500 hover:fill-zinc-600 transition-all duration-300 dark:fill-zinc-400 dark:hover:fill-zinc-300 cursor-pointer w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                        </Link>
                        <Link target='_blank' to={'https://www.facebook.com/profile.php?id=100067178573868'}>
                            <svg className='fill-zinc-500 hover:fill-zinc-600 transition-all duration-300 dark:fill-zinc-400 dark:hover:fill-zinc-300 cursor-pointer w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
                        </Link>
                    </div>
                </div>
                <div className='hidden lg:flex transform translate-x-20'>
                    <Lottie className='max-w-full lg:w-200 xl:w-400' animationData={developerAnimation} loop={true} />
                </div>
            </div>
        </>
    )
}
