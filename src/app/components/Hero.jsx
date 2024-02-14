import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <main className='bg-[#FFF9FD] px-20 flex flex-row py-12'>
        <div className=' w-1/2 flex flex-col justify-center pl-40 '>
            <h2 className='text-[16px] text-[#2977D5]'>En Cordoba Capital</h2>
            <div>
                <h2 className=' text-[50px] text-[#00296D] font-semibold'>
                Una excelente experiencia <span className=' text-[#2977D5]'>Odontológica</span>
                </h2>
            </div>
            <p className=' w-[70%] font-light text-[#252525] text-[12px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit molestie, rhoncus luctus arcu ut eros augue. Eu commodo laoreet parturient quam purus magna pretium luctus.</p>
            <div className=' w-full flex flex-row items-center gap-10 mt-5'>
                <a href="" className='text-white w-[200px] h-[50px] bg-[#44C6E9] flex justify-center items-center rounded-2xl font-medium border border-[#44C6E9] border-solid hover:bg-white hover:text-[#44C6E9]'>Saca Tu Turno</a>
                <a href="" className=' underline'>Nuestros Servicios</a>
            </div>
        </div>
        <div className='flex items-center justify-center w-1/3'>
            <div className='bg-gradient-to-b from-[#D4E4F4] via-[#44C6E9] to-[#00296D]  w-[500px] h-[500px] rounded-full'></div>
            <Image src={"/image_1.png"} width={350} height={500} className=' absolute' alt='imagen de paciente'/>
        </div>
    </main>
  )
}
