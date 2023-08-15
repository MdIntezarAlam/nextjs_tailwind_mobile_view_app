"use client";
import React, { useState } from "react";
import user from '../../../public/user.jpg'
import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "./Footer";

const Home = () => {

    return (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-full h-[740px]">
            <div className="p-4">
                <p className="text-3xl">Home Page work on progress....</p>
            </div>
            <div className="absolute bottom-0">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
