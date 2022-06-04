import styled from "styled-components";
import FormAction from "./FormAction";
import FormGroup from "./FormGroup";

const Form = styled('form')(({theme}) => ({
  [FormGroup]: {
    marginBottom: '18px',
    ':last-child': {
      marginBottom: 0,
    }
  },
  [FormAction]: {
    marginTop: '24px'
  }
}))

export default Form;