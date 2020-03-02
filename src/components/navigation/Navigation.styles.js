import { Link } from 'gatsby'

import styled from 'styled-components'
import { animated } from 'react-spring'

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    padding: 20px 50px;
    font-weight: 400;

    @media screen and (max-width: 660px) {
      padding: 20px;
    }
  }
`

export const GLink = styled(animated(Link))`
  display: block;
  padding: 15px 20px;
  color: #f7f7f7;

  &:active {
    color: #f7f7f7;
  }

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

  @media screen and (max-width: 660px) {
    &:not(:last-child) {
      display: none;
    }
  }
`

export const BurgerMenu = styled.i`
  color: #f7f7f7;
  cursor: pointer;
  padding: 5px;

  display: none;

  @media screen and (max-width: 660px) {
    display: inline-block;
  }
`
