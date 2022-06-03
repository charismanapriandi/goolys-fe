import LandingSection from "@/molecules/LandingSection"
import ProjectCard from "@/molecules/ProjectCard"
import styled from "styled-components"
import { breakpoint } from "styles/breakpoints"

const Root = styled.div(({theme}) => ({
  '.project-list': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
    [`${breakpoint('md')}`]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '28px'
    },
    [`${breakpoint('lg')}`]: {
      gap: '36px'
    }
  }
}))

const Project = () => {
  return (
    <Root>
      <LandingSection title="project">
        <ul className="project-list">
          <ProjectCard image="/" name="Intresno" description="responsive web design" />
          <ProjectCard image="/" name="Intresno" description="responsive web design" />
          <ProjectCard image="/" name="Intresno" description="responsive web design" />
          <ProjectCard image="/" name="Intresno" description="responsive web design" />
        </ul>
      </LandingSection>
    </Root>
  )
}

export default Project