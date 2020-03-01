import styled from 'styled-components'
import { animated } from 'react-spring'

export const Tile = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #0e0d0d;
  border-radius: 5px;
  color: #f7f7f7;

  z-index: 1;
  position: relative;
  background-size: cover;
  background-image: url(${props => props.bg});

  h2 {
    font-size: 2rem;
    letter-spacing: 1px;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
`
