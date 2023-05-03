import Link from 'next/link';
import React from 'react';

import { RiArrowLeftSLine } from 'react-icons/ri';

function VoltarButton({href}) {
  return (
    <div>
        <Link href={href}>
              <RiArrowLeftSLine size={28}/>
        </Link>
    </div>
  )
}

export default VoltarButton;