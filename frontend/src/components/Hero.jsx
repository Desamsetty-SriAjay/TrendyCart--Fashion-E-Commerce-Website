import React from 'react'
import {assets} from '../assets/assets'
const Hero = () => {
  return (
    <div className='flex w-[100%] h-[60%] border bg-[#dbbf9b]'>
            <img src={assets.hero111} className='w-2/4 h-2/4' alt="heroimage" />
            <img src={assets.hero2222} className='w-2/4 h-2/4 ml-0.5' alt="heroimage" />

    </div>
  )
}

export default Hero