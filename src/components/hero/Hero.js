import PropTypes from 'prop-types'
import React from 'react'

// styled components
import { HeroContainer, HeroCopy, Span, SocialList, SocialListItem, SocialLink } from './Hero.styles'
// rgba(226, 192, 68, 0.5)
const Hero = () => {
  return (
    <HeroContainer>
      <HeroCopy>
        <Span isLarge={true} fontSize="4" bgwidth="85" bg="rgba(21, 122, 180, .7)">
          Front{' '}
        </Span>
        <Span isLarge={true} fontSize="4" bgwidth="85" bg="rgba(21, 122, 180, .7)">
          End{' '}
        </Span>
        <Span isLarge={true} fontSize="4" bgwidth="85" bg="rgba(21, 122, 180, .7)">
          Developer{' '}
        </Span>
        with a{' '}
        <Span fontSize="3.25" bgwidth="85" bg="rgba(21, 122, 180, .7)">
          passion{' '}
        </Span>
        for creating{' '}
        <Span fontSize="3.25" bgwidth="85" bg="rgba(21, 122, 180, .7)">
          cool{' '}
        </Span>
        and{' '}
        <Span fontSize="3.25" bgwidth="85" bg="rgba(21, 122, 180, .7)">
          simplistic{' '}
        </Span>
        things on the web
      </HeroCopy>
      <SocialList>
        <SocialListItem>
          <SocialLink to="/">
            <i className="fab fa-github fa-2x github" />
          </SocialLink>
        </SocialListItem>
        <SocialListItem>
          <SocialLink to="/">
            <i className="fab fa-twitter fa-2x twitter" />
          </SocialLink>
        </SocialListItem>
        <SocialListItem>
          <SocialLink to="/">
            <i className="fab fa-linkedin fa-2x linkedin" />
          </SocialLink>
        </SocialListItem>
        <SocialListItem>
          <SocialLink to="/">
            <i className="fab fa-instagram fa-2x instagram" />
          </SocialLink>
        </SocialListItem>
      </SocialList>
    </HeroContainer>
  )
}

export default Hero
