import {  lazy, Suspense } from 'react'

import './App.css'
import Landing from './components/Landing'


function App() {
  const Loading = lazy(() => import('./components/Loading'))

 
  

  return (
    <div className="App ">
      <Suspense fallback={<Loading />}>

      <Landing />
      </Suspense>
    </div>
  );
}

export default App
