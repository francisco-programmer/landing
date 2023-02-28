import React from 'react'
import logo from '../assets/bitmap.png'
import {FaFacebookSquare} from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { ImLinkedin } from 'react-icons/im'
import {ImWhatsapp} from 'react-icons/im'
const Footer = () => {
  return (
    <div className='sm:px-36 py-10 flex sm:flex-row flex-col place-items-center justify-between bg-gray-900 text-gray-200 '>
      <div> 
      <img src={logo}  className='w-32'/>
      <div>
        <p>Copy</p>
      </div>
      </div>
      <div className='flex flex-col gap-5 text-gray-900'>
        
      <ul className=" sm:gap-10 flex sm:flex-row flex-col">
            <select className='bg-transparent border-[1px] rounded text-gray-200'>
              <option >Es</option>
              <option >En</option>
            </select>
            <li className="font-poppins p-2 rounded text-gray-200 border-[1px] hover:border-gray-200 border-transparent">
             <a href='#servicios'>Home</a>
            </li>
            
            <li className="font-poppins p-2 rounded text-gray-200 border-[1px] hover:border-gray-200 border-transparent">
              Blog
            </li>
            <li className="font-poppins p-2 rounded text-gray-200 border-[1px] hover:border-gray-200 border-transparent">
             Terminos y  Condiciones
            </li>
            <li className="font-poppins p-2 rounded text-gray-200 border-[1px] hover:border-gray-200 border-transparent">
              Trabaja con Nosotros
            </li>
          </ul>
          <div className='flex text-2xl gap-5 sm:justify-end'>
          <FaFacebookSquare className='text-blue-500' />
          <BsInstagram  className='text-pink-500'/>
          <ImLinkedin  className='text-blue-800'/>
          <ImWhatsapp className='text-green-500'/>


        </div>
      </div>
    </div>
  )
}

export default Footer