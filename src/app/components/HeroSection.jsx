"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className='col-span-7 place-self-center text-center sm:text-left'>
        <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-emerald-500 to-green-600'>Hello, I&apos;m <br/> {" "}</span>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'ijaz Ahmad',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Frontend Developer',
        1000,
        'React.JS / Next.JS Dev.',
        1000,
        // 'We produce food for Chinchillas',
        // 1000
      ]}
      wrapper="span"
      speed={30}
      repeat={Infinity}
    />
        </h1>
        <p className='text-[#ADB7BE]  text-base sm:text-lg mb-6 lg:text-xl '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit 
        </p>
        <div>
          <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-orange-500 via-emerald-500 to-green-600 mr-4 bg-white hover:bg-gradient-to-br hover:from-green-500 hover:via-emerald-500 hover:to-orange-500 text-white'>
          Hire Me
          </button>
          <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-orange-500 via-emerald-500 to-green-600 hover:bg-gradient-to-br hover:from-green-500 hover:via-emerald-500 hover:to-orange-500 text-white mt-3'>
           <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'> Download CV</span>
          </button>
        </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
         <div className=' '>  
          <Image
          src="/svg/myselfnew.png"
          alt='hero image'
          className=' rounded-full '
          width={300}
          height={300}
          />
          </div>
        </div>
        </div>
    </section>
  )
}

export default HeroSection