import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";

const Paper = styled('div')(({theme}) => ({
  width: '100%',
  border: `1px solid ${theme.colors.dark.border[2]}`,
  borderRadius: '16px',
  padding: '20px',
  backgroundImage: `-webkit-linear-gradient(-45deg, ${theme.colors.dark.border[2]}, ${theme.colors.dark.background[2]})`,
  ':hover': {
    backgroundImage: `-webkit-linear-gradient(-45deg, ${theme.colors.dark.background[2]}, transparent)`,
  },
  [`${breakpoint('md')}`]: {
    padding: '32px',
  },
}))

export default Paper;