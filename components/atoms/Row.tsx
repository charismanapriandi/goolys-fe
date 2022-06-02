import styled from "styled-components";

type Props = {
  alignItems?: CSS.AlignItems;
  justifyContent?: CSS.JustifyContent;
}

const Row = styled('div')<Props>(({justifyContent = 'flex-start', alignItems = 'flex-start'}) => ({
  display: 'flex',
  alignItems: `${alignItems}`,
  justifyContent: `${justifyContent}`,
}))

export default Row;