
import {SlArrowDown} from 'react-icons/sl'


const Presentation = () => {
  
 
  
  return (
    <>
      <div className=' md:bg-luna bg-lunamovil bg-center bg-cover h-[100vh] '>
    <div className="text-center  sm:pt-72 xs:2 pt-28 h-[100vh] lg:h-[77vh] flex flex-col gap-36 sm:gap-0 ">
      <p className='font-poppins text-white font-bold sm:text-6xl text-4xl '>LLevamos tu negocio hasta la luna!</p>
      <p className='font-poppins text-white font-bold text-2xl sm:text-4xl sm:mt-0 '>Diseño Web, Software a medida, identidad online.</p>
      <div className='flex flex-col items-center  anitame-pulse'>
        <SlArrowDown  className='text-white animate-bounce text-5xl rotate-180'/>
        
      </div>
    </div>
   
    </div>
    
    </>
  )
}

export default Presentation