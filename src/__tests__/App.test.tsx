import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('UI components', () => {
  beforeAll(() => {
    render(<App />)
  })

  it('should render Add button', () => {
    const addButton = screen.getByText(/Add/i)
    expect(addButton).toBeInTheDocument()
  })
})
