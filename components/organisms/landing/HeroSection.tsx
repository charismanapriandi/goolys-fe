import Container from "@/atoms/Container";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";

const Root = styled.div(({theme}) => ({
  minHeight: '100vh',
  position: 'relative',
  [Container]: {
    position: 'relative',
    minHeight: '100vh',
  },
  '.hero-content': {
    color: `${theme.colors.white.opacity[1]}`,
    fontFamily: `${theme.fontFamily.poppins}`,
    position: 'absolute',
    top: '40%',
    transform: 'translate(0, -50%)',
    right: 0,
    'span': {
      marginRight: '10px',
      fontWeight: 800,
      ':nth-child(1)': {
        fontSize: 'clamp(24px, 3vw, 34px)',
        display: 'block',
        [`${breakpoint('md')}`]: {
          display: 'inline',
        }
      },
      ':nth-child(2)': {
        fontSize: 'clamp(18px, 3vw, 24px)',
      },
      ':nth-child(3)': {
        display: 'block',
        fontSize: 'clamp(34px, 7vw, 100px)',
        lineHeight: 'clamp(40px, 8vw, 120px)',
        textTransform: 'uppercase',
      },
      ':nth-child(4)': {
        fontSize: 'clamp(24px, 3vw, 40px)',
        lineHeight: 'clamp(30px, 4vw, 51px)',
      },
      ':nth-child(5)': {
        backgroundColor: `${theme.colors.white.opacity[1]}`,
        color: `${theme.colors.black.opacity[1]}`,
        display: 'block',
        padding: '20px 60px',
        textAlign: 'center',
        [`${breakpoint('md')}`]: {
          display: 'inline',
          textAlign: 'left',
        }
      }
    }
  },
  '.hero-text_mask': {
    fontSize: 'clamp(200px, 50vw, 800px)',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: 'white',
    position: 'absolute',
    fontFamily: `${theme.fontFamily.arial}`,
    margin: 0,
    padding: 0,
    top: '70%',
    bottom: 'auto',
    left: '-15%',
    right: 'auto',
    zIndex: -1,
    backgroundPosition: 'right',
    backgroundSize: '100%',
    backgroundImage: "url('/assets/goolys.jpg')",
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    transform: 'translate(0, -50%)',
    writingMode: "vertical-lr",
    [`${breakpoint('md')}`]: {
      backgroundSize: 'auto',
      backgroundPosition: 'top center',
      writingMode: "horizontal-tb",
      top: 'auto',
      left: 'auto',
      transform: 'translate(0, 0)',
      right: '30%',
      bottom: 0,
    }
  }
}));

const HeroSection = () => {
  return (
    <Root>
      <Container>
        <p className='hero-content'>
          <span>Hey There!</span>
          <span>I&apos;m Charisman Afriandi,</span>
          <span>Base In<br/>Yogyakarta.</span>
          <span>I start my career in<br/>web development</span>
          <span>since 2019</span>
        </p>
        <p className='hero-text_mask'>Goolys.</p>
      </Container>
    </Root>
  )
}

export default HeroSection;