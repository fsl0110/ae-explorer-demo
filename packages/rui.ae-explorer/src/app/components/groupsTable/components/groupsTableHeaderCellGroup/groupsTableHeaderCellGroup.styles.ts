import styled from "styled-components";
import {Menu} from "antd";

export const MenuStyles = styled(Menu)`
  padding: 0.5em 1rem !important;
`;

export interface Props {
  filterActive: boolean;
  dropdownVisibilty: boolean;
}

export const HeaderCellStyles = styled.th<Props>`
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
  padding-bottom: -5px;

  :hover > .filter-btn {
    background-color: #f5f5f5;
  }

  :hover {
    background-color: #f5f5f5;
  }

  .cell {
    display: block;
  }

  .cell-handler {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .filter-btn {
    padding: 0.5em;
    color: ${(props) =>
      props.dropdownVisibilty
        ? "rgba(0, 0, 0, 0.45)"
        : props.filterActive
        ? "rgb(24, 144, 255)"
        : "#bfbfbf"};
    background-color: ${(props) => (props.dropdownVisibilty ? "#e5e5e5" : "")};
    transition: all 0.3s;
    border-radius: 4px;

    :hover {
      background-color: #e5e5e5;
      color: rgba(0, 0, 0, 0.45);
    }
  }

  .empty-space {
    height: 2.4em;
  }

  .dropdown {
    font-weight: normal;
  }
`;
