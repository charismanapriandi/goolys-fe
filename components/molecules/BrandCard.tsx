import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";

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
}

const BrandCard: FC<Props>= ({accent, brand, image}) => {
  return (
    <Root href="#" target={'_blank'} accent={accent}>
      <div className="brand_card-brand_logo">
        <Image
          src={image}
          layout='fill'
          objectFit="contain"
          alt="brand"
        />
      </div>
      <h4 className="brand_card-title">{brand}</h4>
    </Root>
  )
}

export default BrandCard;