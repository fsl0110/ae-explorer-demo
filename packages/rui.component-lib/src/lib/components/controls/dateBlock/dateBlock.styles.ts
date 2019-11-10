import styled from "styled-components";
import {DatePicker} from "antd";
const {RangePicker} = DatePicker;

export const DateBlockStyles = styled.div`
  padding: 0.5em 0;
`;

interface Props {
  width?: string;
}

export const StyledRangePicker = styled(RangePicker)<Props>`
  width: ${(props) => (props.width ? props.width : "230px")};
`;
