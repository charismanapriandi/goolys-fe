import useScreenSize from "hook/useScreenSize";
import Image from "next/image";
import { FC, useEffect } from "react";
import styled from "styled-components";
import { breakpoint, screen } from "styles/breakpoints";

const Root = styled.a<{accent: string}>(({theme, accent}) => ({
  backgroundColor: theme.colors.dark.background[2],
  padding: '8px',
  display: 'flex',
  gap: '12px',
  transition: 'background-color .2s ease-in-out',
  borderRadius: '12px',
  alignItems: 'center',
  textDecoration: 'none',
  ':hover': {
    backgroundColor: accent,
  },
  '.brand_card-brand_logo': {
    width: '32px',
    height: '32px',
    position: 'relative',
    borderRadius: '8px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: accent,
    [`${breakpoint('md')}`]: {
      width: '44px',
      height: '44px',
    }
  },
  '.brand_card-title': {
    fontSize: '14px',
    fontWeight: 700,
    color: theme.colors.dark.font[1],
    [`${breakpoint('md')}`]: {
      fontSize: '18px',
    }
  }
}))

interface Props {
  accent: string;
  brand: string;
  image: string;
  href: string;
}

const BrandCard: FC<Props>= ({accent, brand, image, href}) => {
  const {width:sw} = useScreenSize()
  
  return (
    <Root href={href} target={'_blank'} accent={accent}>
      <div className="brand_card-brand_logo">
        <Image
          src={image}
          width={sw > screen.md ? 24 : 16}
          height={sw > screen.md ? 24 : 16}
          alt={brand}
        />
      </div>
      <h4 className="brand_card-title">{brand}</h4>
    </Root>
  )
}

export default BrandCard;