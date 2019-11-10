import styled from "styled-components";

// basic exaple for styling html tags
export const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  background: #000;
  color: #fff;
  padding: 1rem;
  border-bottom: 1px solid #fff;
  height: 50px;

  h4 {
    color: #fff;
    margin: 0;
    margin-right: 1em;
    padding: 0;
  }

  .demo-text {
    padding-left: 1em;
  }
`;
