import styled from "styled-components";
import {Select} from "antd";

export const SelectBlockStyles = styled.div`
  padding: 0.5em 0;
`;

interface Props {
  width?: string;
}

export const StyledSelect = styled(Select)<Props>`
  width: ${(props) => (props.width ? props.width : "")};
`;
