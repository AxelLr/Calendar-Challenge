import styled from "styled-components/native";
import {
  space,
  layout,
  flexbox,
  border,
  position,
  shadow,
  color,
  SpaceProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  FlexboxProps,
  LayoutProps,
  ColorProps,
  typography,
  TypographyProps,
} from "styled-system";

interface ITypography
  extends LayoutProps,
    SpaceProps,
    BorderProps,
    PositionProps,
    ShadowProps,
    ColorProps,
    FlexboxProps,
    TypographyProps {
  bold?: boolean;
}

const Typography = styled.Text<ITypography>`
  ${layout}
  ${color}
  ${space}
  ${border}
  ${position}
  ${shadow}
  ${flexbox}
  ${typography}
`;

export default Typography;
