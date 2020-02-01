import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import theme from '../config/theme'

library.add(fas)

export default function Icon (props: FontAwesomeIconProps) {
  return (
    <FontAwesomeIcon
      color={theme.colors.icon}
      {...props}
    />
  )
}
