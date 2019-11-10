import styled from "styled-components";
import {Input} from "antd";
const {Search} = Input;

export const SearchBlockStyles = styled.div`
  padding: 0.5em 0;
`;

interface Props {
  width?: string;
}

export const StyledSearch = styled(Search)<Props>`
  width: ${(props) => (props.width ? props.width : "230px")} !important;
`;
