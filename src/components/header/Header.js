import PropTypes from 'prop-types'
import React from 'react'

// components
import Navigation from '../navigation/Navigation'

// styled components
import { HeroHeader, HeroContent, HeroTitle, HeroCopy, HeroTitleContainer, Span, Wrapper } from './Header.styles'

const Header = ({ siteTitle }) => {
  return (
    <HeroHeader>
      <Navigation />
      <HeroContent>
        <Wrapper>
          <HeroTitleContainer>
            <HeroTitle>
              <Span mright="-20">W</Span>eb
            </HeroTitle>
            <HeroTitle mtop="-121" pleft="95">
              <Span mright="-12">D</Span>eveloper
            </HeroTitle>
          </HeroTitleContainer>
          <HeroCopy>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam commodi omnis blanditiis adipisci
            voluptatem sit!
          </HeroCopy>
        </Wrapper>
      </HeroContent>
    </HeroHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
