import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";

const Root = styled('div')(({theme}) => `
  width: 200px;
  height: 66px;
  filter: grayscale(1);
`)

interface Props {
  image: string;
  name: string;
}

const SkillCard: FC<Props> = ({image, name}) => {
  return (
    <Root className="skill_card-root">
      <Image src={image} layout={'fill'} alt={name} objectFit={'contain'} />
    </Root>
  )
}

export default SkillCard;