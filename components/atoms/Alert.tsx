import styled from "styled-components";

type Type = 'success' | 'error';

const Alert = styled('div')<{type: Type}>(({theme, type}) => ({
  padding: '12px',
  backgroundColor: 
    type === 'error' 
    && theme.colors.dark.alert.error.background 
    || theme.colors.dark.alert.error.background,
  color: type === 'error' 
    && theme.colors.dark.alert.error.text 
    || theme.colors.dark.alert.error.text,
  border: `1px solid ${type === 'error' 
    && theme.colors.dark.alert.error.text 
    || theme.colors.dark.alert.error.text}`,
  fontSize: '14px',
  borderRadius: '12px',
}))

export default Alert;