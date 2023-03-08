import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Page404 from './page/Page404';
import Home from './components/Home';
import TerminosCondiciones from './components/TerminosCondiciones';
import TrabajaConNosotros from './components/trabaja/TrabajaConNosotros';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
    children: [
      {
        index:true, element: <Home />
      },
      {

        path: "home",
        element: <Home />
      },
      {
        path: "terminos-y-condiciones",
        element: <TerminosCondiciones />
      },
      {
        path: "jobs",
        element: <TrabajaConNosotros />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
