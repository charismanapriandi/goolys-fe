import { FC } from "react";
import styled from "styled-components"

const Root = styled.div(({theme}) => ({
  marginBottom: '40px',
  '.landing_sub_section-title': {
    paddingBottom: '12px',
    marginBottom: '16px',
    borderBottom: `1px solid ${theme.colors.dark.border[1]}`,
    fontSize: '18px',
    color: theme.colors.dark.font[3]
  }
}))

interface Props {
  title: string;
  children: React.ReactNode;
}

const LandingSubSection: FC<Props> = ({title, children}) => {
  return (
    <Root>
      <h3 className="landing_sub_section-title">{title}</h3>
      {children}
    </Root>
  )
}

export default LandingSubSection;