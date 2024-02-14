import Image from 'next/image'
import React from 'react'

export default function CardServ({tipo, img, descrip}) {
  return (
    <div className='w-[300px] bg-[#fff9fd83] p-6 shadow-lg rounded-[10px]'>
        <div >
            <Image src={img} width={50} height={50} alt='icono de servicio' className='rounded-[20px] overflow-hidden'/>
        </div>
        <h3 className=' text-[#2977D5] font-bold my-2'>
            {tipo}
        </h3>
        <p className=' text-[10px]'>{descrip}</p>
        <a href="#" className='  flex mt-[10px] items-center text-[#44C6E9]'>ver mas <Image src={"/Vector-arrow.png"} width={10} height={10} alt='flecha' /></a>
    </div>
  )
}
