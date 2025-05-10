import React from 'react'

type TopicProps = {
    title: string,
    descriple: string
}

export const TopicTable = ({ title, descriple }: TopicProps) => {
    return (
        <div className='w-[490px] max-sm:w-full h-[181px] p-8 rounded-lg bg-[#0D325E] text-white flex flex-col justify-center items-center gap-3'>
            <p className='text-lg font-semibold text-center'>{title}</p>
            <p className='font-mono text-sm'>{descriple}</p>
        </div>
    )
}
