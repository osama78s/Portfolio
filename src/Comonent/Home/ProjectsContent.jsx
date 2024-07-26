import React, { useState } from 'react'
// import ProjectsImage from './ProjectsImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ProjectsContent() {
        const products = [
            { title: 'Project For Dashboard', catergory: ['css'],  des: 'Create logos and colors that express my brand, Design business cards, stationery, and marketing tools.', src: 'src/assets/laptob 6..jpg' ,path: 'https://osama78s.github.io/Dashboard-/' },
            { title: 'Project For Future', catergory: ['react', 'dark'],  des: 'Create logos and colors that express my brand, Design business cards, stationery, and marketing tools.', src: 'src/assets/laptob 7.jpg' ,path: 'https://osama78s.github.io/React-Future/' },
            { title: 'TodoList', catergory: ['react'], des: 'Create logos and colors that express my brand, Design business cards, stationery, and marketing tools.', src: 'src/assets/image 10.jpg', path: 'https://osama78s.github.io/React-TodoList/' },
            { title: 'Quran App', catergory: ['javascript'],  des: 'Create logos and colors that express my brand, Design business cards, stationery, and marketing tools.', src: 'src/assets/laptob 8.jpg', path: 'https://osama78s.github.io/Quran-App./' },
            { title: 'Personal Website', catergory: ['javascript', 'dark'], des: 'Create logos and colors that express my brand, Design business cards, stationery, and marketing tools.', src: 'src/assets/laptob 2.jpg', path: ' https://osama78s.github.io/Personal-Website/' },
            { title: 'A Special Project For A Designer', catergory: ['javascript', 'dark'], des: 'Create logos and colors that express my brand, Design business cards, stationery, and marketing tools.', src: 'src/assets/project-1.jpg', path: 'https://osama78s.github.io/Mohammed_Ahmed/' },
            { title: 'Project For Podcasts', catergory: ['css'],  des: 'Create logos and colors that express my brand, Design business cards, stationery, and marketing tools.', src: 'src/assets/laptob 3.jpg' ,path: 'https://osama78s.github.io/Art/' },
            { title: 'A Group Of Teachers', catergory: ['css'],  des: 'Create logos and colors that express my brand, Design business cards, stationery, and marketing tools.', src: 'src/assets/laptob 1.jpg' ,path: 'https://osama78s.github.io/MO2lem/' },
            { title: 'Project For Art', catergory: ['css'],  des: 'Create logos and colors that express my brand, Design business cards, stationery, and marketing tools.', src: 'src/assets/laptob 4.jpg' ,path: 'https://osama78s.github.io/Gallary/' },
            { title: 'Project For Kaspar', catergory: ['css'],  des: 'Create logos and colors that express my brand, Design business cards, stationery, and marketing tools.', src: 'src/assets/laptob 5.jpg' ,path: 'https://osama78s.github.io/Kasper/' },
            { title: 'TodoList', catergory: ['javascript'], des: 'Create logos and colors that express my brand, Design business cards, stationery, and marketing tools.', src: 'src/assets/laptob 9.jpg', path: 'https://osama78s.github.io/Todolist_Add_Tasks/' }
        ]

    const [arr, setArr] = useState(products);
    const [changeActive, setChangeActive] = useState('all');


    return (
        <>
            <div className='projet-box  md:flex items-start gap-10 pt-12 pb-4'>
                <ul className="flex justify-center flex-wrap md:flex-nowrap md:flex-col gap-5 text-center mb-5">
                    <li onClick={() => {
                        setChangeActive('all');

                        setArr(products)
                    }}>
                        <span className={`${changeActive === 'all' ? 'active border dark:border-green' : ''}  bg-buttons-dark  text-zinc-200 py-2 px-4 rounded-md cursor-pointer`}>All Projects</span>
                    </li>
                    <li onClick={() => {
                        setChangeActive('css');

                        const newArr = products.filter(item => item.catergory.includes('css'));

                        setArr(newArr)

                    }}>
                        <span className={`${changeActive === 'css' ? 'active border dark:border-green' : ''}  bg-buttons-dark  text-zinc-200 py-2 px-4 rounded-md cursor-pointer`}>Html & Css</span>
                    </li>
                    <li onClick={() => {

                        setChangeActive('js');

                        const newArr = products.filter(item => item.catergory.includes('javascript'));

                        setArr(newArr);
                    }}>
                        <span className={`${changeActive === 'js' ? 'active border dark:border-green' : ''}  bg-buttons-dark  text-zinc-200  py-2 px-4 rounded-md cursor-pointer`}>Javascript</span>
                    </li>
                    <li onClick={() => {
                        setChangeActive('react');

                        const newArr = products.filter(item => item.catergory.includes('react'));

                        setArr(newArr)

                    }}>
                        <span className={`${changeActive === 'react' ? 'active border dark:border-green' : ''}  bg-buttons-dark text-zinc-200 py-2 px-4 rounded-md cursor-pointer`}>React & Tailwind</span>
                    </li>
                    <li onClick={() => {
                        setChangeActive('dark');

                        const newArr = products.filter(item => item.catergory.includes('dark'));

                        setArr(newArr)

                    }}>
                        <span className={`${changeActive === 'dark' ? 'active' : ''}  bg-buttons-dark text-zinc-200 py-2 px-4 rounded-md cursor-pointer`}>Dark & Light</span>
                    </li>
                </ul>
                <div className="flex flex-wrap gap-x-3 gap-y-6 justify-center">
                    {arr.map((product) => {
                        return (
                            <motion.div key={product.path} className="card rounded-tl-md rounded-tr-md border dark:border-bor cursor-pointer border-x-navText-dark dark:hover:border-green border-navText-dark hover:border-navText-dark transition-all duration-300"
                            initial={{transform: 'scale(0)'}}
                            animate={{transform: 'scale(1)'}}
                            transition={{damping: 20, type: 'spring', stiffness: 80}}
                            >
                                <img  src={product.src} className='image-width w-80 rounded-tl-md rounded-tr-md'/>
                                <div className="content w-80 pt-2 p-3 bg-gradient-to-t dark:from-linear-dark1 dark:to-linear-dark1 from-navbg-light to-navbg-light">
                                    <h1 className='mt-3  dark:text-zinc-200 text-zinc-800 text-xl'>{product.title}</h1>
                                    <p className='mt-3 tracking-wide dark:text-title-p leading-6 text-sm text-zinc-600'>{product.des}</p>
                                    <div className="flex items-center justify-between mt-5 dark:text-title-p text-zinc-600">
                                        <div className="flex gap-4 items-center">
                                            <Link to={product.path} target='blanck'><FontAwesomeIcon icon={faLink} /></Link>
                                        </div>
                                        <Link to={product.path} target='blanck' className='flex items-center gap-3 text-green'>More <FontAwesomeIcon className='link-animation mt-1' icon={faArrowRight} /></Link>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
            <div className="divider"></div>
        </>
    );
}

export default ProjectsContent;

