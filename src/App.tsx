import React, { useState, useCallback } from 'react'
import type { FC } from 'react'

const App: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <button className="flex bg-blue-400 p-8 h-8 w-16 items-center justify-center rounded-md">
        <p className="text-white">Add</p>
      </button>
    </div>
  )
}

export default App
