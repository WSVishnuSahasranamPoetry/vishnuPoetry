"use client"

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

type PoetrySimpleElProps = {
  text: string;
  id: string
}


const PoetrySimpleEl = ({id, text}:PoetrySimpleElProps) => {

  const router = useRouter();

  const [supabase] = useState(() => createBrowserSupabaseClient());

  const [isAdmin, setIsAdmin] = useState(true);



  return (
    <div >
        <div className='w-full flex text-2xl'>
            {isAdmin && (
              <span 
                onClick={()=>{router.push(`/admin/editSimpe/${id}`)}}
                className='text-blue-700 cursor-pointer ml-auto hover:text-red-600  text-sm'
              >
                Редактировать
              </span>
            )}
            </div>  
        <div className='text-sm p-4 whitespace-pre-wrap text-center sm:text-sm  font-bold'>{text}</div>
    </div>
  )
}

export default PoetrySimpleEl