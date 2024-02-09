import { Header } from '@/components/auth/header'
import { siteMetadata } from '@/data/siteMetaData'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (

    <div className='min-h-full w-full bg-turf bg-center bg-no-repeat bg-cover'>
      <div className="overlay flex lg:flex-row flex-col lg:py-16 lg:px-16 p-0 gap-y-10 lg:justify-between lg:items-start justify-center items-center ">

        <div className="lg:flex flex-col hidden gap-y-3 w-[50%] h-full mt-[7%] lg:mx-9 sm:mx-0">
          <h1 className='xl:text-8xl sm:text-7xl font-bold text-white uppercase tracking-widest'>

            <span className='text-green-500'>
              {siteMetadata.headerTitle.slice(0, 3)}
            </span>

            <span className=''>{siteMetadata.headerTitle.slice(3, siteMetadata.headerTitle.length)}</span>
          </h1>

          <p className='uppercase font-medium text-gray-300 text-xl leading-8 tracking-wide'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium Accusantium</p>
        </div>

        {children}
      </div>
    </div>
  )
}

export default layout