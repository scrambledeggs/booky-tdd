import React, { useState, useCallback } from 'react'
import type { FC } from 'react'

const App: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="flex flex-row items-center">
        <input
          className="p-4 border-2 border-gray-400 rounded-md"
          placeholder="Item name"
          type="text"
        />
        <button className="flex items-center justify-center h-4 p-6 bg-blue-400 rounded-md">
          <p className="text-white">Add</p>
        </button>
        <button className="flex items-center justify-center h-4 p-6 mx-4 bg-blue-400 rounded-md">
          <p className="text-white">Remove</p>
        </button>
        <button className="flex items-center justify-center h-4 p-6 bg-blue-400 rounded-md">
          <p className="text-white">Clear</p>
        </button>
      </div>
    </div>
  )
}

export default App
