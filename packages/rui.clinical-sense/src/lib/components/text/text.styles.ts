import styled from "styled-components";

export interface Props {
  color?: string;
}
export const TextStyles = styled.span<Props>`
  color: ${(props) => props.color || "#fff"};
`;
