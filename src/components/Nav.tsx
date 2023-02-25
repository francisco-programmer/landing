import React, {useState} from 'react'

import {IoBusinessSharp } from  "react-icons/io5";
import { IoMdHelpCircle } from  "react-icons/io";
import {BiLogOut } from  "react-icons/bi";
import {AiFillSetting } from  "react-icons/ai";
import {CgProfile } from  "react-icons/cg";
import {MdBusinessCenter, MdAddReaction } from  "react-icons/md";
import {RiCloseLine, RiMenu3Line } from  "react-icons/ri"
import pres from '../assets/pre.png'



const Nav = () => {
    const [bg, SetBg] = useState(true)
      const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <div className="">
        <div className="flex justify-between sm:px-20 px-5 py-5  ">
          <div className="">
            <button className="bg-black text-sky-500 p-2 rounded-lg font-bold shadow-2xl font-poppins">
              Axios Agency
            </button>
          </div>
          <ul className=" gap-10 sm:flex hidden">
            <select>
              <option onClick={() => SetBg(true)}>es</option>
              <option onClick={() => SetBg(false)}>en</option>
            </select>
            <li className="font-poppins p-2 rounded hover:text-sky-500 border-[1px] hover:border-sky-500 border-transparent">
              Servicios
            </li>
            <li className="font-poppins p-2 rounded hover:text-sky-500 border-[1px] hover:border-sky-500 border-transparent">
              Porque Nosotros
            </li>
            <li className="font-poppins p-2 rounded hover:text-sky-500 border-[1px] hover:border-sky-500 border-transparent">
              Contacto
            </li>
          </ul>
        </div>

        <div
          className={`sm:hidden  bg-sky-500 fixed sm:static  w-full h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${
            showMenu ? "right-0" : "-right-full"
          } transition-all duration-300`}
        >
          <header className=" flex flex-col sm:flex-row justify-between">
            <button className="">Axios Agency</button>
            <ul className="flex gap-5 sm:flex-row flex-col">
              <li>a</li>
              <li>a</li>
              <li>a</li>
              <li>a</li>
            </ul>

            <button
              onClick={() => setShowMenu(!showMenu)}
              className="sm:hidden fixed  right-4 bg-sky-500 text-black p-3 rounded-full z-50 border-[2px] border-sky-500"
            >
              {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
          </header>
        </div>
      </div>
    </>
  );
}

export default Nav