import React from 'react'
import { Container } from 'components'
import {
  GreetSection,
  ServiceSection,
  AdvantagesSection,
  OpinionSection
} from './components'

export default function Landing (): JSX.Element {
  return (
    <Container>
      {/* Greeting Section */}
      <GreetSection />

      {/* Services Section */}
      <ServiceSection />

      {/* Advantages Section */}
      <AdvantagesSection />

      {/* Opinion Section */}
      <OpinionSection />
    </Container>
  )
}
