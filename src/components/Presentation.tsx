import React from 'react'
import {SlArrowDown} from 'react-icons/sl'


const Presentation = () => {
  return (
    <div className="text-center  sm:pt-36 pt-72 h-[67vh] lg:h-[77vh] flex flex-col gap-10 sm:gap-0 mb-10">
      <p className='font-poppins text-white font-bold sm:text-6xl text-4xl animate-pulse'>LLevamos tu negocio hasta la luna!</p>
      <p className='font-poppins text-white font-bold text-2xl sm:text-4xl sm:mt-0 '>Diseño Web, Software a medida, identidad online.</p>
      <div className='flex flex-col items-center sm:pt-52 anitame-pulse'>
        <SlArrowDown  className='text-white animate-bounce text-5xl rotate-180'/>
        
      </div>
    </div>
  )
}

export default Presentation