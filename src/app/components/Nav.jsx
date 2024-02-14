import Image from "next/image";
import React from "react";

export default function Nav() {
    return (
        <nav className=" flex flex-row  justify-around items-center bg-[#FFF9FD] h-[90px]">
            <div className=" flex justify-center items-center gap-2">
                <a href="#" className=" flex flex-row justify-center items-center gap-3">
                    <div>
                        <Image
                            src={"/tooth-gum.png"}
                            width={54.1}
                            height={61}
                            alt="Icono diente"
                        />
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <h1 className=" text-[24px] font-semibold">Ondontologia Integral</h1>
                        <h1 className=" ">Salud & Estetica Dental</h1>
                    </div>
                </a>
            </div>
            <ul className=" flex flex-row gap-10">
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Servicios</a>
                </li>
                <li>
                    <a href="#">Nosotros</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
            </ul>
            <a href="#" className="text-[18px] h-[50px] w-[200px] flex justify-center items-center border border-[#00296D] border-solid rounded-[15px] hover:text-white hover:bg-[#00296D]">Saca Tu Turno</a>
        </nav>
    );
}
