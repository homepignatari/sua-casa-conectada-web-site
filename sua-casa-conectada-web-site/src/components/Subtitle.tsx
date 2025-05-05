import React from 'react'

type SubtitleProps = {
    title: string,
    descriple?: string
    backgroungImage: string
}

export const Subtitle = ({title, descriple, backgroungImage}:SubtitleProps) => {
    return (
        <div className='relative w-full h-auto p-12'>
            <div className='relative z-10 flex flex-col items-center text-center justify-center h-full text-blue-400 gap-4'>
                <h2 className='text-5xl font-sans'>{title}</h2>
                <p className='text-white font-mono  text-center'>{descriple}</p>
            </div>
            <img
                
                src={backgroungImage}
                alt="Fundo"
                className="absolute inset-0 w-full h-full object-cover"
                
            />
        </div>
    )
}
