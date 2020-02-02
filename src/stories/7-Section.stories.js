import React from 'react'
import Section from '../components/Section'
import Text from '../components/Text'
import theme from '../config/theme'

export default {
  title: 'Section',
  component: Section
}

export const Normal = () =>
  <div
    style={{
      backgroundColor: theme.colors.background,
      padding: 80,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      minHeight: '100vh'
    }}
  >
    <Section title='Section title'>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at aut dignissimos dolores eaque eius illum incidunt laboriosam nemo odit, pariatur perspiciatis quis quisquam, sed, temporibus? At doloremque nesciunt ullam!
      </Text>
    </Section>
  </div>
