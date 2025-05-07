import React from 'react'

type BagdeProps = {
    title: string
}

export const BagdeCategory = ({ title }: BagdeProps) => {
    return (
        <div className='bg-[#0D325E] text-white p-3 rounded-full text-center'>{title}</div>
    )
}
