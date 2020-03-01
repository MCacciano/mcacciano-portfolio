import PropTypes from 'prop-types'
import React from 'react'

// components
import PageTile from '../page-tile/PageTile'

// styled components
import { StyledHeader, Nav, H1, Ul, Li, GLink, Container } from './Header.styles'

const Header = ({ siteTitle }) => {
  return (
    <StyledHeader>
      <Nav>
        <div>
          <H1>
            <GLink to="/">MC</GLink>
          </H1>
          <Ul>
            <Li>
              <GLink to="/">Home</GLink>
            </Li>
            <Li>
              <GLink to="/">Work</GLink>
            </Li>
            <Li>
              <GLink to="/">Blog</GLink>
            </Li>
          </Ul>
        </div>
      </Nav>
      <Container>
        <div>
          <h2>Web Developer</h2>
        </div>
        {/* <PageTile title="Work" bg="./hero-1.jpg" />
        <PageTile title="Github" bg="./github-tile.png" />
        <PageTile title="Blog" />
        <PageTile title="Contact" /> */}
      </Container>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
