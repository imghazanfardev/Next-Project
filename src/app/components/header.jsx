import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/images/logo2.png'

const Header = () => {
  return (
    <div className='max-w-[1500px] m-auto py-8 px-5'>
      <div className='flex justify-between items-center '>
        <div>
          <a href='#'><Image src={Logo} width={180} height={180} alt='Logo' /></a>
        </div>

        <ul className='flex gap-8 items-center text-white text-xl cursor-pointer'>
          <li className='underline-anim'>Home</li>
          <li className='underline-anim'>About</li>
          <li className='underline-anim'>Services</li>
          <li className='underline-anim'>Pages</li>
          <li className='underline-anim'>Blog</li>
          <li className='underline-anim'>Contact</li>
        </ul>

        <a><button className='bg-[#ffc107] text-black py-2 px-8 rounded-[5px] text-xl'>Register</button></a>

      </div>
    </div>
  )
}

export default Header