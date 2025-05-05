import React from 'react'

type TopicProps = {
    title: string,
    describle?: string
}

export const BorderTopic = ({ title, describle }: TopicProps) => {
    return (
        <div className='w-[280px] border-2 border-sky-500 rounded-lg p-2 '>
            <p className='font-medium text-2xl text-center text-sky-500'>{title}</p>
            <p className='font-mono text-xs text-center'>{describle}</p>
        </div>
    )
}
