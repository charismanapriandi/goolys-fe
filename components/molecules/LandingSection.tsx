import React, { FC } from "react";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";

const Root = styled.div(({theme}) => ({
  marginTop: '144px',
  '.landing_section-title_container': {
    marginBottom: '28px',
  },
  '.landing_section-title': {
    fontSize: '30px',
    fontWeight: 700,
    color: theme.colors.dark.font[2],
    textTransform: "capitalize",
    [`${breakpoint('md')}`]: {
      fontSize: '36px',
    }
  },
  '.landing_section-subtitle': {
    fontSize: '16px',
    color: theme.colors.dark.font[4],
    fontWeight: 700,
    marginTop: '8px',
    [`${breakpoint('md')}`]: {
      fontSize: '18px',
    }
  }
}))

interface Props {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const LandingSection: FC<Props> = ({title, children, subtitle}) => {
  return (
    <Root>
      <div className="landing_section-title_container">
        <h2 className="landing_section-title">{title}</h2>
        {subtitle && <p className="landing_section-subtitle">{subtitle}</p>}
      </div>
      {children}
    </Root>
  )
}

export default LandingSection;