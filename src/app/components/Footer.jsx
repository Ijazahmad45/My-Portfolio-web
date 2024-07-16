import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
<footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent  text-white'>
    <div className='container p-8 flex justify-between items-center'>
        <span>
        <Image
            src="/svg/ijazlogo.png"
            alt="hero image"
            className="rounded-[20px]"
            width={60}
            height={60}
          />
        </span>
        <p className='text-slate-600'>All Rights Reserved.</p>
    </div>
</footer>  )
}

export default Footer