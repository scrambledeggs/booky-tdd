import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

describe('UI functionality', () => {
  // Arrange
  // Act
  // Assert

  describe('given that a user inputs a name and clicks the Add button', () => {
    it('should add the inputted name to the list', async () => {
      // Arrange
      render(<App />)
      const inputField = screen.getByRole('textbox')
      const addButton = screen.getByRole('button', { name: 'Add' })

      // Act
      userEvent.type(inputField, 'Jett Andres')
      userEvent.click(addButton)

      // Assert
      const contactList = await screen.findByText('Jett Andres')

      expect(contactList).toBeInTheDocument()
    })
  })
})
