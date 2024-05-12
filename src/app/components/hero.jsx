import React from 'react'
import Image from 'next/image'
import Imagebg from '../../../public/images/round.png'
import Imagefr from '../../../public/images/main.png'


const Hero = () => {
    return (
        <div className='max-w-[1500px] m-auto py-8 px-5'>
            <div className='flex justify-center items-center gap-10'>
                <div>
                    <h1 className='text-[60px] font-bold'>Experience of<br></br>
                        Digital Transection</h1>
                    <h2 className='text-[60px] font-bold stroke-text bg-transparent text-black'>Blockchain</h2>
                    <p className='text-gray-600 text-lg w-[80%]'>
                        Cryptography, encryption process of transforming information
                        referred to as plaintext using done.</p>
                    <a><button className='bg-[#ffc107] text-black py-3 px-8 rounded-[5px] text-xl mt-5'>Get Started Now</button></a>
                </div>

                <div className='relative'>
                    <Image src={Imagebg} width={650} height={650} alt='back' className='image-anim ' />
                    <Image src={Imagefr} width={500} height={500} alt='front' className='absolute top-[12%] left-[12%]' />
                </div>
            </div>
        </div>
    )
}

export default Hero