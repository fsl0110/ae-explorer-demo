import styled from "styled-components";

export const PageHeaderStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 60px;
  background-color: #ededed;
  padding: 0 1rem;
  width: 100% !important;

  a + div,
  div + div,
  button + div,
  span + div {
    margin-left: 1.5rem;
  }

  .manager {
    display: flex;

    div + div {
      margin-left: 0.5rem;
    }
  }
`;
