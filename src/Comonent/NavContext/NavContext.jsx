import React, { createContext, useState } from 'react';

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
    const [nav, setNav] = useState(false);

    function handelList() {
        setNav(!nav);
    }

    function closeNav() {
        setNav(false);
    }

    return (
        <NavContext.Provider value={{ nav, handelList, closeNav }}>
            {children}
        </NavContext.Provider>
    );
};
