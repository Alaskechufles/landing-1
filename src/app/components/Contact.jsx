import Image from 'next/image'
import React from 'react'

export default function Contact() {
  return (
    <div className=' bg-[#D4E4F4] flex  justify-around h-[150px] items-center'>
        <div className=' flex gap-3 text-[#00296D]'>
            <div>
                <Image src={"/VectorUbicacion.png"} width={42.5}  height={50} alt='icono de ubicación'/>
            </div>
            <div>
                <span  className=' text-[16px] font-semibold'>Dirección</span>
                <p>Av. Color 1234</p>
                <p>Cordoba, Cordoba Capital</p>
            </div>
        </div>
        <div className=' flex gap-3 text-[#00296D]'>
            <div>
                <Image src={"/VectorCarta.png"} width={75.54} height={50} alt='icono de carta'/>
            </div>
            <div>
                <span className=' text-[16px] font-semibold'>Email</span>
                <p>info@tudentista.com.ar</p>
                <p>info@tudentista.com.ar</p>
            </div>
        </div>
        <div className=' flex gap-3 text-[#00296D]'>
            <div>
                <Image src={"/VectorTelefono.png"} width={50} height={50} alt='icono de telefono'/>
            </div>
            <div>
                <span className=' text-[16px] font-semibold'>Telefonos</span>
                <p>351 7608XXX</p>
                <p>3541 7825XXX</p>
            </div>
        </div>
    </div>
  )
}
