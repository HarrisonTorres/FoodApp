import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export default function Banner() {
  return (
    <div className='w-full p-5 rounded-2xl bg-orange-400 bg-opacity-40 flex flex-row '>
        <div className='w-full mt-6 flex flex-col gap-2 flex-1'>
            <h2 className='text-sm font-bold '>
                Delivery mais rapido.
            </h2>
            <Link href='./' className='bg-orange-400 pt-1 pb-1 pl-2 pr-2 rounded-lg flex justify-center items-center w-auto'>
                <span className='text-white'>Pedir agora</span>
            </Link>
        </div>
        <div className='flex-1 flex justify-center items-center'>
            <Image src={'/assets/delivery.png'} width={999} height={999}/>
        </div>
    </div>
  )
}
