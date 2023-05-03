import React from 'react'
import AppBar from '../../../components/appBar'
import Banner from '../../../components/banner'
import Category from '../../../components/category'
import Burges from './../../../components/burges';
import BannerSecudary from '../../../components/bannerSecudary';
import FoodList from '../../../components/foodList';

export default function Home() {
  return (
    <div className='w-full h-full flex flex-col m-auto gap-6 p-6 mt-14'> 
      <nav className="fixed top-0 left-0 w-full p-2 bg-orange-50 shadow-md z-50">
          <AppBar />
      </nav>
      <Banner/>
      <Burges />
      <BannerSecudary />
      <Category />
      <FoodList />
    </div>
  )
}
