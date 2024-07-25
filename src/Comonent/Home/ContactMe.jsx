import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from '../../../public/animation/done.json';
import contactAnimation from '../../../public/animation/contact.json';

export const ContactMe = () => {

    const [state, handleSubmit] = useForm("xvgpgajd");
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        if (state.succeeded) {
            setShowMessage(true);
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            const timer = setTimeout(() => {
                setShowMessage(false);
            }, 4000);

            return () => clearTimeout(timer)
        }
    }, [state.succeeded])

    return (
        <div className='pt-16 pb-6 flex justify-between items-center'>
            <div className='form'>
                <h1 className='dark:text-zinc-200 text-zinc-800 font-bold text-4xl tracking-wide'><FontAwesomeIcon className='dark:text-title-secodary text-zinc-600' icon={faEnvelope} /> Contact Me</h1>
                <p className='capitalize text-sm md:text-base mt-5 text-zinc-600 dark:text-title-p'>Contact Us For More Information and get notified when i publish something new.</p>
                <form onSubmit={handleSubmit} className='flex flex-col mt-10 gap-5'>
                    <label htmlFor="email" className='dark:text-title-p text-zinc-800 tracking-wider'>
                        Email Address:
                    </label>
                    <input
                        className='outline-none py-3 md:px-5 rounded-md  dark:bg-navbg-dark from-navbg-light to-navbg-ligh border border-zinc-400 dark:border-navbg-dark dark:focus:border-green dark:text-zinc-200'
                        id="email"
                        type="email"
                        name="email"
                        required
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />

                    <label htmlFor='message' className='dark:text-title-p text-zinc-800 tracking-wider'>Message: </label>
                    <textarea
                        className='outline-none py-3 px-5 rounded-md dark:bg-navbg-dark from-navbg-light to-navbg-ligh resize-none border border-zinc-400 dark:border-navbg-dark dark:focus:border-green dark:text-zinc-200'
                        id="message"
                        name="message"
                        required
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting}
                        className={`${state.submitting && 'cursor-no-drop'} bg-zinc-300 py-2 px-4 md:py-3 md:px-9 w-fit mx-auto rounded-md text-zinc-900 dark:bg-navbg-dark dark:text-zinc-200 tracking-wide uppercase button `}>
                        {state.submitting ? 'Submitting...' : 'Submit'}
                    </button>
                    {showMessage && (<div className='message text-zinc-600 dark:text-zinc-200 capitalize mt-2 flex items-center justify-center'>
                        <Lottie className='w-20' animationData={doneAnimation} loop={true} />
                        <p className='-ms-3'>Your message has been sent successfully...</p>
                    </div>)}
                </form>
            </div>
            <div className="animation hidden lg:flex">
                <Lottie  animationData={contactAnimation} loop={true} />
            </div>
        </div>
    )
}
