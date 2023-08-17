import React from 'react'
import { GetStaticProps,GetStaticPaths } from 'next';



interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city:String,
    street:String,
    zipcode:String
  };
  phone: string;
  website: string;
}
interface UserDetailsProps {
  user: User;
}


const SingleUser :React.FC<UserDetailsProps>=({user}) => {
  return (
       <div className="bg-gradient-to-r  from-purple-500 to-pink-500 w-full h-screen flex flex-col items-center justify-center   mb-1 p-4">

      <h1 className="text-3xl text-black font-bold p-5">Single User Details</h1>
      <div className="bg-green-700 m-1 w-full p-1 rounded"> 
                        <p className="font-bold  text-[14px]">UserName:<span className="text-white tex-[12px] ms-5">{user.name}</span></p>
                        <p className="font-bold text-[14px]">Email:<span className="text-white tex-[12px] ms-5">{user.email}</span></p>
                        <p className="font-bold text-[14px]">Phone:<span className="text-white tex-[12px] ms-5">{user.phone}</span></p>
                        <p className="font-bold text-[14px]">City:<span className="text-white tex-[12px] ms-5">{user.address.city}</span></p>
                        <p className="font-bold text-[14px]">Street:<span className="text-white tex-[12px] ms-5">{user.address.street}</span></p>
                        <p className="font-bold text-[14px]">Zipcode:<span className="text-white tex-[12px] ms-5">{user.address.zipcode}</span></p>
                        <p className="font-bold text-[14px]">Website:<span className="text-white tex-[12px] ms-5">{user.website}</span></p>
    </div>
    </div>
  )
}



export default SingleUser
//define getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
  const responce =await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await responce.json()

        const paths = data.map((user: { id: string })=>{
         return{
             params:{
                userId:`${user.id}`
            }
          }
        })
        

          return{
            paths, fallback:false
          }
}


export const getStaticProps: GetStaticProps<UserDetailsProps> = async (context) => {
 const { params } = context;
if (params) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
  const data = await response.json();

  return {
    props: {
      user: data
    }
  };
} else {
  return {
    notFound: true
  };
}
}

