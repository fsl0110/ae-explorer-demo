import styled from "styled-components";

interface Props {
  color?: string;
  align?: "center";
}
export const TableCellStyles = styled.td<Props>`
  padding: 1rem;
  color: ${(props) => props.color};
  text-align: ${(props) => props.align};
`;
