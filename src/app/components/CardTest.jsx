"use client"
import Image from "next/image"
import Star from "../../../public/Star.png"
import { useState } from "react"
function StarRate () {

    return(
        <div>
            <Image src={"/Star.png"} width={20} height={10} alt="estrella"/>
        </div>
    
    )
}
const renderizarComponentes = (cantidad) => {
    const componentes = [];
    for (let i = 0; i < cantidad; i++) {
      componentes.push(<StarRate key={i} />);
    }
    return componentes;
  };

export default function CardTest({autor, starN}) {
 const cantidadDeseada = starN  
 const componentesRenderizados = renderizarComponentes(cantidadDeseada);
  return (
    <div className='w-[450px] shadow-lg  p-7 flex flex-col gap-5'>
        <div className=" flex justify-between items-center">
            <span className=" text-[24px] font-semibold">{autor}</span>
            <div id='stars' className=" flex">
               {componentesRenderizados}
            </div>
        </div>
        <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit conubia, massa facilisi lectus ullamcorper ridiculus potenti iaculis nibh, interdum faucibus ad diam vivamus vehicula fames.
        </p>
        
    </div>
  )
}
