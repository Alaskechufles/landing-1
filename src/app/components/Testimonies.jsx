import React from 'react'
import CardTest from './CardTest'

export default function Testimonies() {
  return (
    <div className=' w-full bg-[#FFF9FD] flex flex-col items-center justify-center p-5'>
        <div className=' mb-5 z-10 w-full flex items-center justify-center flex-col'>
                <span className=' text-[#2977D5]'>Testimonios</span>
                <h3 className=' text-[#00296D] text-[50px] font-bold'>Lo que opinan nuestros Pacientes</h3>
        </div>
        <div className=' flex gap-5'>
            <CardTest autor="Matias Gomez" starN={4}/>
            <CardTest autor="Maria Paz" starN={3}/>
            <CardTest autor="Silvia Rios" starN={5}/>
        </div>
    </div>
  )
}
