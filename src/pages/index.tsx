import Image from 'next/image'
import { Inter } from 'next/font/google'
import Signup from './components/Signup';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='mobile-only w-full h-[740px]  mobile-only bg-black'>
      <Signup />
    </main>
  )
}
