"use client";
import React, { useState } from "react";
import user from '../../../public/user.jpg'
import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Link from 'next/link'
import { GetStaticProps } from 'next';


interface User {
  id: number;
  name: string;
  email: string;
   address: {
    city:STring,
    street:String,
    zeepcode:String
  };
  phone: string;
  website: string;
}

interface UserDetailsProps {
  user: User;
}
const Home: React.FC<UserDetailsProps> = ({users}) => {
    return (
        <div className="w-full h-screen bg-gradient-to-r overflow-y-scroll   from-purple-500 to-pink-500 mobile-only">
            <div className="p-4 container ">
                <p className="text-2xl text-center">Home Page work on progress....</p>

               <div className="container mx-auto min-h-[250px] p-2 bg-gray-400 rounded-sm border-1 border-red-500">
              <h1 className="text-2xl text-black font-bold text-center">User Details Page</h1>
               {users.map((user)=>(
                  <div className="flex items-center justify-start flex-wrap" key={user.id}>
                     <Link href={`home/${user.id}`}  className="bg-green-700 m-1 w-full p-1 rounded"> 
                        <p className="font-bold  text-[14px]">UserName:<span className="text-white tex-[12px] ms-5">{user.name}</span></p>
                        <p className="font-bold text-[14px]">Email:<span className="text-white tex-[12px] ms-5">{user.email}</span></p>
                        <p className="font-bold text-[14px]">Phone:<span className="text-white tex-[12px] ms-5">{user.phone}</span></p>
                        <p className="font-bold text-[14px]">City:<span className="text-white tex-[12px] ms-5">{user.address.city}</span></p>
                        <p className="font-bold text-[14px]">Street:<span className="text-white tex-[12px] ms-5">{user.address.street}</span></p>
                        <p className="font-bold text-[14px]">Zipcode:<span className="text-white tex-[12px] ms-5">{user.address.zipcode}</span></p>
                        <p className="font-bold text-[14px]">Website:<span className="text-white tex-[12px] ms-5">{user.website}</span></p>
                     </Link>
                 </div>

                ))}

               </div>

                 <p className="text-lg">
                {Array(500)
                   .fill('Scrollable Content Here ')
                   .join('')}
                  </p>
            </div>
       </div>
    );
};

export default Home;





//get staticProps

export const getStaticProps: GetStaticProps<UserDetailsProps> = async () => {
  const responce =await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await responce.json()

  return{
    props:{
        users:data
    }
  }
}

//display single user details 
//use [userId].tsx
//and define all code there 