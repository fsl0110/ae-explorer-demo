import styled from "styled-components";

export const SortButtonStyles = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: #fff;
  height: 24px;
  color: rgba(0, 0, 0, 0.65);

  .drag {
    padding: 0 0.5em;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border: 1px solid #d9d9d9;
    cursor: move;
  }

  .sort {
    display: inline-block;
    padding-left: 0.5em;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border: 1px solid #d9d9d9;
    transition: all 0.3s;

    :hover {
      color: #40a9ff;
      border-color: #40a9ff;
    }

    .sort-icon {
      padding: 0 0.25em;
      cursor: pointer;
    }
  }

  .close {
    padding: 0 0.25em;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 1px solid #d9d9d9;
    transition: all 0.3s;
    cursor: pointer;

    :hover {
      color: #40a9ff;
      border-color: #40a9ff;
    }
  }
`;
