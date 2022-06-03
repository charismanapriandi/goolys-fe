import styled from "styled-components";
import * as Landing from '@/organisms/landing';
import Container from "@/atoms/Container";
import Header from "@/organisms/Header";

const Root = styled.div(({theme}) => ({

}))

const Home = () => {
  return (
    <Root>
      <Container>
        <Header />
        <Landing.Hero />
        <Landing.Project />
        <Landing.Skill />
      </Container>
    </Root>
  )
}

export default Home