import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Loader from "../Loading/LoadAnimition";
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground";
import GlobalScrollIndicator from "../Scroll/Scroll";
import Footer from "../Footer/Footer";

export default function Layout() {
    return (
        <>
            <AnimatedBackground />
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