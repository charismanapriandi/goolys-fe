import styled from "styled-components";

const FormError = styled('div')(({theme}) => ({
  color: theme.colors.dark.alert.error.text,
  fontSize: '14px',
}))

export default FormError;