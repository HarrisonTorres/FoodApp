import React from 'react'
import AppBar from '../../../components/appBar'
import Banner from '../../../components/banner'
import Category from '../../../components/category'
import Burges from './../../../components/burges';
import BannerSecudary from '../../../components/bannerSecudary';
export default function Home() {
  return (
    <div className='w-full h-full flex flex-col m-auto gap-6'> 
      <AppBar/> 
      <Banner/>
      <Category/>
      <Burges />
      <BannerSecudary />
      <footer className='h-16'/>
    </div>
  )
}
