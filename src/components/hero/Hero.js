import PropTypes from 'prop-types'
import React from 'react'

// styled components
import { HeroContainer, HeroCopy, Span } from './Hero.styles'

const Hero = ({ siteTitle }) => {
  return (
    <HeroContainer>
      <HeroCopy>
        <Span isLarge={true} fontSize="4" bgwidth="85" bg="rgba(132, 169, 140, 0.4)">
          Front{' '}
        </Span>
        <Span isLarge={true} fontSize="4" bgwidth="85" bg="rgba(132, 169, 140, 0.4)">
          End{' '}
        </Span>
        <Span isLarge={true} fontSize="4" bgwidth="85" bg="rgba(132, 169, 140, 0.4)">
          Developer{' '}
        </Span>
        with a{' '}
        <Span fontSize="3.25" bgwidth="85" bg="rgba(40, 75, 99, 0.8)">
          passion{' '}
        </Span>
        for creating{' '}
        <Span fontSize="3.25" bgwidth="85" bg="rgba(239, 131, 84, 0.5)">
          cool{' '}
        </Span>
        and{' '}
        <Span fontSize="3.25" bgwidth="85" bg="rgba(191, 192, 192, 0.3)">
          simplistic{' '}
        </Span>
        things on the web
      </HeroCopy>
    </HeroContainer>
  )
}

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero
