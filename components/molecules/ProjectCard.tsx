import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";
import { breakpoint } from "styles/breakpoints";

const Root = styled.div(({theme}) => ({
  width: '100%',
  border: `1px solid ${theme.colors.dark.border[2]}`,
  borderRadius: '16px',
  padding: '20px',
  backgroundImage: `-webkit-linear-gradient(-45deg, ${theme.colors.dark.border[2]}, ${theme.colors.dark.background[2]})`,
  cursor: 'pointer',
  ':hover': {
    backgroundImage: `-webkit-linear-gradient(-45deg, ${theme.colors.dark.background[2]}, transparent)`,
  },
  [`${breakpoint('md')}`]: {
    padding: '32px',
  },
  '.project_card-brand_logo': {
    marginBottom: '20px',
    position: 'relative',
    width: '56px',
    height: '56px',
    borderRadius: '8px',
  },
  '.project_card-title': {
    marginBottom: '8px',
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '32px',
    color: theme.colors.dark.font[2],
    [`${breakpoint('md')}`]: {
      fontSize: '24px',
      marginBottom: '12px',
    },
  },
  '.project_card-description': {
    fontSize: '14px',
    lineHeight: '20px',
    color: theme.colors.dark.font[3],
    [`${breakpoint('md')}`]: {
      fontSize: '16px',
      lineHeight: '24px',
    },
  }
}))

interface Props {
  image: string;
  name: string;
  description: string;
}

const ProjectCard: FC<Props> = ({image, name, description}) => {
  return (
    <Root>
      <div className="project_card-brand_logo">
        <Image
          src={image}
          layout='fill'
          objectFit='cover'
          alt="brand"
        />
      </div>
      <h3 className="project_card-title">{name}</h3>
      <p className="project_card-description">{description}</p>
    </Root>
  )
}

export default ProjectCard;