import { useState } from 'react';
import { motion } from 'framer-motion';
import Projects from './components/Projects/Projects';
import Loader from './components/Loading/LoadAnimition';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import About from './components/About/About';
import Layout from './components/Layout/Layout';
let query=new QueryClient({
  defaultOptions : {
    queries: {
      
    },
  },
}); 
export default function App() {

  let router = createBrowserRouter([
      {path:'',element:<Layout/>,children:[
        {index:true,element:<Hero/>},
        {path:"/projects",element:<Projects/>},
        {path:"/skills",element:<Skills/>},
        {path:"/contact",element:<Contact/>},
        {path:"/about",element:<About/>},

   ]}
  ])
  return <>

    <QueryClientProvider client={query}>
      
      <RouterProvider router={router} />
<ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

    
  </>
}