import React from 'react'
import styled from 'styled-components'
import Heading from './Heading'

export default function Section (props: SectionProps) {
  const {
    title,
    children,
    ...rest
  } = props

  return (
    <Container {...rest}>
      <Heading>{title}</Heading>
      <div style={{ marginTop: 15 }}>
        {children}
      </div>
    </Container>
  )
}

export interface SectionProps {
  title: string
  children: React.ReactChild
}

const Container = styled.section`
  width: 100%;
  max-width: 600px;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(153, 169, 190, 0.3);
  border-radius: 5px;
`
