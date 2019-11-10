import styled from "styled-components";
import {Slider} from "antd";

export const SliderBlockStyles = styled.div`
  padding: 0.5em 0;
`;

interface Props {
  width?: string;
}

export const StyledSlider = styled(Slider)<Props>`
  width: ${(props) => (props.width ? props.width : "inherit")};
`;
