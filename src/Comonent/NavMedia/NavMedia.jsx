import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { NavContext } from '../NavContext/NavContext';

export const NavMedia = () => {
    const { nav, handelList, closeNav } = useContext(NavContext);

    const links = [
        { id: 1, name: 'About', href: '/About' },
        { id: 2, name: 'Articles', href: '/Articles' },
        // { id: 3, name: 'Projects', href: '/Projects' },
        { id: 4, name: 'Uses', href: '/Uses' }
    ];

    return (
        <div className={`${nav ? 'navTrue' : 'hidden'} navMedia md:hidden z-10`}>
            <ul className='dark:bg-navbg-dark bg-navbg-light shadow-shadwo w-3/4 p-5 pb-2 h-fit absolute left-1/2 top-28 transform -translate-x-1/2 rounded-xl'>
                <ul className='flex items-center justify-between pb-5'>
                    <li className='dark:text-title-a font-semibold text-zinc-700'>Navigation</li>
                    <FontAwesomeIcon icon={faX} className='fa-x cursor-pointer text-neutral-500 hover:text-navText-light dark:text-title-a transition-all duration-300 ' onClick={handelList} />
                </ul>
                <li key={'name'} className='li'><NavLink className={({ isActive }) =>
                    ` dark:text-title-a text-zinc-700 dark:hover:text-green hover:text-green transition-all duration-300 font-medium mt-3 pb-1 block
                    ${isActive ? 'active' : ''}`
                }  to={'/'} onClick={closeNav}>Home</NavLink></li>
                {links.map((link) => (
                <li key={link.id}  className='li'><NavLink className={({ isActive }) =>
                    ` dark:text-title-a text-zinc-700 dark:hover:text-green hover:text-green transition-all duration-300 font-medium mt-3 pb-1 block
                    ${isActive ? 'active' : ''}`
                } to={link.href} onClick={closeNav}>{link.name}</NavLink></li>
                ))}
            </ul>
        </div>
    );
}
