import Header from "@/organisms/Header"
import { FC } from "react";
import styled from "styled-components"

const Root = styled('div')(({theme}) => ({}))

interface Props {children: React.ReactNode;}

const Layout: FC<Props> = ({children}) => {
  return (
    <Root>
      <Header />
      {children}
    </Root>
  )
}

export default Layout