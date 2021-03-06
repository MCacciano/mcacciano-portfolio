import styled, { keyframes } from 'styled-components'

const growRight = keyframes`
  from {
    max-width: 0;
  }

  to {
    max-width: 100%;
  }
`

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(./hero-2.jpg);
  background-size: cover;
  background-position: top;
  z-index: 1;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    top: 0;
    left: 0;
    z-index: 1;
  }

  i {
    z-index: 2;
    border-radius: 50%;
    color: #f7f7f7;
    padding: 10px 12px;
    border: 1px solid #f7f7f7;

    &.github {
      background: rgba(26, 23, 23, 1);
    }

    &.twitter {
      background: rgba(29, 161, 242, 1);
    }

    &.linkedin {
      background: rgba(0, 115, 176, 1);
    }

    &.instagram {
      background: rgba(146, 63, 151, 1);
    }
  }
`

export const SocialList = styled.ul`
  display: flex;
  width: 100%;
  max-width: 300px;
  justify-content: space-between;
  margin: 40px 0;
  z-index: 2;
`

export const SocialListItem = styled.li``

export const SocialLink = styled.a``

export const HeroCopy = styled.p`
  font-size: 2.75rem;
  font-weight: 100;
  color: #f7f7f7;
  text-align: center;
  z-index: 2;
  width: 100%;
  max-width: 1100px;
  padding: 50px;

  @media screen and (max-width: 990px) {
    font-size: 2rem;
  }
`

export const Span = styled.span`
  font-size: ${({ fontSize }) => `${fontSize}rem`};
  letter-spacing: 1px;
  vertical-align: bottom;
  position: relative;
  font-weight: 300;

  &:after {
    content: '';
    position: absolute;
    top: 48%;
    left: 10%;
    width: 85%;
    height: 40%;
    background: rgba(21, 122, 180, 0.7);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
    z-index: -1;
    max-width: 0;
    animation: ${growRight} ease-in 1s forwards;
  }

  @media screen and (max-width: 1100px) {
    font-size: ${({ isLarge }) => (isLarge ? '3.25rem' : '2.75rem')};
  }

  @media screen and (max-width: 990px) {
    font-size: ${({ isLarge }) => (isLarge ? '2.75rem' : '2rem')};
  }
`
