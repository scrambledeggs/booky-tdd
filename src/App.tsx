import React, { useEffect } from 'react'
import type { FC } from 'react'

const App: FC = () => {
  const hatdog = 'hello hatdog'

  useEffect(() => {
    console.log(hatdog)
  }, [])

  return (
    <div className="bg-red-400">
      <p className="bg-blue-200">Hello Booky</p>
    </div>
  )
}

export default App
