import React, { FC } from "react";
import styled from "styled-components";

const Root = styled.div<{isActive:boolean}>(({theme, isActive}) => ({
  width: '30px',
  height: '23px',
  position: 'relative',
  ':hover': {
    '.menu-bar': {
      backgroundColor: theme.colors.white.opacity[.69],
    }
  },
  '.menu-bar': {
    position: 'absolute',
    left: 0,
    width: '30px',
    height: '2px',
    zIndex: 1,
    backgroundColor: theme.colors.white.opacity[1],
    transition: theme.transition.easeInOut(.3),
    ':first-child': {
      top: 0,
      transformOrigin: 'left',
      transform: isActive ? 'translateY(21px) rotate(-45deg)' : 'rotate(0deg)',
    },
    ':last-child': {
      bottom: 0,
      transformOrigin: 'left',
      transform: isActive ? 'translateY(-21px) rotate(45deg)' : 'rotate(0deg)',
    }
  }
}))

interface Props extends React.HTMLProps<HTMLElement> {
  isActive: boolean
}

const Menu: FC<Props> = ({isActive, ...props}) => {
  return (
    <Root  isActive={isActive} {...(props as any)} className="menu-root">
      <div className="menu-bar" />
      <div className="menu-bar" />
    </Root>
  )
}

export default Menu;