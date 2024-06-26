"use client";
import {useEffect, useState} from "react";
import {assets} from "@/Assets/assets";
import Sidebar from "@/Components/AdminComponents/Sidebar";
import Image from "next/image";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted) {
            const username = prompt("Enter Username:");
            const password = prompt("Enter Password:");

            if (
                username === process.env.NEXT_PUBLIC_ADMIN_USERNAME &&
                password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
            ) {
                setIsAuthenticated(true);
            } else {
                alert("Invalid credentials!");
            }
        }
    }, [isMounted]);

    if (!isAuthenticated) {
        return <div>Access denied. Please refresh the page and try again.</div>;
    }

    return (
        <>
            <div className="flex">
                <ToastContainer theme="dark"/>
                <Sidebar/>
                <div className="flex w-full flex-col">
                    <div
                        className="flex w-full items-center justify-between border-b border-black px-12 py-3 max-h-[60px]">
                        <h3 className="font-medium">Admin Panel</h3>
                        <Image src={assets.profile_icon} width={40} alt=""/>
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
}
