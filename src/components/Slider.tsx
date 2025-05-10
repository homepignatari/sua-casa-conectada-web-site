"use client";

import React from 'react'
import { Card } from './Card'
import useMeasure from 'react-use-measure'
import { animate, useMotionValue, motion } from 'framer-motion'
import { useEffect } from 'react'

export const Slider = () => {

  const imagesLogo = [
    "/image 6.svg",
    "/image 2.svg",
    "/image 4.svg",
    "/image 7.svg",
    "/image 8.svg",
    "/image 18.svg",
    "/image 19.svg",
    "/image 20.svg",
    "/image 14.svg",
    "/image 5.svg",
  ]
// eslint-disable-next-line prefer-const
let [ref, { width }] = useMeasure()
  
const xTranslation = useMotionValue(0)

  useEffect(() => {
  // eslint-disable-next-line prefer-const
    let controls
    // eslint-disable-next-line prefer-const
  let finalPosition = -width / 2 - 8

    // eslint-disable-next-line prefer-const
  controls = animate(xTranslation, [0, finalPosition], {
    ease: 'linear',
    duration: 25,
    repeat: Infinity, 
    repeatType: 'loop',
    repeatDelay: 0
  

  })
    // eslint-disable-next-line prefer-const
  return controls.stop
}, [xTranslation, width])

  return (
    <div className='relative h-[250px] w-full py-8 overflow-hidden bg-white max-sm:overflow-hidden'>
      <motion.div className='absolute left-0 flex gap-8 w-max' ref={ref} style={{ x: xTranslation, overflow: 'hidden' }}>
        {[...imagesLogo, ...imagesLogo].map((item, idx) => (
          <Card backgroungImage={item} key={idx} />
        ))}
      </motion.div>
    </div>
  )
}
