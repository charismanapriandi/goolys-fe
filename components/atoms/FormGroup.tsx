import styled from "styled-components";
import FormError from "./FormError";

const FormGroup = styled('div')(({theme}) => ({
  'label': {
    marginBottom: '8px',
    color: theme.colors.dark.font[3],
    textTransform: "capitalize",
    fontSize: '16px',
    display: 'block'
  },
  [`
  input[type="text"], 
  input[type="password"], 
  input[type="email"]`]: {
    border: `1px solid ${theme.colors.dark.border[2]}`,
    backgroundImage: `-webkit-linear-gradient(-45deg, ${theme.colors.dark.border[2], theme.colors.dark.background[1]})`,
    backgroundColor: 'transparent',
    fontSize: '16px',
    color: theme.colors.dark.font[2],
    padding: '14px',
    borderRadius: '12px',
    width: '400px',
    transition: theme.transition.easeInOut(.3),
    display: 'block',
    ':focus': {
      outline: 'none',
      boxShadow: `0 0 0 1px ${theme.colors.dark.font[1]}`
    }
  },
  [FormError]: {
    marginTop: '8px',
  }
}))

export default FormGroup;