import React, { useEffect, useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NavContext } from '../../NavContext/NavContext';

function Header({ theme, setTheme }) {
    const location = useLocation();
    const initialShow = localStorage.getItem('show') === 'true';
    const [show, setShow] = useState(initialShow);
    const { handelList } = useContext(NavContext);

    useEffect(() => {
       location.pathname === '/' ? setShow(false) : null ;
    }, [location.pathname]);

    useEffect(() => {
        localStorage.setItem('show', show);
    }, [show]);

    const links = [
        { id: 1, name: 'About', href: '/About' },
        { id: 2, name: 'Articles', href: '/Articles' },
        { id: 4, name: 'Uses', href: '/Uses' }
    ];

    function handelTheme() { setTheme(!theme) }
    function showImage() { setShow(true) }

    return (
        <div className='py-5 flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <div className='md:hidden cursor-pointer'>
                    <FontAwesomeIcon className='text-xl dark:text-zinc-200 dark:bg-navbg-dark rounded-full py-2 px-4 bg-navbg-light dark:hover:text-stone-300 text-icon-hover' icon={faList} onClick={handelList} />
                </div>
                <NavLink to={'/'} className={`${show ? 'hidden md:flex opacity-100' : 'hidden'} transition-all duration-200`}>
                    <img className='w-8 md:w-10 border-border border-2 rounded-full cursor-pointer' src="src/assets/me.png" alt="logo" />
                </NavLink>
            </div>
            <ul className='nav md:flex gap-10 items-center hidden dark:bg-navbg-dark bg-navbg-light rounded-full shadow-shadwo p-3 px-10'>
                {links.map((link) => (
                    <li key={link.id}>
                        <NavLink
                            to={link.href}
                            onClick={showImage}
                            className={({ isActive }) =>
                                `dark:text-navText-dark text-navText-light dark:hover:text-green hover:text-green transition-all duration-300 font-medium ${isActive ? 'active' : ''}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <FontAwesomeIcon className='cursor-pointer text-xl transition-all duration-700 dark:bg-navbg-dark bg-navbg-light text-icon-light dark:text-green rounded-full py-2 px-4 hover:text-icon-hover dark:hover:text-stone-300 border dark:border-bor' icon={theme ? faMoon : faSun} onClick={handelTheme} />
        </div>
    );
}

export default Header;
