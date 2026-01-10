import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navbar from './../Navbar/Navbar';
export default function Layout() {
    return (
        <>
            <Navbar />
            <main>
            <Outlet />
            </main>
            <Footer />
        </>
    );
}