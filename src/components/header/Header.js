import PropTypes from 'prop-types'
import React from 'react'

// styled components
import { StyledHeader, Nav, H1, Ul, Li, GLink, Container } from './Header.styles'
import { useSpring, animated } from 'react-spring'

const Header = ({ siteTitle }) => {
  const tester = useSpring({
    transform: 'translateX(0)',
    from: { transform: 'translateX(-50px)' },
  })

  return (
    <StyledHeader>
      <Nav>
        <H1>
          <GLink>{siteTitle}</GLink>
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
      </Nav>
      <Container>
        <animated.h2 style={tester}>header content</animated.h2>
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