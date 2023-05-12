import React,{useContext} from 'react';

import ServiceListCart from '../componnet/list'

import { CartContext, CartProvider } from '@/app/contexts/cartContext';
import Link from 'next/link';

const ListCartItems: React.FC = () => {

  

  return (
    <CartProvider>
      <div className='flex flex-col gap-4' >
        <ServiceListCart />
      </div>
    </CartProvider>
    )
}
export default ListCartItems;