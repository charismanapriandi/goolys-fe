import MyForm from "@/organisms/index";
import styled from "styled-components";

const Root = styled.div(({theme}) => ({
  display: 'flex',
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center'
}))

const Login = () => {
  return (
    <Root>
      <MyForm.Login />
    </Root>
  )
}

export default Login;