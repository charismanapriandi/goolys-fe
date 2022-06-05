import Button from "@/atoms/Button";
import Paper from "@/atoms/Paper";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

const Root = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  minHeight: '100vh',
  gap: '20px',
  '.private_page_blocker-message': {
    color: theme.colors.dark.font[1],
  }
}))

interface Props {
  message?: string;
}

const PrivatePageBlocker: FC<Props> = ({message}) => {
  return (
    <Root>
      {message ? (
        <>
          <h1 className="private_page_blocker-message">{message}</h1>
          <Link href={'/auth/login'} passHref>
            <Button>Login</Button>
          </Link>
        </>
      ) : (
        <h1 className="private_page_blocker-message">Please Wait...</h1>
      )}
    </Root>
  )
}

export default PrivatePageBlocker;