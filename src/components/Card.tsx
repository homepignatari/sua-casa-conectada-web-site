import React from 'react'
import Image from 'next/image'

type CardProps = {
    backgroungImage: string
}
export const Card = ({ backgroungImage }: CardProps) => {
    return (
        <div className='relative h-[200px] min-w-[200px] flex justify-center items-center overflow-hidden'>
            <Image src={backgroungImage} alt={backgroungImage} width={76} height={76} />
        </div>
    )
}
