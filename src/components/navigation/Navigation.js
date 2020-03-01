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
  )
}

export default Navigation
