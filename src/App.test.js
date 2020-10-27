import { render, screen } from '@testing-library/react'
import { shallow } from 'enzyme'
import App from './App'

test('renders Hello! and tests with RTL', () => {
  render(<App />)
  const linkElement = screen.getByText(/Hello!/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders Hello! and tests with Enzyme', () => {
  const wrapper = shallow(<App />)

  expect(wrapper.text()).toContain('Hello!')
})
