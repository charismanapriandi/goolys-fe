import Brand from "@/atoms/Brand"
import styled from "styled-components"

const Root = styled.nav(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '24px 0',
}))

const Header = () => {
  return (
    <Root>
      <Brand />
    </Root>
  )
}

export default Header;