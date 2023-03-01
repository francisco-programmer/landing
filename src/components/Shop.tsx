import React, { useEffect, useState, useRef } from 'react'
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill, BsFillBagCheckFill} from 'react-icons/bs'

const Shop = () => {
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
      url: "https://cdn.appdesign.dev/wp-content/uploads/2019/07/disen%CC%83o-tienda-online-electro%CC%81nica.jpg",
    },
    {
      id: 2,
      url: "https://cdn.appdesign.dev/wp-content/uploads/2019/07/disen%CC%83o-tienda-online-complementos.jpg",
    },
    {
      id: 3,
      url: "https://cdn.appdesign.dev/wp-content/uploads/2019/07/disen%CC%83o-tienda-online-decoracio%CC%81n.jpg",
    },
    {
      id: 4,
      url: "https://www.sketchappsources.com/resources/source-image/e-commerce-landing-page-ami-moradia.png",
    },
    {
      id: 5,
      url: "https://www.sketchappsources.com/resources/source-image/cloth-e-commerce-product-showcase-website-netroz.png",
    },
    {
      id: 6,
      url: "https://www.sketchappsources.com/resources/source-image/e-commerce-ui-kit-explorer-shop.png",
    },
  ];

  return (
    <div className='bg-white'>
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:p-36 px-5 py-10 gap-10">
        <div className='flex flex-col gap-4'>
          <p className="font-poppins sm:text-5xl text-3xl text-gray-900 font-bold">
            <strong>Desarrollamos tu tienda online</strong>
          </p>
          <p className='font-poppins text-xl'>Algunos Beneficios:</p>
          <ul>
            <li className='flex gap-4 items-center'><BsFillBagCheckFill  className='text-gray-600'/>Pasarela de Pagos</li>
            <li className='flex gap-4 items-center'><BsFillBagCheckFill /> Disponibilidad 24/7</li>
            <li className='flex gap-4 items-center'><BsFillBagCheckFill /> Ampliacion de Mercado</li>
            <li className='flex gap-4 items-center'><BsFillBagCheckFill /> Visibilidad</li>
            <li className='flex gap-4 items-center'><BsFillBagCheckFill /> Reduccion de gastos</li>
          </ul>
        </div>
        {/* slider de images */}
        <div className="">
          <img src={tiendas[countImage].url} className="h-64 w-[460px]  rounded-lg shadow-xl" />
          <div className=" flex justify-center gap-10 p-4 m-1">
            <button
              className="text-xl"
              disabled={countImage === 0 ? true : false}
              onClick={restarImage}
            >
              <BsFillArrowLeftCircleFill />
            </button>
            
            <button
              className="text-xl   "
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

export default Shop