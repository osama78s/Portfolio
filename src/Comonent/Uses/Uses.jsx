import React from 'react'

function Uses() {
  return (
    <>
      <div className='mt-8 md:mt-28 md:min-w-150'>
        <h1 className='capitalize text-3xl md:text-5xl  font-bold dark:text-zinc-200 text-zinc-800 leading-snug md:leading-snug'>Software i use, gadgets i love, and other things i recommend.</h1>
        <p className='mt-5 dark:text-title-p  text-sm md:text-base text-zinc-600 tracking-wide leading-7 md:leading-8'>I get asked a lot about the things I used to improve my skills, and they are among the programming basics that front-end designers must have and must be mastered for development.</p>
        <div className='mt-12 md:mt-20 mb-8 md:mb-16 md:w-3/4'>

          <div className="md:flex border-effect">
            <span className='text-green tracking-wide md:min-w-150 mb-6 block md:mb-0 md:inline-block'>Basics</span>
            <div className="flex flex-col gap-10">

              <div>
                <h1 className='dark:text-zinc-200 text-black tracking-wide'>HTML :</h1>
                <p className='mt-2 dark:text-title-p text-zinc-600 text-sm md:text-base leading-7'> It is the fundamental structure of any web page. You need to master how to write the structure of the page using the correct elements.</p>
              </div>

              <div>
                <h1 className='dark:text-zinc-200 text-black tracking-wide'>CSS :</h1>
                <p className='mt-2 dark:text-title-p text-zinc-600 text-sm md:text-base leading-7'>  It is used to style and design web pages. You should be familiar with CSS properties, grid layouts, and responsive design.</p>
              </div>

              <div>
                <h1 className='dark:text-zinc-200 text-black tracking-wide'>JavaScript :</h1>
                <p className='mt-2 dark:text-title-p text-zinc-600 text-sm md:text-base leading-7'> Understanding how to use JavaScript to add interactivity to web pages. You need to have knowledge of basics like variables, functions, and events.</p>
              </div>


            </div>
          </div>

          <div className="md:flex border-effect mt-24">
            <span className='text-green tracking-wide md:min-w-150 mb-6 block md:mb-0 md:inline-block'>Frameworks</span>
            <div className="flex flex-col gap-10">

              <div>
                <h1 className='dark:text-zinc-200 text-black tracking-wide'>REACT :</h1>
                <p className='mt-2 dark:text-title-p text-zinc-600 text-sm md:text-base leading-7'> A popular open-source JavaScript library for building user interfaces, particularly single-page applications where you need a fast and interactive experience. Developed and maintained by Facebook, React allows developers to create reusable UI components and manage the state of applications efficiently.</p>
              </div>

              <div>
                <h1 className='dark:text-zinc-200 text-black tracking-wide'>TAILWIND :</h1>
                <p className='mt-2 dark:text-title-p text-zinc-600 text-sm md:text-base leading-7'> Is a utility-first CSS framework that provides a set of pre-designed classes to build custom and responsive user interfaces quickly. Instead of writing custom styles from scratch, you use utility classes directly in your HTML to apply styles.</p>
              </div>

              <div>
                <h1 className='dark:text-zinc-200 text-black tracking-wide'>BOOTSTRAP :</h1>
                <p className='mt-2 dark:text-title-p text-zinc-600 text-sm md:text-base leading-7'>  Is a popular open-source CSS framework designed to simplify the development of responsive and mobile-first web applications. Created by Twitter engineers Mark Otto and Jacob Thornton, Bootstrap provides a collection of pre-designed components, templates, and JavaScript</p>
              </div>


            </div>
          </div>


          <div className="md:flex border-effect mt-24">
            <span className='text-green tracking-wide md:min-w-150 mb-6 block md:mb-0 md:inline-block'>Version Control</span>
            <div className="flex flex-col gap-10">

              <div>
                <h1 className='dark:text-zinc-200 text-black tracking-wide'>GIT :</h1>
                <p className='mt-2 dark:text-title-p text-zinc-600 text-sm md:text-base leading-7'>Is a distributed version control system designed to manage and track changes in source code during software development. Created by Linus Torvalds in 2005, Git allows multiple developers to work on the same project simultaneously, while keeping track of every change made to the codebase. It is widely used for version control in software projects due to its flexibility, efficiency, and robust feature set.

                </p>
              </div>

              <div>
                <h1 className='dark:text-zinc-200 text-black tracking-wide'>GITHUB :</h1>
                <p className='mt-2 dark:text-title-p text-zinc-600 text-sm md:text-base leading-7'> Is a web-based platform for version control and collaboration that uses Git as its core technology. It allows developers to host, manage, and review code projects, and collaborate with others through a range of tools and features. GitHub is widely used in the software development community for version control, project management, and code sharing.

                </p>
              </div>


            </div>
          </div>
          <div className="md:flex border-effect mt-24">
            <span className='text-green tracking-wide md:min-w-150 mb-6 block md:mb-0 md:inline-block'>Additions</span>
            <div className="flex flex-col gap-10">

              <div>
                <h1 className='dark:text-zinc-200 text-black tracking-wide'>WEBPACK :</h1>
                <p className='mt-2 dark:text-title-p text-zinc-600 text-sm md:text-base leading-7'>Used for bundling and optimizing source code.

                </p>
              </div>

              <div>
                <h1 className='dark:text-zinc-200 text-black tracking-wide'>UI/UX :</h1>
                <p className='mt-2 dark:text-title-p text-zinc-600 text-sm md:text-base leading-7'> Understanding the principles of user experience (UX) design and user interface (UI) design.

                </p>
              </div>

              <div>
                <h1 className='dark:text-zinc-200 text-black tracking-wide'>TYPESCRIPT :</h1>
                <p className='mt-2 dark:text-title-p text-zinc-600 text-sm md:text-base leading-7'> TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

                </p>
              </div>

              <div>
                <h1 className='dark:text-zinc-200 text-black tracking-wide'>CMD :</h1>
                <p className='mt-2 dark:text-title-p text-zinc-600 text-sm md:text-base leading-7'>  Is a command-line interpreter application available in most Windows operating systems. It provides a text-based interface for users to execute commands

                </p>
              </div>


            </div>
          </div>

        </div>
      </div>
      <div className='divider' />
    </>
  )
}

export default Uses;