import styled from "styled-components/native";
import Typography from "@/components/Typography";

interface CardTypographyProps {
  color?: string;
  fontWeight?: string | number;
  fontSize?: number;
}

export const CardTypography = styled(Typography)<CardTypographyProps>`
  color: ${({ color }) => color || "#fff"};
  font-weight: ${({ fontWeight }) => fontWeight || 300};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
`;
