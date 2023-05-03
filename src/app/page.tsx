import { Inter } from 'next/font/google'
import Home from "./sections/home/page"
import Bag from './sections/bag/page'
import menu from './sections/menu/page'




const inter = Inter({ subsets: ['latin'] })

export default function App() {
  return (
    
    <main className='max-w-screen-sm m-auto mb-20 flex justify-start'>
      <Home />
    </main>
  )
}
