import styled from "styled-components";

export interface Props {
  sortDirection?: "asc" | "desc" | "default";
}

export const SortIconStyles = styled.span<Props>`
  display: flex;
  flex-direction: column;
  padding: 0.5em;

  transition: all 0.3s;
  border-radius: 4px;

  :hover {
    background-color: #e5e5e5;
  }

  :hover .anticon-caret-up {
    color: rgba(0, 0, 0, 0.45);
  }

  :hover .anticon-caret-down {
    color: rgba(0, 0, 0, 0.45);
  }

  svg {
    height: 0.8em;
    width: 0.8em;
  }

  .anticon-caret-up {
    height: 0.5em;
    color: ${(props) => (props.sortDirection === "asc" ? "rgb(24, 144, 255)" : "#bfbfbf")};
    transition: all 0.3s;
  }

  .anticon-caret-down {
    height: 0.5em;
    color: ${(props) => (props.sortDirection === "desc" ? "rgb(24, 144, 255)" : "#bfbfbf")};
    transition: all 0.3s;
    margin-bottom: 3px;
  }
`;
