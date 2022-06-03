import Container from "@/atoms/Container";
import ProjectList from "@/molecules/ProjectList";
import usePosition from "hook/usePosition";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";

const Root = styled.div(({theme}) => ({
  padding: '200px 0',
  [`${Container}`]: {
    position: 'relative',
  },
  ".landing-section_title": {
    position: 'absolute',
    margin: 0,
    top: '50%',
    right: '-7%',
    transform: 'translate(0, -50%)',
    writingMode: "vertical-lr",
    [`${breakpoint('md')}`]: {
      writingMode: "horizontal-tb",
      left: '-60px',
      right: 'auto',
    },
  },
  "ul": {
    "li": {
      marginBottom: '10px',
      ":nth-child(1)": {
        [`${breakpoint('md')}`]: {
          marginLeft: '40%',
        }
      },
      ":nth-child(2)": {
        [`${breakpoint('md')}`]: {
          marginLeft: '20%',
        }
      },
      ":nth-child(3)": {
        [`${breakpoint('md')}`]: {
          marginLeft: '50%',
        }
      },
      ":nth-child(4)": {
        [`${breakpoint('md')}`]: {
          marginLeft: '30%',
        }
      },
      ":nth-child(5)": {
        [`${breakpoint('md')}`]: {
          marginLeft: '10%',
        }
      },
      ":last-child": {
        marginBottom: 0,
      }
    }
  }
}))

const ProjectSection = () => {
  const posY = usePosition();

  return (
    <Root className='work-root'>
      <Container>
        <h2 style={{transform: `translate(0, calc(-50% - ${posY / 20}px))`}} className='landing-section_title'>Latest Work</h2>
        <ul style={{transform: `translate(0, ${posY / 30}px)`}}>
          <li><ProjectList image='' title='Intresno' /></li>
          <li><ProjectList image='' title='Restaurant Association Singapore' /></li>
          <li><ProjectList image='' title='Wecognition' /></li>
          <li><ProjectList image='' title='Football Association Singapore' /></li>
          <li><ProjectList image='' title='Royal Entertainment' /></li>
        </ul>
      </Container>
    </Root>
  )
}

export default ProjectSection;