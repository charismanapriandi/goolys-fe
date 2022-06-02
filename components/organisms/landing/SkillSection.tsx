import Container from "@/atoms/Container";
import SkillCard from "@/molecules/SkillCard";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";

const Root = styled.div(({theme}) => ({
  padding: `200px 0`,
  position: 'relative',
  [`${Container}`]: {
    position: 'relative',
    display: "flex"
  },
  '.landing-section_title': {
    position: 'absolute',
    top: '50%',
    right: 'auto',
    left: '-7%',
    transform: 'translate(0, -50%)',
    writingMode: "vertical-lr",
    [`${breakpoint('md')}`]: {
      writingMode: "horizontal-tb",
      right: '-60px',
      left: 'auto',
      textAlign: 'right',
    },
    'h2': {
      fontSize: '100px',
      margin: 0,
      [`${breakpoint("md")}`]: {
        fontSize: '150px',
      },
      [`${breakpoint('lg')}`]: {
        fontSize: '200px',
      }
    },
    "p": {
      fontSize: '30px',
      margin: 0,
      [`${breakpoint("md")}`]: {
        fontSize: '45px',
      },
      [`${breakpoint('xl')}`]: {
        fontSize: '60px'
      }
    },
  },
  'ul': {
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 100px)',
    gap: '20px 30px',
    marginLeft: 'auto',
    alignContent: "flex-end",
    [`${breakpoint('sm')}`]: {
      gridTemplateColumns: 'repeat(3, 100px)',
    },
    [`${breakpoint('md')}`]: {
      gridTemplateColumns: 'repeat(3, 200px)',
      gap: '40px 60px',
      marginLeft: 0,
    },
    '.skill_card-root': {
      width: '100px',
      [`${breakpoint('md')}`]: {
        width: '200px',
      } 
    }
  }
}))

const SkillSection = () => {
  return (
    <Root className="skill_section-root">
      <Container>
        <div className='landing-section_title'>
          <h2>Mastered</h2>
          <p>Skill | Tools | Tekhnologies</p>
        </div>
        <ul>
          <li><SkillCard image='/assets/redux.png' name='redux' /></li>
          <li><SkillCard image='/assets/redux.png' name='redux' /></li>
          <li><SkillCard image='/assets/redux.png' name='redux' /></li>
          <li><SkillCard image='/assets/redux.png' name='redux' /></li>
          <li><SkillCard image='/assets/redux.png' name='redux' /></li>
          <li><SkillCard image='/assets/redux.png' name='redux' /></li>
        </ul>
      </Container>
    </Root>
  )
}

export default SkillSection;
