import { Link } from 'gatsby'
import styled from 'styled-components'

import { animated } from 'react-spring'

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding-top: 1rem;
`

export const GLink = styled(Link)`
  display: block;
  padding: 12px 15px;
`

export const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
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

export const Container = styled.div`
  flex: 1;

  width: 100%;
  padding: 50px;
`
