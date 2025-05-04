"use client";

import React from 'react'
import { Card } from './Card'
import useMeasure from 'react-use-measure'
import { animate, useMotionValue, motion } from 'framer-motion'
import { useEffect } from 'react'

export const Slider = () => {

  const imagesLogo = [
    "/image 2.svg",
    "/image 4.svg",
    "/image 5.svg",
    "/image 6.svg",
    "/image 7.svg",
    "/image 8.svg",
    "/image 14.svg",
    "/image 18.svg",
    "/image 19.svg",
    "/image 20.svg",
  ]
// eslint-disable-next-line prefer-const
let [ref, { width }] = useMeasure()
  
const xTranslation = useMotionValue(0)

  useEffect(() => {
  // eslint-disable-next-line prefer-const
    let controls
    // eslint-disable-next-line prefer-const
  let finalPosition = -width / 2 - 8

  controls = animate(xTranslation, [0, finalPosition], {
    ease: 'linear',
    duration: 25,
    repeat: Infinity, 
    repeatType: 'loop',
    repeatDelay: 0
  

})
  return controls.stop
}, [xTranslation, width])

  return (
    <div className='h-[250px] py-8  bg-white'>
      <motion.div className='absolute left-0 flex gap-8' ref={ref} style={{ x: xTranslation }}>
        {[...imagesLogo, ...imagesLogo].map((item, idx) => (
          <Card backgroungImage={item} key={idx} />
        ))}
      </motion.div>
    </div>
  )
}
