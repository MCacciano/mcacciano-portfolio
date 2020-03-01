import { Link } from 'gatsby'

import styled from 'styled-components'
import { animated } from 'react-spring'

export const Nav = styled.nav`
  /* background: rgba(0, 0, 0, 0.8); */
  width: 100%;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin-top: 1rem;
    font-weight: 400;
  }
`

export const GLink = styled(animated(Link))`
  display: block;
  padding: 15px 20px;

  &:visited {
    color: #f7f7f7;
  }
`

export const Logo = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 1px;
`

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`

export const Li = styled.li`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
`
