import PropTypes from 'prop-types'
import React from 'react'

// components
import Navigation from '../navigation/Navigation'
import PageTileList from '../page-tile-list/PageTileList'

// styled components
import { HeroHeader, HeroContent, HeroTitle, HeroCopy, HeroTitleContainer, Span, Wrapper } from './Header.styles'

const Header = ({ siteTitle }) => {
  return (
    <HeroHeader>
      <HeroCopy>Front End Developer with a passion for creating cool and simplistic things on the web.</HeroCopy>
      <PageTileList />
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
