import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('UI components', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('should render Add button', () => {
    // Arrange
    const addButton = screen.getByText('Add')

    // Assert
    expect(addButton).toBeDefined()
  })

  it('should render Remove button', () => {
    // Arrange
    const removeButton = screen.getByText('Remove')

    // Assert
    expect(removeButton).toBeDefined()
  })

  it('should render Clear button', () => {
    // Arrange
    const clearButton = screen.getByText('Clear')

    // Assert
    expect(clearButton).toBeDefined()
  })

  it('should render Input textbox', () => {
    // Arrange
    const input = screen.getByRole('textbox')

    // Assert
    expect(input).toBeDefined()
  })
})
