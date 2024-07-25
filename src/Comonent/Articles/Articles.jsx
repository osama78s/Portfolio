import React from 'react'

function Article() {
  return (
    <>
      <div className='mt-8 md:mt-28 md:min-w-120'>
        <h1 className='capitalize text-3xl md:text-5xl  font-bold dark:text-zinc-200 text-zinc-800 md:leading-snug leading-snug'>Writing on software design, and Marketing, and public relations</h1>
        <p className='mt-5 dark:text-title-p  text-sm md:text-base text-zinc-600 tracking-wide leading-8 md:leading-8 md:tracking-wide'>All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.</p>

        <div className='md:mt-12 mt-8 lg:mt-24 mb-8 md:mb-16 md:w-3/4'>

          <div className="md:flex border-effect gap-20">
            <span className='text-green tracking-wide md:min-w-150 mb-6 block md:mb-0 md:inline-block'>September 5,2023</span>
            <div className="flex flex-col gap-10">

              <div>
                <h1 className='dark:text-zinc-200 text-black tracking-wide'>Introducing Animaginary: High Performance Web Animations</h1>
                <p className='mt-2 dark:text-title-p text-zinc-600 text-sm md:text-base leading-7'>When you're building a website for a company as ambitious as planetaria, you need to make an impression. i wanted people to visit our website and see animations that looked more relistic than reality itself</p>
              </div>

              <div>
                <h1 className='dark:text-zinc-200 text-black tracking-wide'>Marketing: The Art of Reaching Your Audience</h1>
                <p className='mt-2 dark:text-title-p text-zinc-600 text-sm md:text-base leading-7'>Marketing is the process of planning and executing activities aimed at delivering products and services to customers in a way that satisfies their needs and desires. It encompasses a wide range of activities, from market research and customer analysis to promotion and sales.</p>
              </div>

              <div>
                <h1 className='dark:text-zinc-200 text-black tracking-wide'>Public Relations and Communication: Building Bridges of Trust and Success
                </h1>
                <p className='mt-2 dark:text-title-p text-zinc-600 text-sm md:text-base leading-7'>Public relations (PR) and communication are crucial elements that contribute significantly to the success of modern institutions and companies. They help in building a positive reputation, enhancing relationships with the audience, and achieving business goals effectively. As a graduate in public relations, I fully understand the importance of these elements and how they can greatly impact the success of organizations.</p>
              </div>


            </div>
          </div>

        </div>
      </div>
      <div className='divider' />
    </>
  )
}

export default Article;