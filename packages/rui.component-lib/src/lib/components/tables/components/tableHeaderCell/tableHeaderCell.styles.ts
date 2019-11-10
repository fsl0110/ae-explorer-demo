import styled from "styled-components";
import {Menu} from "antd";

export const MenuStyles = styled(Menu)`
  padding: 0.5em 1rem !important;
`;

export interface Props {
  filterActive: boolean;
  dropdownVisibilty: boolean;
}

export const TableHeaderCellStyles = styled.th<Props>`
  cursor: pointer;
  transition: all 0.3s;

  :hover > .filter-btn {
    background-color: #f5f5f5;
  }

  :hover {
    background-color: #f5f5f5;
  }

  .cell {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cell-item {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    padding: 1em;
  }

  .filter-btn {
    padding: 1rem 0.5rem;
    color: ${(props) =>
      props.dropdownVisibilty
        ? "rgba(0, 0, 0, 0.45)"
        : props.filterActive
        ? "rgb(24, 144, 255)"
        : "#bfbfbf"};
    background-color: ${(props) => (props.dropdownVisibilty ? "#e5e5e5" : "")};
    transition: all 0.3s;
    height: calc(100% - 1px);

    :hover {
      background-color: #e5e5e5;
      color: rgba(0, 0, 0, 0.45);
    }
  }

  .dropdown {
    font-weight: normal;
  }
`;
