import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
  return (
    <div className=' bg-[#FFF9FD] w-full flex flex-row p-20 items-center justify-center gap-20'>
      <div className=' flex justify-center items-center'>
        <Image src={"/Group 171.png"} width={700} height={500} alt='esferas' className=' absolute right-0 '/>
      </div>
      <div className=' w-1/2 z-10'>
        <Image src={"/dentista.png"} width={700} height={900} alt='imagen dentista'/>
      </div>
      <div className=' w-1/3 z-10'>
        <span className='text-[#2977D5]'>Sobre mi</span>
        <h3 className=' text-[#00296D] font-bold text-[50px]'>Dra. Patricia Nieves Kiriaco</h3>
        <ul className=''>
          <li className=' list-disc'>Médica Cirujano, graduada en la Universidad Nacional de Córdoba, Argentina.</li>
          <li className=' list-disc'>Odontóloga, graduada en la Universidad de París, Francia</li>
          <li className=' list-disc'>Docente de la Universidad Nacional de Córdoba desde el año 1975</li>
          <li className=' list-disc'>Miembro de las siguientes Academias:</li>
        </ul>
        <ul className='ml-5'>
          <li className=' list-disc'>A.L.A.O: Academia Latinoamericana de Oseointegración.</li>
          <li className=' list-disc'>A.I.I.O: Academia Internacional de Implantes y Oseointegración . Miembro Fundador</li>
          <li className=' list-disc'>A.V.O.I.O: Academia Venezolana de Oseointegración e Implantologìa Oral. Miembro Honorario.</li>
          <li className=' list-disc'>Pierre Fauchard Academy: Academia de Honor de Odontologìa de E.E.U.U.</li>
          <li className=' list-disc'>A.I.I.P: Academia Internacional de Implantología y Periodoncia – Barcelona. Presidente Internacional.</li>
        </ul>
      </div>
    </div>
  )
}
