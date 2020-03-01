import styled from 'styled-components'

export const HeroHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background: url(./hero-2.jpg);
  background-size: cover;
  background-position: top;
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

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  color: #f7f7f7;

  @media screen and (max-width: 1180px) {
    align-items: center;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 1180px) {
    align-items: center;
  }
`

export const HeroTitleContainer = styled.div`
  width: 40vw;
  min-width: 600px;

  @media screen and (max-width: 660px) {
    width: 75vw;
    min-width: max-content;
  }
`

export const HeroTitle = styled.h1`
  font-size: 6rem;
  font-weight: 400;
  margin-top: ${({ mtop }) => `${mtop}px`};
  padding-left: ${({ pleft }) => `${pleft}px`};

  @media screen and (max-width: 660px) {
    margin-top: ${({ mtop }) => `${parseInt(mtop) + 21}px`};
    font-size: 4.25rem;
  }

  @media screen and (max-width: 660px) {
    margin-top: ${({ mtop }) => `${parseInt(mtop) + 41}px`};
    font-size: 2.25rem;
  }
`

export const Span = styled.span`
  font-size: 12rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-right: ${({ mright }) => `${mright}px`};

  @media screen and (max-width: 660px) {
    font-size: 10rem;
  }

  @media screen and (max-width: 550px) {
    font-size: 8rem;
  }
`

export const HeroCopy = styled.p`
  font-size: 2rem;
  font-weight: 100;
  width: 40vw;
  min-width: 600px;

  @media screen and (max-width: 1180px) {
    text-align: center;
  }

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
