import React from 'react'
import CardServ from './CardServ'
import Image from 'next/image'

export default function Services() {
    return (
        <div className=' flex flex-col p-24 bg-[#FFF9FD] items-center '>
            <div className=' mb-5 z-10 flex justify-center flex-col items-center'>
                <span className=' text-[#2977D5]'>Especialidades</span>
                <h3 className=' text-[#00296D] text-[50px] font-bold'>Nuestros Servicios</h3>
            </div>
            <div className='w-[90%] flex items-center justify-center  flex-row flex-wrap  gap-20 z-10 '>
                <CardServ tipo="Implantes" img="/tooth-gum.png" descrip="Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos."/>
                <CardServ tipo="Ortodoncia" img="/tooth2.png" descrip="La ortodoncia con brackets de cerámica ofrece una estética más cuidada, en comparación a la ortodoncia metálica. Los resultados en cuanto a alineación dentaria son similares a la alternativa mencionada. Opción ideal para quienes buscan cuidar la estética y el bolsillo."/>
                <CardServ tipo="Implantes" img="/cavity.png" descrip="Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos."/>
                <CardServ tipo="Implantes" img="/golden-crown.png" descrip="Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos."/>
                <CardServ tipo="Implantes" img="/tooth-shine.png" descrip="Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos."/>
                <CardServ tipo="Implantes" img="/crown-alt.png" descrip="Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos."/>
            </div>
            <div className='absolute w-[90%] flex items-center justify-center'>
                <Image src={"/tooth.png"} height={800} width={700} alt='fondo diente'/>
            </div>
        </div>
    )
}
