import styled from "styled-components";

interface Props {
  striped?: boolean;
}

export const TableRowStyles = styled.tr<Props>`
  border-bottom: 1px solid #e8e8e8;
  white-space: nowrap;
  transition: all 0.3s;

  :nth-child(even) {
    background-color: ${(props) => (props.striped ? "#F5F5F5 " : "inherit")};
  }

  :hover {
    background-color: #e6f7ff;
  }
`;
