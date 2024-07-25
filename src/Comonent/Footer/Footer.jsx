import React, { useEffect } from 'react'

function Footer() {

    useEffect(() => {
        const currentDate = new Date().getFullYear();
        document.querySelector('.date').innerHTML = currentDate;
    }, []);

    return (
        <div className='dark:text-title-secodary pt-5 pb-3 text-center text-stone-950 capitalize tracking-wide text-sm'>© <span className='date'></span> Osama saif all rights reversed</div>
    )
}


export default Footer;