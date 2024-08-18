"use client"

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

type PoetryNameElProps = {
  name: string;
  text: string;
  index: number | undefined;
  id: string
}

const PoetryNameEl = ({name, text, index, id}:PoetryNameElProps) => {

  const router = useRouter();

  const [supabase] = useState(() => createBrowserSupabaseClient());


  return (
    <div className='bg-white/70 min-w-[400px] p-4 my-3'>
        <div className='w-full flex text-2xl'>
            <span className='text-4xl mr-4 font-bold text-orange-600/50'>
                {index}
            </span>
              {name}
            </div>  
        <div className='text-sm p-4 whitespace-pre-wrap text-center sm:text-sm  font-bold'>{text}</div>
    </div>
  )
}

export default PoetryNameEl