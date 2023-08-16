import Image from 'next/image'
import { Inter } from 'next/font/google'
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';
import Tailwind from './components/Tailwind';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='w-full h-screen bg-gradient-to-r  overflow-y-scroll'>
      <Signup />
    </main>
  )
}
