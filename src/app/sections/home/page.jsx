import React from 'react'
import AppBar from '../../../components/appBar'
import Banner from '../../../components/banner'
import Category from '../../../components/category'
import Burges from './../../../components/burges';
import BannerSecudary from '../../../components/bannerSecudary';
import FoodList from '../../../components/foodList';

export default function Home() {
  return (
    <div className='w-full h-full flex flex-col m-auto gap-6'> 
      <AppBar/> 
      <Banner/>
      <Burges />
      <BannerSecudary />
      <Category/>
      <FoodList />
      
    </div>
  )
}
