import styled, { useTheme } from "styled-components"
import Row from "../atoms/Row";
import Typography from "@/atoms/Typography";
import MyIcon from "../atoms";

const Root = styled('nav')(({theme}) => ({
  position: 'fixed',
  zIndex: '1000',
  width: '100%',
  top: 0,
  left: 0,
  backdropFilter: 'blur(20px)',
  background: 'rgba(29,29,31,0.72)',
  borderBottom: '1px solid #3D3D3D',
  padding: '20px 0',
}))

const Header = () => {
  const theme = useTheme()
  
  return (
    <Root>
      <Row className="global-container" alignItems="center" justifyContent="space-between">
        <Typography 
          color={theme.colors.white.opacity[1]} 
          fontSize={24}
          fontWeight={800}>Goolys.</Typography>
        <MyIcon.Menu />
      </Row>
    </Root>
  )
}

export default Header;