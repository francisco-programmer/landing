import React,{useRef} from 'react'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import {AiFillStar} from 'react-icons/ai'
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from 'react-icons/bs'
import { FiCheck} from 'react-icons/fi'

const testimonios = [
  {
    imageUrl:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Arturo Contreras",
    pais: "Colombia",
    testimonio:
      "Gracias a Axios Agency por cumplir el sueño de tener pagina web para mi negocio.",
  },
  {
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Clenticia Villalobos",
    pais: "Venezuela",
    testimonio:
      "Es lo mejor la atencion es muy dedicada los detalles, estan muy pendiente de tus ideas.",
  },
  {
    imageUrl: "https://cdn.pixabay.com/photo/2016/11/29/03/07/beard-1866984_640.jpg",
    name: "Carlos Ortega",
    pais: "Colombia",
    testimonio:
      "Es mi agencia favorita los resultados se ven en pocos dias, lo cual es importante para tu negocio ",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tYnJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Fernando Gonzalez",
    pais: "Argentina",
    testimonio:
      "Su dinamismo y eficacia para realizar todo rapido es genial y poderoso me encanta ",
  },
  {
    imageUrl: "https://cdn.pixabay.com/photo/2017/02/20/11/57/boy-2082270_640.jpg",
    name: "Antonio Garcia",
    pais: "España",
    testimonio:
      "Me siento agredecido con sus servicios y buenos aportes y preocupacion por el negocio del cliente",
  },
  {
    imageUrl: "https://cdn.pixabay.com/photo/2015/01/12/10/44/woman-597173_640.jpg",
    name: "Sofia Hernandez",
    pais: "Mexico",
    testimonio:
      "La pagina web de mi negocio quedo genial gracias a ustedes, exelente servicio ",
  },
];

const Testimonials = () => {

   
        const slider = useRef<HTMLDivElement | any >(null)
    
    

    
  return (
    <div className="sm:px-36 sm:flex sm:py-36 gap-5 w-ful">
         <div className="p-5 flex flex-col gap-5 sm:hidden">
        <h1 className="text-4xl font-poppins text-gray-900 font-bold" >
          Testimonios de nuestros clientes
        </h1>
        
        <div className="sm:flex gap-10 justify-center hidden">
          <BsFillArrowLeftCircleFill className='text-gray-900 text-2xl cursor-pointer duration-700 hover:w-[36px]' 
            onClick={() => (slider.current.scrollLeft -= 200)}
          />
          <BsFillArrowRightCircleFill className='text-gray-900 text-2xl cursor-pointer duration-700 hover:w-[36px]'
            onClick={() => (slider.current.scrollLeft += 200)}
          />
        </div>
        
        <div>
            <p className='flex items-center gap-3 font-poppins '><FiCheck/>Rapidos</p>
            <p className='flex items-center gap-3 font-poppins '><FiCheck/>Intuitivos</p>
            <p className='flex items-center gap-3 font-poppins '><FiCheck/>Dinamicos</p>
            <p className='flex items-center gap-3 font-poppins '><FiCheck/>Responsive</p>
            <p className='flex items-center gap-3 font-poppins '><FiCheck/>Responsables</p>
        </div>
       
      </div>
      <div
        ref={slider}
        className="snap-x overflow-x-hidden   p-5 scroll-smooth duration-300 h-full  flex items-center justify-start gap-10"
      >
        {testimonios.map((item, i) => (
          <div key={i} className="w-48 ">
            <div className="snap-start  flex-shrink-0  overflow-y-hidden items-center w-48">
              <img
                src={item.imageUrl}
                className="w-28 h-28 rounded-full shadow-lg hover:shadow-2xl  hover:h-32 hover:w-32 duration-700 "
              />
              <p className="font-poppins font-bold ">{item.name}</p>
              <p className="font-poppins text-blue-500 font-bold ">
                <strong>{item.pais}</strong>
              </p>
              <p className='font-poppins text-gray-900'>
                <ImQuotesLeft /> {item.testimonio}
                <ImQuotesRight />
              </p>
              <div className="flex">
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-10 justify-center my-5  sm:hidden">
          <BsFillArrowLeftCircleFill className='text-gray-900 text-2xl cursor-pointer duration-700 hover:w-[36px]' 
            onClick={() => (slider.current.scrollLeft -= 200)}
          />
          <BsFillArrowRightCircleFill className='text-gray-900 text-2xl cursor-pointer duration-700 hover:w-[36px]'
            onClick={() => (slider.current.scrollLeft += 200)}
          />
        </div>
      <div className="p-5 hidden sm:block">
        <h1 className="text-4xl font-poppins text-gray-900 font-bold">
          Testimonios de nuestros clientes
        </h1>
        <hr className=''></hr>
        <div className="flex gap-10 justify-center my-5">
          <BsFillArrowLeftCircleFill className='text-gray-900 text-2xl cursor-pointer duration-700 hover:w-[36px]' 
            onClick={() => (slider.current.scrollLeft -= 200)}
          />
          <BsFillArrowRightCircleFill className='text-gray-900 text-2xl cursor-pointer duration-700 hover:w-[36px]'
            onClick={() => (slider.current.scrollLeft += 200)}
          />
        </div>
        <hr></hr>
        <div>
            <p className='flex items-center gap-3 font-poppins '><FiCheck/>Rapidos</p>
            <p className='flex items-center gap-3 font-poppins '><FiCheck/>Intuitivos</p>
            <p className='flex items-center gap-3 font-poppins '><FiCheck/>Dinamicos</p>
            <p className='flex items-center gap-3 font-poppins '><FiCheck/>Responsive</p>
            <p className='flex items-center gap-3 font-poppins '><FiCheck/>Responsables</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials