import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";

const LandingStyle = styled('div')(({theme}) => ({
  '.global-container': {
    position: 'relative',
  },
  ".landing-section_title": {
    fontFamily: `${theme.fontFamily.poppins}`,
    fontWeight: 900,
    textTransform: 'uppercase',
    zIndex: '-1',
    whiteSpace: 'nowrap',
    fontSize: '100px',
    [`${breakpoint('md')}`]: {
      fontSize: '150px',
    },
    [`${breakpoint('xl')}`]: {
      fontSize: '200px',
    },
    pointerEvents: 'none',
    color: `${theme.colors.white.opacity[.2]}`,
  }
}))

export default LandingStyle;
