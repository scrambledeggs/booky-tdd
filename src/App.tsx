import React, { useState, useCallback, HtmlHTMLAttributes } from 'react'
import type { FC } from 'react'

const App: FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [groceryList, setGroceryList] = useState<Array<string>>([])

  const onTextInputChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setInputValue(e.currentTarget.value)
    },
    [],
  )

  const onAddButtonPress = useCallback(() => {
    setGroceryList((i) => [...i, inputValue as string])
  }, [inputValue])

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="flex flex-row">
        <input
          value={inputValue}
          onChange={onTextInputChange}
          className="p-2 border-2 border-gray-200 rounded-sm"
          placeholder="Item name"
        />
        <button
          onClick={onAddButtonPress}
          className="p-2 ml-2 bg-blue-400 rounded-md"
        >
          <p className="text-white">Add</p>
        </button>

        <button className="p-2 ml-2 bg-blue-400 rounded-md">
          <p className="text-white">Remove</p>
        </button>

        <button className="p-2 ml-2 bg-blue-400 rounded-md">
          <p className="text-white">Clear</p>
        </button>
      </div>
      {groceryList.map((i, index) => (
        <p key={index.toString()}>{i}</p>
      ))}
    </div>
  )
}

export default App
