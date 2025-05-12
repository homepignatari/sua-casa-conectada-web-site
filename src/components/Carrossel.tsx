import React from 'react'
import slider from '../../public/Slider.svg'
import Image from 'next/image'
import Link from 'next/link';

export const Carrossel = () => {
    return (
        <div className="relative w-full h-[500px]">

            <div className='relative z-10 flex flex-col items-center justify-center h-full  '>
                <h1 className='text-5xl font-semibold font-sans text-center text-[#34BEED]'>Preparamos sua casa para o futuro,</h1>
                <h1 className='text-5xl font-semibold p-8 font-sans text-center text-[#34BEED]'>e o futuro é agora!</h1>
                <div className='flex flex-wrap gap-4 justify-center px-4 sm:px-0'>
                    <button className="btn btn-info bg-[#34BEED] px-4 py-2 text-sm w-full sm:w-auto">
                        <Link href={`/Solucoes`}>Conheça nossas soluções</Link>
                    </button>
                    <button className="btn btn-outline outline-[#34BEED] btn-info px-4 py-2 text-sm w-full sm:w-auto">
                        <Link href={`/Servicos`}>Conheça nossos serviços</Link>
                    </button>
                </div>
            </div>
            <Image
                src={slider}
                alt="Fundo"
                className="absolute inset-0 w-full h-full object-cover justify-center"
            />
        </div>
    )
}
