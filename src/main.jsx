import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./components/pages/homepage/Home.jsx"
import Products from "./components/pages/productspage/Products.jsx"
import Services from "./components/pages/servicespage/Services.jsx"
import Contact from "./components/pages/contactpage/Contact.jsx"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/productos',
    element: <Products />
  },
  {
    path: '/servicios',
    element: <Services />
  },
  {
    path: '/contacto',
    element: <Contact />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
