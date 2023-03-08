import React, {useState} from 'react'
import {Link } from 'react-router-dom'

import {RiCloseLine, RiMenu3Line } from  "react-icons/ri"
import {FaFacebookSquare} from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { ImLinkedin } from 'react-icons/im'
import {ImWhatsapp} from 'react-icons/im'
import pres from '../assets/pre.png'
import logo from '../assets/bitmap.png'



const Nav = () => {
    const [bg, SetBg] = useState(true)
      const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <div className="bg-[#0C171A]">
        <div className="flex justify-between  px-5 py-5 sm:px-36 w-screen ">
          <div className="">
            <Link to="/">
              <img src={logo} className="w-32" />
            </Link>
          </div>
          <ul className=" gap-10 sm:flex hidden">
            <select className="bg-transparent border-[1px] rounded text-gray-200">
              <option onClick={() => SetBg(true)}>Es</option>
              <option onClick={() => SetBg(false)}>En</option>
            </select>
            <li className="font-poppins p-2 rounded text-gray-200 border-[1px] hover:border-gray-200 border-transparent">
              <a href="#servicios"> Home</a>
            </li>

            <li className="font-poppins p-2 rounded text-gray-200 border-[1px] hover:border-gray-200 border-transparent">
              Blog
            </li>
            <li className="font-poppins p-2 rounded text-gray-200 border-[1px] hover:border-gray-200 border-transparent">
              Contacto
            </li>
            <li className="font-poppins p-2 rounded text-gray-200 border-[1px] hover:border-gray-200 border-transparent">
              Trabaja con Nosotros
            </li>
          </ul>
        </div>
        <div
          className={`sm:hidden  bg-gray-900 fixed sm:static w-full h-full top-0 bg-secondary-100 text-center p-4 flex flex-col justify-between z-50 transition-all ease-linear ${
            showMenu ? "right-0 " : " invisible"
          } transition-all duration-300`}
        >
          <header className=" flex flex-col sm:flex-row  gap-4 justify-between">
            <p className="text-2xl text-gray-200 font-poppins">Menu</p>

            <ul className="flex gap-5 sm:flex-row flex-col text-gray-200 font-poppins">
              <li>
                <Link to="/" onClick={() => setShowMenu(!showMenu)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="contact" onClick={() => setShowMenu(!showMenu)}>
                  Contacto
                </Link>
              </li>
              <li>Blog</li>
              <li>
                <Link
                  to="jobs"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  Trabaja con Nosotros
                </Link>{" "}
              </li>
            </ul>
            <hr className="border-gray-600 border-[1px]"></hr>
            <p className="font-poppins text-gray-200">Siguenos en</p>
            <div className="flex place-content-center gap-5 text-xl text-gray-200">
              <FaFacebookSquare className='hover:text-blue-500' />
              <BsInstagram className='hover:text-pink-500'/>
              <ImLinkedin  className='hover:text-blue-800' />
              <ImWhatsapp  className='hover:text-green-500' />
            </div>
          </header>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={`sm:hidden fixed visible right-4  ${
              showMenu ? "text-gray-600" : "text-gray-200"
            } text-2xl p-3 rounded-full z-50  `}
          >
            {showMenu ? (
              <RiCloseLine className="hover:rotate-180 duration-300 transition-all hover:text-red-500" />
            ) : (
              <RiMenu3Line className="hover:rotate-180 duration-300 transition-all" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Nav