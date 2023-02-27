import React from 'react'
import video from '../assets/video.mp4'

const Videos = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 sm:p-36 sm:gap-10 bg-gray-200">
      <div className="p-5 sm:p-0 flex flex-col sm:gap-10">
        <p className="sm:text-5xl text-3xl font-poppins text-gray-900 font-bold">
          Quiénes Somos?
        </p>
        <p className='font-poppins text-gray-900'>
          Somos un grupo de profesionales dispuestos atenderte y ayudarte a
          solucionar las necesidad de tu negocio, lo introduciremos al mundo digital y lo
          conduciremos por el camino del exito.
        </p>
      </div>

      <div>
        <video
          className="w-[600px] rounded-lg shadow-2xl"
          controls
          autoPlay
          loop
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Videos