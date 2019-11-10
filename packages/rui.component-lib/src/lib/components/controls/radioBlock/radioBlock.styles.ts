import styled from "styled-components";

export const RadioBlockStyles = styled.div`
  padding: 0.5em 0;
`;

interface Props {
  direction?: "row" | "column" | "column-row";
}

export const RadiosStyles = styled.div<Props>`
  .ant-radio-wrapper {
    display: ${(props) => (props.direction === "column" ? "block" : "inline-block")};
    margin-bottom: 0.25rem;
  }
`;
