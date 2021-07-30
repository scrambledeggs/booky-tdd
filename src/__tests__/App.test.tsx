import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

describe('User interactions', () => {
  beforeEach(() => {
    render(<App />)
  })

  describe('given that I type in input textbox and press the Add button', () => {
    it('should add my inputted item to the list', () => {
      // Arrange
      const input = screen.getByRole('textbox')
      const addButton = screen.getByRole('button', { name: 'Add' })

      // Act
      userEvent.type(input, 'talong')
      userEvent.click(addButton)

      // Assert
      const talong = screen.getByText('talong')

      expect(talong).toBeVisible()
    })
  })

  it.todo('should remove from list')
  it.todo('should clear list')
})
