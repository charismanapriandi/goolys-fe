import styled from "styled-components";

type Props = {
  height?: number;
  width?: number;
}

const Gap = styled.div<Props>(({height=0, width=0}) => ({
  height: height+'px',
  width: width+'px',
}))

export default Gap;