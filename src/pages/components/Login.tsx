"use client";
import React, { useState } from "react";
import user from '../../../public/user.jpg'
import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "./Footer";

const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const InptChangeHandler = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!formData.email || !formData.email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    if (formData.password.length < 6 || formData.password.length > 8) {
      alert("Password should be between 6 and 8 characters");
      return;
    }


    // Validation passed, show success message and navigate to login page
    alert("Login successful! Redirecting to login page...");
    console.log("submitted");
    setTimeout(() => {
      router.push('/components/Home'); // Replace with your login page route
    }, 2000);
  };

  return (
    <div className="bg-black">
      <div className="p-4 h-[615px] bg-black">
        <h1 className="text-2xl text-white font-semibold">
          Mobile-View Page Only
        </h1>
        <p className="my-2 text-white">
          This content is designed specifically for mobile screens.
        </p>
        <h1 className="text-xl font-bold text-center text-white my-3">
          Create Account
        </h1>

        <div className="flex justify-center items-center">
          <Image src={user} width={100} height={100} alt="user-img" />
        </div>

        <div className="mt-2">
          <label className="block text-white font-mediumtext-white">Email</label>
          <input
            autoComplete="off"
            type="email"
            name="email"
            value={formData.email}
            onChange={InptChangeHandler}
            placeholder="Enter Email"
            className="mt-1 block w-full px-3 py-2 bg-white  border border-slate-300 rounded-md text-black shadow-sm placeholder-slate-400 peer"
          />
        </div>

        <div className="mt-5">
          <label className="block text-white font-mediumtext-white">
            Password
          </label>
          <input
            autoComplete="off"
            type="password"
            name="password"
            value={formData.password}
            onChange={InptChangeHandler}
            placeholder="Enter Password "
            className="mt-1 block w-full px-3 py-2 bg-white  border border-slate-300 rounded-md text-black shadow-sm placeholder-slate-400 peer"
          />
        </div>


        <div className="flex items-center justify-center my-5">
          <button
            onClick={handleSignUp}
            className="rounded-full text-white bg-blue-950  px-6 py-2    text-center items-center"
            type="button"
          >
            Login
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 ">
        <Footer />

      </div>
    </div>
  );
};

export default Signup;
