import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Loader from "../Loading/LoadAnimition";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground";
import GlobalScrollIndicator from "../Scroll/Scroll";
import Footer from "../Footer/Footer";

export default function Layout() {
    return (
        <>
            <ParticlesBackground />
            <Header />
            <GlobalScrollIndicator />
            <Loader />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}