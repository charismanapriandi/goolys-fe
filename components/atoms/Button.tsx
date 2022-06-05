import styled from "styled-components";

const Button = styled('button')(({theme}) => ({
  border: `none`,
  backgroundColor: theme.colors.dark.font[1],
  fontSize: '16px',
  color: theme.colors.dark.background[1],
  fontWeight: 700,
  padding: '14px',
  borderRadius: '12px',
  width: '400px',
  cursor: 'pointer',
  transition: theme.transition.easeInOut(.3),
  ':hover, :focus': {
    backgroundColor: 'transparent',
    outline: 'none',
    color: theme.colors.dark.font[1],
    boxShadow: `0 0 0 1px ${theme.colors.dark.font[1]}`
  }
}))

export default Button;