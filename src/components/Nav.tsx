import React, {useState} from 'react'

import {IoBusinessSharp } from  "react-icons/io5";
import { IoMdHelpCircle } from  "react-icons/io";
import {BiLogOut } from  "react-icons/bi";
import {AiFillSetting } from  "react-icons/ai";
import {CgProfile } from  "react-icons/cg";
import {MdBusinessCenter, MdAddReaction } from  "react-icons/md";
import {RiCloseLine, RiMenu3Line } from  "react-icons/ri"
import pres from '../assets/pre.png'
import logo from '../assets/bitmap.png'



const Nav = () => {
    const [bg, SetBg] = useState(true)
      const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <div className="">
        <div className="flex justify-between sm:px-20 px-5 py-5  w-screen ">
          <div className="">
            <img src={logo} className="w-32" />
          </div>
          <ul className=" gap-10 sm:flex hidden">
            <select className='bg-transparent border-[1px] rounded text-gray-200'>
              <option onClick={() => SetBg(true)}>Es</option>
              <option onClick={() => SetBg(false)}>En</option>
            </select>
            <li className="font-poppins p-2 rounded text-gray-200 border-[1px] hover:border-gray-200 border-transparent">
             <a href='#servicios'> Servicios </a>
            </li>
            <li className="font-poppins p-2 rounded text-gray-200 border-[1px] hover:border-gray-200 border-transparent">
              Nosotros
            </li>
            <li className="font-poppins p-2 rounded text-gray-200 border-[1px] hover:border-gray-200 border-transparent">
              Contacto
            </li>
          </ul>
        </div>

        <div
          className={`sm:hidden  bg-gray-200 fixed sm:static w-full h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 transition-all ease-linear ${
            showMenu ? "right-0 " : " invisible" 
          } transition-all duration-300`}
        >
          <header className=" flex flex-col sm:flex-row  gap-4 justify-between">
            <p className='text-2xl'>Menu</p>
            <hr className='border-gray-400 border-[1px]'></hr>
            <ul className="flex gap-5 sm:flex-row flex-col">
              <li><a href='#servicios' onClick={() => setShowMenu(!showMenu)} >Servicios</a></li>
              <li>Nosotros</li>
              <li>Contacto</li>
              <li>Trabaja con Nosotros</li>
            </ul>

           
          </header>
          <button
              onClick={() => setShowMenu(!showMenu)}
              className={`sm:hidden fixed visible right-4  ${showMenu ? "text-gray-600" : "text-gray-200"} text-2xl p-3 rounded-full z-50  `}
            >
              {showMenu ? <RiCloseLine className='hover:rotate-180 duration-300 transition-all hover:text-red-500'/> : <RiMenu3Line className='hover:rotate-180 duration-300 transition-all' />}
            </button>
        </div>
      </div>
    </>
  );
}

export default Nav