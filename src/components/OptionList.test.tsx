import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import OptionList from './OptionList'

const options = [
  { label: 'HTML', value: 'html' },
  { label: 'CSS', value: 'css' },
  { label: 'JavaScript', value: 'js' },
  { label: 'TypeScript', value: 'ts' },
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' }
]

it('renders without crashing', () => {
  render(
    <OptionList
      type='radio'
      onChange={value => null}
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' }
      ]}
    />
  )

  render(
    <OptionList
      type='checkbox'
      onChange={value => null}
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' }
      ]}
      value={[]}
    />
  )
})

describe('type radio', () => {
  it('triggers `onChange` with a single string as value', () => {
    const spy = jest.fn()
    const { getByText } = render(
      <OptionList
        type='radio'
        options={options}
        onChange={spy}
      />
    )

    fireEvent.click(getByText('TypeScript'))
    expect(spy).toHaveBeenCalledWith('ts')

    fireEvent.click(getByText('Angular'))
    expect(spy).toHaveBeenCalledWith('angular')
  })

  it('triggers `onChange` with null as value', () => {
    const spy = jest.fn()
    const { getByText } = render(
      <OptionList
        type='radio'
        options={options}
        onChange={spy}
        value='react'
      />
    )

    fireEvent.click(getByText('React'))
    expect(spy).toHaveBeenCalledWith(null)
  })
})

describe('type checkbox', () => {
  it('triggers `onChange` with an array of a single value', () => {
    const spy = jest.fn()
    const { getByText } = render(
      <OptionList
        type='checkbox'
        options={options}
        onChange={spy}
        value={[]}
      />
    )

    fireEvent.click(getByText('CSS'))
    expect(spy).toHaveBeenCalledWith(['css'])
  })

  it('triggers `onChange` with an array of values', () => {
    const spy = jest.fn()
    const { getByText } = render(
      <OptionList
        type='checkbox'
        options={options}
        onChange={spy}
        value={['html', 'css', 'js']}
      />
    )

    fireEvent.click(getByText('CSS'))
    expect(spy).toHaveBeenCalledWith(['html', 'js'])

    fireEvent.click(getByText('Vue'))
    expect(spy).toHaveBeenCalledWith(['html', 'css', 'js', 'vue'])
  })

  it('triggers `onChange` with an empty array', () => {
    const spy = jest.fn()
    const { getByText } = render(
      <OptionList
        type='checkbox'
        options={options}
        onChange={spy}
        value={['js']}
      />
    )

    fireEvent.click(getByText('JavaScript'))
    expect(spy).toHaveBeenCalledWith([])
  })
})