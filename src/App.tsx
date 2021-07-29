import React, { useState, useCallback } from 'react'
import type { FC } from 'react'

const App: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <p className="text-3xl animate-bounce">Hello Eggplant 🍆</p>
      <p className="mt-4 text-xl">Welcome to our first TDD Session</p>
      <p className="text-md">
        Edit <code>src/App.tsx</code> and save to reload
      </p>
    </div>
  )
}

export default App
