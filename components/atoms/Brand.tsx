import Link from "next/link";
import styled from "styled-components";

const Root = styled.div(({theme}) => ({
  'a': {
    fontSize: '20px',
    fontWeight: 700,
    color: theme.colors.dark.font[4],
    textDecoration: 'none',
    transition: 'color .2s ease-in-out',
    ':hover': {
      color: theme.colors.dark.font[1],
    }
  }
}))

const Brand = () => {
  return (
    <Root>
      <Link href="/dashboard">Goolys.</Link>
    </Root>
  )
}

export default Brand;