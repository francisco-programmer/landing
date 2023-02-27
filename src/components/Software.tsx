import React, { useEffect, useState, useRef } from 'react'
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill, BsFillPatchCheckFill} from 'react-icons/bs'

const Software = () => {
  const [countImage, SetCountImage] = useState(0);
 

  function restarImage() {
    SetCountImage(countImage - 1);
  }

  function cambioImage() {
    SetCountImage(countImage + 1);
  }

  const tiendas = [
    {
      id: 1,
      url: "https://www.frandev.tech/assets/dashboard-5b3de9ca.png",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/736x/cb/3e/a0/cb3ea09a36c7b448a97ee7cb929da435--gym-leggings-leggings-fitness.jpg",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/736x/fa/39/aa/fa39aae83b69b4f0429863adb3d84bd3.jpg",
    },
    {
      id: 4,
      url: "https://i.pinimg.com/736x/d9/e2/ac/d9e2ac31f4f0057f713fbf83bedbb7dd.jpg",
    },
    {
      id: 5,
      url: "https://i.pinimg.com/originals/e5/e8/c7/e5e8c7bab443b6dac8303644c1329fc6.png",
    },
    {
      id: 6,
      url: "https://img.freepik.com/vector-premium/pantalla-gui-interfaz-usuario-aplicacion-menu-restaurante-que-incluye-plantilla-tabla-reserva-inicio-sesion-publicacion_1302-34839.jpg?w=2000",
    },
  ];

  return (
    <div>
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:p-36 px-5 py-10 gap-10 bg-gray-900">
      <div className="hidden sm:block">
          <img src={tiendas[countImage].url} className="h-64 w-[460px]  rounded-lg shadow-xl" />
          <div className=" flex justify-center gap-10 p-4 m-1">
            <button
              className="text-xl text-gray-200"
              disabled={countImage === 0 ? true : false}
              onClick={restarImage}
            >
              <BsFillArrowLeftCircleFill  />
            </button> 
            
            <button
              className="text-xl text-gray-200  "
              disabled={countImage === 5 ? true : false}
              onClick={() => cambioImage()}
            >
              <BsFillArrowRightCircleFill />
            </button>
          </div>
        </div>
        
        <div className='flex flex-col gap-4'>
          <p className="font-poppins sm:text-5xl text-3xl text-gray-200 font-bold">
           <strong> Desarrollamos el software para tu negocio</strong>
          </p>
          <p className='font-poppins text-xl'></p>
          <ul>
            <li className='flex gap-4 text-gray-200 items-center'><BsFillPatchCheckFill />Precio accesible</li>
            <li className='flex gap-4 text-gray-200 items-center'><BsFillPatchCheckFill />Segun las necesidades del negocio</li>
            <li className='flex gap-4 text-gray-200 items-center'><BsFillPatchCheckFill />Plataforma  web </li>
            <li className='flex gap-4 text-gray-200 items-center'><BsFillPatchCheckFill />Ingresa desde cualquier dispositivo</li>

            <li className='flex gap-4 text-gray-200 items-center'><BsFillPatchCheckFill />Personalizacion</li>
            <li className='flex gap-4 text-gray-200 items-center'><BsFillPatchCheckFill />Control y presicion</li>
          </ul>
        </div>

        <div className="block sm:hidden">
          <img src={tiendas[countImage].url} className="h-64 w-[460px]  rounded-lg shadow-xl" />
          <div className=" flex justify-center gap-10 p-4 m-1">
            <button
              className="text-xl text-gray-200"
              disabled={countImage === 0 ? true : false}
              onClick={restarImage}
            >
              <BsFillArrowLeftCircleFill  />
            </button> 
            
            <button
              className="text-xl text-gray-200  "
              disabled={countImage === 5 ? true : false}
              onClick={() => cambioImage()}
            >
              <BsFillArrowRightCircleFill />
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Software