import styled from "styled-components/native";
import {
  space,
  layout,
  flexbox,
  border,
  position,
  shadow,
  zIndex,
  ZIndexProps,
  color,
  SpaceProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  FlexboxProps,
  LayoutProps,
  ColorProps,
} from "styled-system";

interface IBox
  extends LayoutProps,
    SpaceProps,
    BorderProps,
    PositionProps,
    ShadowProps,
    ColorProps,
    FlexboxProps,
    ZIndexProps {}

const Box = styled.View<IBox>`
  ${layout}
  ${color}
  ${space}
  ${border}
  ${position}
  ${shadow}
  ${flexbox}
  ${zIndex}
`;

export default Box;
