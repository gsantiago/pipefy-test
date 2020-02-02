import React from 'react'
import styled from 'styled-components'
import Text from './Text'
import theme from '../config/theme'

export default function FormGroup (props: FormGroupProps) {
  const {
    label,
    htmlFor,
    children,
    error,
    ...rest
  } = props

  return (
    <Container {...rest}>
      <Text as='label' htmlFor={htmlFor}>
        {label}
      </Text>
      <Content>
        {children}
      </Content>
      {error && (
        <Text
          as='label'
          htmlFor={htmlFor}
          style={{
            color: theme.colors.error,
            fontSize: 12
          }}
        >
          {error}
        </Text>
      )}
    </Container>
  )
}

export interface FormGroupProps {
  label: string
  htmlFor: string
  error?: string
  children: React.ReactChild
}

const Container = styled.div`
  & + & {
    margin-top: 20px;
  }
`

const Content = styled.div`
  margin-top: 3px;
  margin-bottom: 1px;
`