import React from 'react'
import Image from 'next/image'

type CardProps = {
    backgroungImage: string
}
export const Card = ({ backgroungImage }: CardProps) => {
    return (
        <div className='relative overflow-hidden h-[200px] min w-[200px] flex justify-center items-center '>
            <Image src={backgroungImage} alt={backgroungImage} width={76} height={76} />
        </div>
    )
}
