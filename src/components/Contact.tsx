import React, { EventHandler } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const notify = (e: any) => {
    e.preventDefault()
    toast("🦄 Mensaje Enviado!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <div className="">
      <section className=" flex items-stretch text-white bg-gray-200 ">
        <div className="lg:flex w-1/2 hidden bg-gray-500  bg-no-repeat bg-cover relative items-center bg-[url('https://images.pexels.com/photos/323503/pexels-photo-323503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full px-24 z-10">
            <h1 className="text-5xl font-bold text-left tracking-wide">
              Contáctenos
            </h1>
            <p className="text-3xl my-4">
              Deje que sus ideas vuelen a todas partes del mundo!
            </p>
          </div>
          <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4"></div>
        </div>

        <div className="lg:w-1/2 w-full flex items-center justify-center text-center h-[100vh] md:px-16 px-0 z-0">
          <div className="absolute lg:hidden  inset-0 bg-gray-500 bg-no-repeat bg-cover items-center  bg-[url('https://images.pexels.com/photos/323503/pexels-photo-323503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
            <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          </div>
          <div className="w-full py-6 z-20">
            <div className="w-full px-5 z-10 block sm:hidden">
              <h1 className="text-5xl font-bold text-center tracking-wide">
                Contáctenos
              </h1>
              <p className="text-xl my-4">
                Deje que sus ideas vuelen a todas partes del mundo!
              </p>
            </div>

            <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
              <div className="pb-2">
                <input
                  className="block w-full p-2 text-lg  text-black rounded-xl "
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nombre Completo"
                />
              </div>
              <div className="pb-2">
                <input
                  className="block w-full p-2 text-lg  text-black rounded-xl "
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Email"
                />
              </div>
              <div className="pb-2 ">
                <input
                  className="block w-full p-2 text-lg  text-black rounded-xl "
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Pais"
                />
              </div>
              <div className="pb-2 ">
                <input
                  className="block w-full p-2 text-lg  text-black rounded-xl "
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Whatsapp +573015984814"
                />
              </div>
              <div className="pb-2 ">
                <textarea
                  className="block w-full p-4 text-lg  text-black rounded-xl "
                  name="name"
                  id="name"
                  placeholder="Mensaje"
                />
              </div>
              <div className="px-4 pb-2 pt-2">
                <button onClick={notify} className="uppercase block w-full p-2 text-lg rounded-full mb-10 bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                  Enviar
                </button>
              </div>
            </form>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Same as */}
          <ToastContainer />
        </div>
      </section>
    </div>
  );
}

export default Contact