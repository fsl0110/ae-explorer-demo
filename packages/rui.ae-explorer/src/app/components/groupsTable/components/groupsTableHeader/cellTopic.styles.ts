import styled from "styled-components";

interface Props {
  color: string;
}

export const CellTopicStyles = styled.div<Props>`
  color: ${(props) => props.color};

  .subvalue {
    font-size: 12px;
  }
`;
