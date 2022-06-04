import BrandCard from "@/molecules/BrandCard";
import LandingSection from "@/molecules/LandingSection";
import LandingSubSection from "@/molecules/LandingSubSection";
import { mastered } from "common/mastered";
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
        {mastered.map((section, index) => (
          <LandingSubSection key={index} title={section.section}>
            <div className="landing_sub_section-list">
              {section.items.map((item, idx) => (
                <BrandCard key={idx} href={item.href} image={item.image} brand={item.brand} accent={item.accent} />
              ))}
            </div>
          </LandingSubSection>
        ))}
      </LandingSection>
    </Root>
  )
}

export default Skill;