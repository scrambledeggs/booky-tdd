import React, { useState, useCallback } from 'react'
import type { FC } from 'react'

const App: FC = () => {
  const [contacts, setContacts] = useState<Array<string>>([])
  const [contactName, setContactName] = useState<string>('')

  const onInputChange = useCallback(({ target: { value } }) => {
    setContactName(value)
  }, [])

  const onAddContact = useCallback(() => {
    setContacts((state) => [...state, contactName] as Array<string>)
  }, [contactName])

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="flex flex-row items-center justify-around">
        <input
          className="p-2 mx-4 border-2 border-gray-400 rounded-md"
          type="text"
          placeholder="Contact name"
          value={contactName}
          onChange={onInputChange}
        />
        <button
          onClick={onAddContact}
          className="w-24 bg-blue-400 h-11 rounded-md"
        >
          <p className="text-white">Add</p>
        </button>
        <button className="w-24 m-2 bg-blue-400 h-11 rounded-md">
          <p className="text-white">Remove</p>
        </button>
        <button className="w-24 bg-blue-400 h-11 rounded-md">
          <p className="text-white">Clear</p>
        </button>
      </div>
      <div className="flex flex-col mt-4">
        <p>List of Contacts</p>
        {contacts.map((c) => (
          <p key={c}>{c}</p>
        ))}
      </div>
    </div>
  )
}

export default App
