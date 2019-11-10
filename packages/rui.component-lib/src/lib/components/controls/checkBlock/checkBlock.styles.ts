import styled from "styled-components";

export const CheckBlockStyles = styled.div`
  padding: 0.5em 0;
`;

interface Props {
  direction?: "row" | "column" | "column-row";
}

export const CheckboxesStyles = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => (props.direction === "column" ? "column" : "row")};

  .ant-checkbox-wrapper {
    margin-left: 0 !important;
    margin-right: ${(props) => (props.direction === "column" ? "0" : "8px")};
    margin-bottom: 0.25rem;
  }

  .unchecked span {
    cursor: pointer;
  }
`;
