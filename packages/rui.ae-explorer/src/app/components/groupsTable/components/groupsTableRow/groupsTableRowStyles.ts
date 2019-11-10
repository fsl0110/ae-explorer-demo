import styled from "styled-components";

interface Props {
  expanded?: boolean;
  expandedRow?: boolean;
}

export const GroupsTableRowStyles = styled.tr<Props>`
  background-color: ${(props) => (props.expandedRow ? "#fafafa" : "inherit")};
  line-height: 2em;
  transition: all 0.3s;

  :hover {
    background-color: #e6f7ff;
  }

  td {
    padding-top: 0.25em;
    padding-bottom: 0.25em;

    a {
      padding-left: ${(props) => (props.expandedRow ? "1em" : "0")};

      :hover {
        text-decoration: underline;
      }

      mark {
        padding: 0;
        background: rgba(0, 151, 19, 0.2);
      }
    }
  }

  td:nth-of-type(1) {
    padding-left: 0;
  }

  td i {
    display: inline-block;
    margin-right: 0.25em;
    font-size: 12px;
    padding: 1em;
    cursor: pointer;
    transform: ${(props) => (props.expanded ? `rotate(90deg)` : `rotate(0)`)};
    transition: all 0.3s;
    color: #999;

    :hover {
      box-shadow: 0 0 2px #777;
      border-radius: 4px;
      transition: all 0.3s;
    }
  }
`;
