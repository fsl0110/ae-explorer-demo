import styled from "styled-components";

interface Props {
  value: number;
  color: string;
}

export const ContainerStyles = styled.div`
  position: relative;
  padding-bottom: 10px;
  border-left: 1px solid #777;
`;

export const BulletStyles = styled.div<Props>`
  position: absolute;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  left: ${(props) => props.value * 2}px;
`;
