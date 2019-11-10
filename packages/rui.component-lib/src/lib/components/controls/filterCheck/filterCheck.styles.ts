import styled from "styled-components";

interface Props {
  checked: boolean;
}

export const FilterCheckStyles = styled.div<Props>`
  background-color: #fff;
  border: 1px solid;
  border-color: ${(props) => (!props.checked ? "#ededed" : "#ddd")};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 250px;
  padding: 0.25rem 1rem;
  cursor: pointer;
  border-radius: 4px;

  :hover {
    background-color: #fafafa;
  }

  .anticon-check {
    padding-top: 2px;
    color: #0f0;
  }
`;
