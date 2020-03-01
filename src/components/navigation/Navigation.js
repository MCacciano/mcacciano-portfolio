import React from 'react'

import { Nav, Logo, Ul, Li, GLink } from './Navigation.styles'

const Navigation = () => {
  return (
    <Nav>
      <div>
        <Logo>
          <GLink to="/">Michael Cacciano</GLink>
        </Logo>
        <Ul>
          <Li>
            <GLink to="/work">Work</GLink>
          </Li>
          <Li>
            <GLink to="/blog">Blog</GLink>
          </Li>
          <Li>
            <GLink to="/about">About</GLink>
          </Li>
        </Ul>
      </div>
    </Nav>
  )
}

export default Navigation
