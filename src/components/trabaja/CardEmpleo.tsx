import React from 'react'
import {CiLocationOn} from 'react-icons/ci'
import vacantes from './vacantes.json'

const CardEmpleo = () => {
function formGoogle(){
window.open('https://forms.gle/3HmgRawp8UApbpcy5', '_blank')
}


  return (
    
    <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>

    
      {
        vacantes.map((item, i) => {
          return (
            <div className="bg-white shadow-2xl p-5 rounded-xl flex flex-col gap-5">
            <div className='flex justify-between'>
    
            <p className="sm:text-xl font-bold font-poppins">{item.puesto}</p>
           <p className='flex sm:gap-2 items-center'>
             <CiLocationOn className=''/> Remoto
             </p>
            </div>
            <div>
              <p className="text-gra-900 font-poppins">Skill:</p>
              <p className="text-gra-900 font-poppins">{item.skill}</p>
    
            </div>
            <div className='px-5'>
              <button className='bg-black p-2 text-gray-200 rounded w-full' onClick={formGoogle}>Aplicar</button>
            </div>
            </div>
          )
        })
      
    
      }
      </div>
   
     
    

   
  );
}

export default CardEmpleo