import Link from 'next/link';
import React from 'react';



function CtaButtons({title}) {
  return (
    <button className='text-xl font-normal py-4 w-full bg-orange-400 rounded-full text-white'>
        {title}
    </button>
    )
}

export default CtaButtons;