import styled from "styled-components"

const Root = styled('svg')(({theme}) => ({}))

const Menu = () => {
  return (
    <Root width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1C0 0.447715 0.447715 0 1 0H29C29.5523 0 30 0.447715 30 1C30 1.55228 29.5523 2 29 2H1C0.447716 2 0 1.55228 0 1Z" fill="white"/>
      <path d="M0 22C0 21.4477 0.447715 21 1 21H29C29.5523 21 30 21.4477 30 22C30 22.5523 29.5523 23 29 23H1C0.447716 23 0 22.5523 0 22Z" fill="white"/>
    </Root>
  )
}

export default Menu