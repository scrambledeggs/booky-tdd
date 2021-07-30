import React, { useState, useCallback } from 'react'
import type { FC } from 'react'

const App: FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [groceryList, setGroceryList] = useState<Array<string>>([])

  const onInputChange = useCallback(({ target: { value } }) => {
    setInputValue(value)
  }, [])

  const onAddButtonClick = useCallback(() => {
    setGroceryList((g) => [...g, inputValue])
  }, [inputValue])

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="flex flex-row items-center">
        <input
          className="p-4 mr-2 border-2 border-gray-400 rounded-md"
          placeholder="Item name"
          type="text"
          value={inputValue}
          onChange={onInputChange}
        />
        <button
          onClick={onAddButtonClick}
          className="flex items-center justify-center h-4 p-6 bg-blue-400 rounded-md"
        >
          <p className="text-white">Add</p>
        </button>
        <button className="flex items-center justify-center h-4 p-6 mx-4 bg-blue-400 rounded-md">
          <p className="text-white">Remove</p>
        </button>
        <button className="flex items-center justify-center h-4 p-6 bg-blue-400 rounded-md">
          <p className="text-white">Clear</p>
        </button>
      </div>
      <p>My Grocery List</p>
      <div className="flex flex-col">
        {groceryList.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  )
}

export default App
