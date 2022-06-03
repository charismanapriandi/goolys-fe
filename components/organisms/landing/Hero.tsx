import MyIcons from "@/atoms/MyIcons";
import { contact } from "common/contact";
import Image from "next/image";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";

const Root = styled.div(({theme}) => ({
  paddingTop: '112px',
  '.hero-profile_image': {
    position: 'relative',
    width: '100px',
    height: '100px',
    borderRadius: '20px',
    overflow: "hidden",
    marginBottom: '10px'
  },
  '.hero-role': {
    fontSize: '30px',
    fontWeight: 700,
    margin: '24px 0',
    color: theme.colors.dark.font[4],
  },
  '.hero-name': {
    fontSize: '60px',
    marginBottom: '64px',
    fontWeight: 800,
    color: theme.colors.dark.font[1],
    [`${breakpoint('md')}`]: {
      fontSize: '96px',
    }
  },
  '.hero-social_media': {
    color: theme.colors.dark.font[4],
    display: 'flex',
    alignItems: 'center',
    gap: '28px',
  },
  '.hero-social_media_item': {
    width: '56px',
    height: '56px',
    backgroundColor: "transparent",
    borderRadius: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color .2s ease-in-out',
    ':hover': {
      backgroundColor: theme.colors.dark.font[4],
      '.hero-social_media_icon': {
        color: theme.colors.dark.font[1],
      }
    },
    '.hero-social_media_icon': {
      color: theme.colors.dark.font[4],
      transition: 'color .2s ease-in-out',
    }
  }
}))

const Hero = () => {
  return (
    <Root>
      <div className="hero-profile_image">
        <Image 
          src={'/assets/avatar.jpeg'}
          layout="fill"
          objectFit="cover"
          alt="charisman apriandi"
        />
      </div>
      <h2 className="hero-role">Web Developer</h2>
      <h1 className="hero-name">Charisman Apriandi</h1>
      <ul className="hero-social_media">
        {contact.map((item, index) => {
          let Icon: React.ReactNode;
          if (item.name === 'instagram') Icon = <MyIcons.Instagram className="hero-social_media_icon" size={32} />
          if (item.name === 'linkedin') Icon = <MyIcons.Linkedin className="hero-social_media_icon" size={32} />
          if (item.name === 'whatsapp') Icon = <MyIcons.Whatsapp className="hero-social_media_icon" size={32} />
          if (item.name === 'email') Icon = <MyIcons.Mail className="hero-social_media_icon" size={32} />
          
          return (
            <li key={index} className="hero-social_media_item">
              <a target={item.target} href={item.href}>{Icon}</a>
            </li>
          )
        })}
      </ul>
    </Root>
  )
}

export default Hero;