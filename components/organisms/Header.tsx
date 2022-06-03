import styled, { useTheme } from "styled-components"
import Row from "../atoms/Row";
import Typography from "@/atoms/Typography";
import MyIcon from "../atoms";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Root = styled('nav')<{isActive:boolean}>(({theme, isActive}) => ({
  position: 'fixed',
  zIndex: '1000',
  width: '100%',
  top: 0,
  left: 0,
  backdropFilter: 'blur(20px)',
  background: 'rgba(29,29,31,0.72)',
  borderBottom: '1px solid #3D3D3D',
  padding: '20px 0',
  '.menu-root': {
    cursor: 'pointer',
    transition: 'all .2s ease-in-out',
    transform: isActive ? `translateY(-70px)` : `translateY(0)`,
  },
  [Menu]: {
    height: isActive ? `calc(100vh)` : `0vh`,
    'div, ul': {
      display: isActive ? 'block': 'none',
    }
  }
}))

const Menu = styled.div(({theme}) => ({
  display: 'flex',
  transition: theme.transition.easeInOut(.3),
  alignItems: 'center',
  '.header-menu_title': {
    backgroundImage: 'url("/assets/goolys.jpg")',
    fontSize: '200px',
    fontFamily: theme.fontFamily.poppins,
    fontWeight: 900,
    backgroundSize: '100%',
    backgroundPosition: 'bottom',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    writingMode: 'vertical-rl',
    width: '50%',
    PointerEvents: 'none',
  },
  'ul': {
    color: theme.colors.white.opacity[1],
    fontFamily: theme.fontFamily.poppins,
    fontWeight: 900,
    fontSize: '40px',
    'li': {
      textTransform: "uppercase",
      'a': {
        color: theme.colors.white.opacity[.69],
        textDecoration: 'none',
        borderBottom: `0 solid ${theme.colors.white.opacity[.69]}`,
        transition: theme.transition.easeInOut(.1),
        '&:hover': {
          borderBottom: `2px solid ${theme.colors.white.opacity[.69]}`,
        },
        ['&.header-active_link']: {
          backgroundImage: '-webkit-linear-gradient(45deg, #09CF94, #00A5D9)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          borderBottom: 'none',
          pointerEvents: 'none',
        },
        '&.header-disabled_link': {
          pointerEvents: 'none',
          borderBottom: 'none',
          color: theme.colors.white.opacity[.2]
        }
      }
    }
  }
}))

const Header = () => {
  const theme = useTheme();
  const [isActive, setIsActive] = useState<boolean>(false);
  const router = useRouter();
  
  const toggleMenu = () => setIsActive(!isActive);
  
  return (
    <>
      <Root isActive={isActive}>
        <Menu>
          {/* <div className="header-menu_title">Menu</div>
          <ul>
            <li>
              <Link href={'/'} passHref>
                <a className={router.pathname === '/' ? 'header-active_link' : ''}>Home</a>
              </Link>
            </li>
            <li>
              <Link href={'/works'} passHref>
                <a className={router.pathname === '' ? 'header-active_link' : ''}>Works</a>
              </Link>
            </li>
            <li>
              <Link href={'/skills'} passHref>
                <a className={router.pathname === '' ? 'header-active_link' : ''}>Skills</a>
              </Link>
            </li>
            <li>
              <Link href={''} passHref>
                <a className={'header-disabled_link'}>Blog</a>
              </Link>
            </li>
            <li>
              <Link href={'/'} passHref>
                <a className={router.pathname === '' ? 'header-active_link' : ''}>Contact</a>
              </Link>
            </li>
          </ul> */}
        </Menu>
        <Row className="global-container header-navbar" alignItems="center" justifyContent="space-between">
          <Typography 
            color={theme.colors.white.opacity[1]} 
            fontSize={24}
            fontWeight={800}>Goolys.</Typography>
          <MyIcon.Menu isActive={isActive} onClick={toggleMenu} />
        </Row>
      </Root>
    </>
  )
}

export default Header;