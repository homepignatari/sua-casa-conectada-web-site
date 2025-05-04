import React from 'react'

type TopicProps = {
    title: string,
    descriple: string
}

export const TopicTable = ({ title, descriple }: TopicProps) => {
    return (
        <div className='w-[406px] p-8 rounded-lg bg-indigo-950 text-white flex flex-col gap-3'>
            <p className='text-lg text-center'>{title}</p>
            <p className='font-mono text-sm'>{descriple}</p>
        </div>
    )
}
