import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'
import userEvent from '@testing-library/user-event'

// Arrange
// Act
// Assert

describe('rendering UI', () => {
  it('should render text input', () => {
    // Arrange
    render(<App />)
    const textInput = screen.getByPlaceholderText('Item name')

    //Assert
    expect(textInput).toBeDefined()
  })

  it('should render add button', () => {
    // Arrange
    render(<App />)
    const addButton = screen.getByText('Add')

    // Assert
    expect(addButton).toBeVisible()
  })

  it('should render remove button', () => {
    // Arrange
    render(<App />)
    const removeButton = screen.getByText('Remove')

    // Assert
    expect(removeButton).toBeVisible()
  })

  it('should render clear button', () => {
    // Arrange
    render(<App />)
    const clearButton = screen.getByText('Clear')

    // Assert
    expect(clearButton).toBeVisible()
  })
})

describe('integration test', () => {
  describe('given that user types on textinput and presses add button', () => {
    it('should add/display inputted text to list', () => {
      // Arrange
      render(<App />)
      const textInput = screen.getByPlaceholderText('Item name')
      const addButton = screen.getByRole('button', { name: 'Add' })

      // Act
      userEvent.type(textInput, 'Egg')
      userEvent.click(addButton)

      // Assert
      const output = screen.getByText('Egg')
      expect(output).toBeVisible()
    })
  })
})
