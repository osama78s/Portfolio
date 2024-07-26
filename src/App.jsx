import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Comonent/Home/Home';
import Header from './Comonent/Home/Header/Header';
import { About } from './Comonent/About/About';
import Uses from './Comonent/Uses/Uses';
import Projects from './Comonent/Projects/Projects';
import Article from './Comonent/Articles/Articles';
import { NavMedia } from './Comonent/NavMedia/NavMedia';
import { NavProvider } from './Comonent/NavContext/NavContext';
import Footer from './Comonent/Footer/Footer';

function App() {
  const saveTheme = localStorage.getItem('theme');
  const initialTheme = saveTheme ? saveTheme === 'true' : true;
  const [theme, setTheme] = useState(initialTheme);
  const [arrowLink, setArrowLink] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY >= 300 ? setArrowLink(true) : setArrowLink(false)
    })
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme.toString());
    if (theme) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = 'black';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = 'white';
    }
  }, [theme]);

  return (
    <NavProvider>
      <div className={`${theme ? 'dark:bg-dark' : 'bg-light'} min-h-screen container rounded-md border dark:border-bor overflow-hidden`}>
        <Header theme={theme} setTheme={setTheme} />
        <NavMedia />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Articles' element={<Article />} />
          <Route path='/Uses' element={<Uses />} />
        </Routes>
        <span href="#" className={`${arrowLink ? 'opacity-100' : 'opacity-0'} transition-all duration-300`}>
          <svg onClick={() => { scrollTo({ top: 0, behavior: 'smooth' }) }}
            className='fixed bottom-8 h-10 text-white bg-green w-10 rounded-full cursor-pointer right-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path>
          </svg>
        </span>
        <Footer/>
      </div>
    </NavProvider>
  );
}

export default App;
