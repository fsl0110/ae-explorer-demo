import styled from "styled-components";

export interface Props {
  sortDirection?: "asc" | "desc" | "default";
}

export const SortIconStyles = styled.span<Props>`
  display: flex;
  flex-direction: column;
  padding-left: 0.5rem;
  margin-bottom: 2px;

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
  }
`;
