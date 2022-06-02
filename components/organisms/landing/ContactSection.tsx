import Container from "@/atoms/Container";
import { contact } from "common/contact";
import { socialMedia } from "common/socialMedia";
import Link from "next/link";
import styled from "styled-components"
import { breakpoint } from "styles/breakpoints";

const Root = styled.div(({theme}) => ({
  padding: '200px 0',
  position: 'relative',
  [Container]: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    [`${breakpoint('md')}`]: {
      alignItems: 'flex-end',
    },
  },
  '.landing-section_title': {
    position: 'absolute',
    margin: 0,
    top: '50%',
    right: '-7%',
    transform: 'translate(0, -50%)',
    writingMode: "vertical-lr",
    [`${breakpoint('md')}`]: {
      writingMode: "horizontal-tb",
      left: '-60px',
      right: 'auto',
    },
  },
  '.contact-title': {
    color: `${theme.colors.white.opacity[1]}`,
    fontSize: '30px',
    fontFamily: `${theme.fontFamily.poppins}`,
    margin: 0,
    textAlign: 'left',
    [`${breakpoint('md')}`]: {
      fontSize: '100px',
      textAlign: 'right',
    }
  },
  '.contact-action': {
    listStyle: 'none',
    '.contact-action_item': {
      marginBottom: '30px',
      textAlign: 'left',
      [`${breakpoint('md')}`]: {
        textAlign: 'right',
      },
      'a': {
        textDecoration: 'none',
        fontFamily: `${theme.fontFamily.arial}`,
        fontSize: '18px',
        [`${breakpoint('md')}`]: {
          fontSize: '24px',
        },
        ':last-child': {
          marginBottom: 0,
        }
      }
    }
  },
  '.contact-connect': {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '30px',
    '.contact-connect_item': {
      textAlign: 'left',
      'a': {
        textDecoration: 'none',
        fontFamily: `${theme.fontFamily.arial}`,
        fontSize: '18px',
        textAlign: 'right',
        [`${breakpoint('md')}`]: {
          fontSize: '24px',
        }
      }
    }
  }
}))

const ContactSection = () => {
  return (
    <Root>
      <Container>
        <h2 className='landing-section_title'>Contact</h2>
        <h3 style={{fontWeight: 400}} className='contact-title'>Any type of query<br/>and discussion</h3>
        <ul className='contact-action'>
          {contact.map((item, index) => (
            <li className='contact-action_item' key={index}>
              <Link href={item.target} >{item.label}</Link>
            </li>
          ))}
        </ul>
        <h3 style={{fontWeight: 900}} className='contact-title'>Let&apos;s Connect</h3>
        <ul className='contact-connect'>
          {socialMedia.map((item, index) => (
            <li className='contact-connect_item' key={index}>
              <Link href={item.target} >{item.label}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </Root>
  )
}

export default ContactSection;