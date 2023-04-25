import Link from 'next/link'
import React from 'react'
import { RiArrowLeftSLine, RiMore2Fill } from 'react-icons/ri'

import CardCart from '../../../components/ui/card/cardCart'

import ImgFoodFirsh from "/public/assets/food1.png";

export default function Bag() {
  return (
    <div className='flex flex-col gap-6'>
      <nav className='m-auto p-0 w-full bg-orange-50 flex flex-row items-center justify-between'>
        <div><Link href={'/'}> <RiArrowLeftSLine size={28} /> </Link></div>
        <div className='text-2xl font-semibold'>Meu carrinho</div>
        <div><RiMore2Fill size={28}/></div>
      </nav>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-row items-center justify-between'>
          <p><span>4</span> Itens</p>
          <Link href='/' className='bg-white py-2 px-5 text-xs rounded-3xl shadow-sm'>Add mais</Link>
        </div>
        <ul className='flex flex-col gap-4'>
          <li>
            <CardCart alt={'Image Lanches'} srcImage={ImgFoodFirsh} title={'Big Burger'} price={'7,59'}/>
          </li>
          <li>
            <CardCart alt={'Image Lanches'} srcImage={ImgFoodFirsh} title={'Big Burger'} price={'7,59'}/>
          </li>
          <li>
            <CardCart alt={'Image Lanches'} srcImage={ImgFoodFirsh} title={'Big Burger'} price={'7,59'}/>
          </li>
          <li>
            <CardCart alt={'Image Lanches'} srcImage={ImgFoodFirsh} title={'Big Burger'} price={'7,59'}/>
          </li>
          <li>
            <CardCart alt={'Image Lanches'} srcImage={ImgFoodFirsh} title={'Big Burger'} price={'7,59'}/>
          </li>
        </ul>
      </div>
    </div>
  )
}