import React from 'react'
import Text from '../components/Text'

export default {
  title: 'Text',
  component: Text
}

export const Normal = () =>
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus distinctio enim, eum facilis impedit incidunt laudantium odit pariatur quasi! Architecto dicta error ex iure nisi nulla perferendis temporibus veniam? Ad architecto autem cupiditate delectus dolor dolorum eos esse id iste labore magnam minus odit officia omnis quam ratione, veniam. Architecto dolor est excepturi harum illo iusto laboriosam, quo rem vitae. Aliquam architecto asperiores dolor eius odio quasi tenetur unde! Dolor doloremque est magni, officia perferendis porro qui recusandae. A aut consectetur dolore eveniet harum iste, magni maxime, minima nisi quod repellat reprehenderit similique totam. Assumenda at quasi quod rem ullam.
  </Text>

export const WithCustomElement = () =>
  <Text as='span'>
    This is the same component, but rendered as a `span` component.
  </Text>