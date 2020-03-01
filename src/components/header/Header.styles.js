import styled from 'styled-components'

export const HeroHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  background: url(./hero-2.jpg);
  background-size: cover;
  background-position: top;
  position: relative;
  margin-top: -80px;
  padding-top: 80px;
  /* z-index: -1; */

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    top: 0;
    left: 0;
    /* z-index: -2; */
  }
`

export const HeroCopy = styled.p`
  font-size: 2rem;
  font-weight: 100;
  margin: 1rem auto;
  color: #f7f7f7;
  width: 60vw;
  min-width: 780px;
  text-align: center;

  @media screen and (max-width: 660px) {
    font-size: 1.75rem;
    width: 75vw;
  }

  @media screen and (max-width: 550px) {
    font-size: 1.5rem;
    width: 75vw;
    min-width: 300px;
  }
`
