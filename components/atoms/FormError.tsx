import styled from "styled-components";

const FormError = styled('div')(({theme}) => ({
  color: theme.colors.dark.alert.error,
  fontSize: '14px',
}))

export default FormError;