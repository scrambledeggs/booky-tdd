import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

it('should render App', () => {
  render(<App />)
  const title = screen.getByText('Hello Eggplant 🍆')
  expect(title).toBeDefined()
})
