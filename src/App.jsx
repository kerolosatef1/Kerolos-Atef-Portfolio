import { useState } from 'react';
import { motion } from 'framer-motion';
import Projects from './components/Projects/Projects';
import Loader from './components/Loading/LoadAnimition';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import About from './components/About/About';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Certificates from './components/Certificate/Certificate';
import Notfound from './components/Notfound/Notfound';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
let query=new QueryClient({
  defaultOptions : {
    queries: {
      
    },
  },
}); 
export default function App() {

  let router = createBrowserRouter([
      {path:'',element:<Layout/>,children:[
        {index:true,element:<Home/>},
        {path:"/projects",element:<Projects/>},
        {path:"/skills",element:<Skills/>},
        {path:"/contact",element:<Contact/>},
        {path:"/about",element:<About/>},
        {path:"/certificate",element:<Certificates/>},
        {path:"*",element:<Notfound/>},
   ]}
  ])
  return <>

    <QueryClientProvider client={query}>
    <ParticlesBackground/>
      <RouterProvider router={router} />
<ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

    
  </>
}