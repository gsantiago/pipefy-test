import React from 'react'
import Icon from '../components/Icon'

export default {
  title: 'Icon',
  component: Icon,
  parameters: {
    notes: 'This component is just a wrapper around [react-fortawesome](https://github.com/FortAwesome/react-fontawesome)'
  }
}

export const Normal = () =>
  <Icon
    icon='coffee'
  />

export const WithCustomColorAndSize = () =>
  <Icon
    icon='user'
    color='red'
    style={{ fontSize: 40 }}
  />
