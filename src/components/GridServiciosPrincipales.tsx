import React from 'react'
import {HiLightBulb} from 'react-icons/hi'
import {RiWhatsappFill} from 'react-icons/ri'
import {MdWeb} from 'react-icons/md'
import {DiCodeigniter} from 'react-icons/di'

const GridServiciosPrincipales = () => {
  return (
    <div className="sm:p-36  px-5  py-16 mt-36 bg-gray-200 text-gray-900" id='servicios'>
      <p className="sm:text-5xl text-3xl font-poppins font-bold text-gray-900">
        Brindamos servicios de marketing digital 
      </p>
     
      <div className="grid sm:grid-cols-4 md:grid-cols-2 xl:grid-cols-4 grid-cols-1" >
        <div className=" sm:p-4 flex flex-col justify-center place-items-center gap-4">
          <div className="text-center">
            <HiLightBulb className="text-8xl text-yellow-500 " />
          </div>
          <p className="text-2xl font-poppins font-bold">Gestion de Redes sociales</p>
          <p className="font-poppins">
            Llevamos las gestiones de{" "}
            <strong>Redes Sociales de negocios,</strong> diseñamos{" "}
            <strong>contenido de valor</strong> y lo publicamos por medio de
            Videos o Post. Vendemos productos y servicios a través de{" "}
            <strong>campañas orgánicas</strong> en redes sociales y con campañas
            de anuncios pagos en Facebook Business.{" "}
          </p>
        </div>
        <div className="sm:p-4  flex flex-col justify-center place-items-center gap-4">
          <div className="text-center">
            <DiCodeigniter className="text-8xl text-yellow-500 " />
          </div>
          <p className="text-2xl font-poppins font-bold">Posicionamiento SEO y SEM</p>
          <p className="font-poppins">
            Expertos en SEO On page y seo off page de sitios web para{" "}
            <strong>
              posicionar de manera orgánica en motores de búsquedas como Google.
            </strong>{" "}
            Diseñamos estrategias SEO para{" "}
            <strong>atraer más trafico a tu página web:</strong> Análisis o
            estudio de palabras claves (Keywords), linkbuilding, Enlazado
            interno y creación artículos SEO optimizados.{" "}
          </p>
        </div>{" "}
        <div className="sm:p-4  flex flex-col justify-center place-items-center gap-4">
          <div className="text-center">
            <MdWeb className="text-8xl text-yellow-500 " />
          </div>
          <p className="text-2xl font-poppins font-bold">Diseño de Paginas Web</p>
          <p className="font-poppins">
            Planes y paquetes de diseños de páginas Web, diseño de landing page,
            one page, blog web, páginas web informativas y páginas para{" "}
            <strong>vender productos 24 horas al día</strong> y mucho más. Somos
            agencia de diseño de páginas web con experiencia y casos de éxitos.
          </p>
        </div>
        <div className="sm:p-4  flex flex-col justify-center place-items-center gap-4">
          <div className="text-center">
            <RiWhatsappFill className="text-8xl text-yellow-500 " />
          </div>
          <p className="text-2xl font-poppins font-bold">ChatBot de Whatsapp Personalizado</p>
          <p className="font-poppins">
            El chatbot para WhatsApp es ideal para administrar y lidiar en la
            comunicación con tus leads y clientes. Más específicamente, un
            chatbot para WhatsApp puede brindarles a tus leads asistencia
            privada y responder sus inquietudes y preguntas de forma inmediata y
            del mejor modo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GridServiciosPrincipales