import BrandCard from "@/molecules/BrandCard";
import LandingSection from "@/molecules/LandingSection";
import LandingSubSection from "@/molecules/LandingSubSection";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";

const Root = styled.div(({theme}) => ({
  '.landing_sub_section-list': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    [`${breakpoint('md')}`]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    }
  }
}))

const Skill = () => {
  return (
    <Root>
      <LandingSection title={'Skill'} subtitle={'hallo'}>
        <LandingSubSection title="Programming Language">
          <div className="landing_sub_section-list">
            <BrandCard image="/" brand="Next.Js" accent="black" />
            <BrandCard image="/" brand="Next.Js" accent="black" />
            <BrandCard image="/" brand="Next.Js" accent="black" />
            <BrandCard image="/" brand="Next.Js" accent="black" />
          </div>
        </LandingSubSection>
      </LandingSection>
    </Root>
  )
}

export default Skill;