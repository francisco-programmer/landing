import React from 'react'
import CardEmpleo from './CardEmpleo'
import encantados from '../../assets/Encantados de conocerte.png'

const TrabajaConNosotros = () => {
  const stilo = "font-poppins text-gray-900"
    
  return (
    <div className='py-10   bg-encantados sm:px-36 px-5'>
      <div className=' p-10'>

        <h1 className={`text-3xl text-center ${stilo} `}>Unete al mejor equipo de trabajo</h1>
        
        <p className={stilo}>En Axios Studio Tenemos disponible las siguientes  Vacantes</p>
      </div>
        
          


        <CardEmpleo />
      
</div>
    
  )
}

export default TrabajaConNosotros