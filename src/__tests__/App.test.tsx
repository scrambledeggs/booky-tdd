import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('UI components', () => {
  it('should render Add button', () => {
    // Arrange
    render(<App />)

    // Act
    const addButton = screen.getByText('Add')

    // Assert
    expect(addButton).toBeDefined()
  })

  it('should render Remove button', () => {
    // Arrange
    render(<App />)

    // Act
    const removeButton = screen.getByText('Remove')

    // Assert
    expect(removeButton).toBeDefined()
  })
})
