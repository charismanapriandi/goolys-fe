import styled from "styled-components";

type Props = {
  textAlign?: CSS.TextAlign;
  fontSize?: number;
  lineHeight?: number;
  fontFamily?: string;
  fontWeight?: CSS.FontWeight;
  color?: string;
}

const Typography = styled('p')<Props>(({
  theme, 
  color, 
  textAlign, 
  fontSize, 
  lineHeight, 
  fontFamily, 
  fontWeight}) => ({
    textAlign: `${textAlign ? textAlign : 'left'}`,
    fontFamily: `${fontFamily ? fontFamily : theme.fontFamily.arial}`,
    fontSize: `${fontSize ? fontSize : 20}px`,
    lineHeight: `${lineHeight ? lineHeight : 22}px`,
    fontWeight: `${fontWeight ? fontWeight : 500}`,
    color: `${color}`,
  }));

export default Typography;