import Button from "@/atoms/Button";
import Container from "@/atoms/Container";
import MyIcons from "@/atoms/MyIcons";
import { API_ROUTES, instance } from "@/config/axios";
import MyForm from "@/organisms/index";
import Link from "next/link";
import styled from "styled-components";

const Root = styled.div(({theme}) => ({
  display: 'flex',
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  '.login-header': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '28px',
    '.login-back': {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      fontSize: '16px',
      color: theme.colors.dark.font[3],
      transition: theme.transition.easeInOut(.3),
      ':hover': {
        color: theme.colors.dark.font[1]
      }
    },
    '.login-title': {
      fontSize: '24px',
      fontWeight: 700,
      textTransform: 'uppercase',
      color: theme.colors.dark.font[1],
    }
  }
}))

const Login = () => {
  
  return (
    <Root>
      <Container>
        <div className="login-header">
          <Link href={'/'} passHref>
            <div className="login-back">
              <MyIcons.ChevronLeft size={24} />
              back
            </div>
          </Link>
          <h1 className="login-title">Login</h1>
        </div>
        <MyForm.Login />
      </Container>
    </Root>
  )
}

export default Login;