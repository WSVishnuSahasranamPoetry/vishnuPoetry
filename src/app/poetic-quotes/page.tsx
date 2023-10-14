import PoetrySimpleEl from '@/components/client-components/poetry-simple-elemement'
import React from 'react'

const PoeticQuotes = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
        <div className="items-center flex-col justify-center h-full sm:mt-12  min-w-[70vw] flex relative">
          <h1 className="font-bold text-2xl">Стихи цитаты из вед</h1>
          <PoetrySimpleEl key={1} />
        </div>
      </main>
  )
}

export default PoeticQuotes