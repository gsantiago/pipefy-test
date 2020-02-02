import React from 'react'
import OptionList from '../components/OptionList'

export default {
  title: 'OptionList',
  component: OptionList
}

export const ListOfRadioButtons = () =>
  <OptionList
    type='radio'
    value='ts'
    options={[
      { label: 'JavaScript', value: 'js' },
      { label: 'TypeScript', value: 'ts' },
      { label: 'Python', value: 'py' }
    ]}
    onChange={console.log}
  />

export const ListOfCheckboxes = () =>
  <OptionList
    type='checkbox'
    value={[ 'html', 'css' ]}
    options={[
      { label: 'HTML', value: 'html' },
      { label: 'CSS', value: 'css' },
      { label: 'JavaScript', value: 'js' }
    ]}
    onChange={console.log}
  />
