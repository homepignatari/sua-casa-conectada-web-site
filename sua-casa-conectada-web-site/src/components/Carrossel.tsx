import React from 'react'
import slider from '../../public/Slider.svg'
import Image from 'next/image'


export const Carrossel = () => {
    return (
        <div className="relative w-full h-[500px]">

            <div className='relative z-10 flex flex-col items-center justify-center h-full text-blue-400 '>
                <h1 className='text-5xl font-sans text-center'>Preparamos sua casa para o futuro,</h1>
                <h1 className='text-5xl p-8 font-sans text-center'>e o futuro é agora!</h1>
                <div className=' flex gap-4'>
                    <button className="btn btn-info">Conheça nossas soluções</button>
                    <button className="btn btn-outline btn-info">Conheça nossos serviços</button>
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
