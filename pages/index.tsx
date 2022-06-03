import Layout from 'components/layout/Layout'
import type { NextPage } from 'next'
import LandingStyle from '../styles/module/landing'
import * as Landing from '@/organisms/landing'
import Cursor from '@/atoms/Cursor'

const Home: NextPage = () => {
  return (
    <LandingStyle>
      <Layout>
        <Landing.HeroSection />
        <Landing.ProjectSection />
        <Landing.SkillSection />
        <Landing.ContactSection />
      </Layout>
      <Cursor />
    </LandingStyle>
  )
}

export default Home
