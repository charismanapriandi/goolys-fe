import { FC } from "react";
import styled from "styled-components"

const Root = styled.div(({theme}) => ({
  ".project_list-title": {
    fontSize: 'clamp(30px, 10vw, 70px)',
    fontWeight: 'medium',
    fontFamily: `${theme.fontFamily.poppins}`,
    color: `${theme.colors.white.opacity[1]}`,
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
    margin: 0,
  }
}))

interface Props {
  title: string;
  image: string;
}

const ProjectList: FC<Props> = ({title, image}) => {
  return (
    <Root>
      <p className="project_list-title">{title}</p>
    </Root>
  )
}

export default ProjectList;