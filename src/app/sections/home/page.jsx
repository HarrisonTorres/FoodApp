import React from 'react'
import AppBar from './sections/appBar'
import Banner from './sections/banner'
import Category from './sections/category'
import Burges from './sections/burges';
import BannerSecudary from './sections/bannerSecudary';
import FoodList from './sections/foodList';

export default function Home() {
  return (
    <div className='w-full h-full flex flex-col m-auto gap-6 p-6 mt-14'> 
      <div className="fixed top-0 left-0 w-full p-2 bg-orange-50 shadow-md z-50">
          <AppBar />
      </div>
      <Banner/>
      <Burges />
      <BannerSecudary />
      <Category />
      <FoodList />
    </div>
  )
}
