import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Loader from "../Loading/LoadAnimition";
import ParticlesBackground from './../ParticlesBackground/ParticlesBackground';
import GlobalScrollIndicator from './../Scroll/Scroll';
import {  StickyNavbar } from './../Navbar/Navbar';
import Footer from './../Footer/Footer';

export default function Layout() {

    return <>
        <Header />
  
        <GlobalScrollIndicator />
     
        <Loader />
      
    
        <Outlet>

        </Outlet>
        <Footer/>
        <ParticlesBackground />
        
    </>
}