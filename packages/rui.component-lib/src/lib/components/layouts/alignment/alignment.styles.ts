import styled from "styled-components";

interface Props {
  direction: "row" | "column" | "column-row";
}

export const AlignmentStyles = styled.span<Props>`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "column" || props.direction === "column-row" ? "column" : "row"};
  align-items: ${(props) =>
    props.direction === "column" || props.direction === "column-row" ? "" : "center"};
`;
