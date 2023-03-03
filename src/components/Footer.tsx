import React from 'react'
import logo from '../assets/bitmap.png'
import {FaFacebookSquare} from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { ImLinkedin } from 'react-icons/im'
import {ImWhatsapp} from 'react-icons/im'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='sm:px-36 py-10 px-5 flex sm:flex-row flex-col place-items-center justify-between bg-gray-900 text-gray-200  w-full'>
      <div> 
      <img src={logo}  className='w-32'/>
      <div>
        <p>Pagina creada y diseñada por Axios studio ™ 2023</p>
      </div>
      </div>
      
        
      <ul className="flex  sm:flex-row flex-col gap-5">
              
            <li className="font-poppins  text-gray-200  ">
              <Link to="/">

             Home
              </Link>
            </li>
            
            <li className="font-poppins text-gray-200 ">
              Blog
            </li>
            <li className="font-poppins text-gray-200 ">
              <Link to="contact">
             Contacto
             </Link>
            </li>
            
            <li className="font-poppins  text-gray-200 t">
             <Link to="trabaja-con-nosotros">Trabaja con Nosotros</Link> 
            </li>
            <li className="font-poppins  text-gray-200 ">
            <Link to="terminos-y-condiciones">Terminos y  Condicioness</Link> 
            </li>
          </ul>

          <div className='flex text-2xl gap-5 sm:justify-end'>
          <FaFacebookSquare className='text-blue-500' />
          <BsInstagram  className='text-pink-500'/>
          <ImLinkedin  className='text-blue-800'/>
          <ImWhatsapp className='text-green-500'/>


       
      </div>
    </div>
  )
}

export default Footer