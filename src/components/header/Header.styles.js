import { Link } from 'gatsby'
import styled from 'styled-components'

import { animated } from 'react-spring'

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background: url(./hero-2.jpg);
  background-size: cover;
  position: relative;
  z-index: 1;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    /* background: linear-gradient(to right bottom, #0066ff, rgba(0, 0, 0, 0.2), #3366cc, rgba(0, 0, 0, 0.5), #58ae58),
      rgba(0, 0, 0, 0.3); */
    top: 0;
    left: 0;
    z-index: -1;
  }
`

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

export const H1 = styled.h1`
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

export const Container = styled.div`
  flex: 1;
  width: 100%;
  padding: 50px;
  color: #f7f7f7;

  > div {
    display: flex;
    justify-content: center;

    h2 {
      font-size: 4rem;
      font-weight: 700;
    }
  }
`
