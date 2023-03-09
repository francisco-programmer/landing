import React, {lazy, Suspense} from 'react'
import Presentacion from './Presentation'




import GridServiciosPrincipales from "./GridServiciosPrincipales";
import Loading from './Loading';

const Home = () => {

const Shop = lazy(() => import("./Shop"));
const Software = lazy(() => import("./Software"));
const Videos = lazy(() => import("./Videos"));
const Testimonials = lazy(() => import("./Testimonials"))


  return (
    <div>
      
      <div>
      
          <Presentacion />
        
      </div>
      <GridServiciosPrincipales />

      <div>
        <Suspense fallback={<div>Loading..</div>}>
          <Shop />
        </Suspense>
      </div>

      <div>
        <Suspense fallback={<div>Loading..</div>}>
          <Software />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<div>Loading..</div>}>
          <Videos />
        </Suspense>
      </div>
      <div>
      <Suspense fallback={<div>Loading..</div>}>
          <Testimonials />
        </Suspense>

      </div>
    </div>
  );
}

export default Home