import React, {FC, ReactNode, HTMLAttributes, useState, useEffect} from "react";
import {BlockLabel, Alignment} from "../..";
import {StyledSlider, SliderBlockStyles} from "./sliderBlock.styles";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string | ReactNode;
  vertical?: boolean;
  step?: number;
  rangeValues: [number, number];
  selectedValues: [number, number];
  direction?: "row" | "column";
  disabled?: boolean;
  width?: string;
  handleChange?: (payload: number | [number, number]) => void;
}

export const SliderBlock: FC<Props> = ({
  label,
  vertical,
  step = 1,
  rangeValues,
  selectedValues: selectedValuesProp,
  direction = "row",
  disabled,
  width,
  handleChange,
  ...rest
}) => {
  const [selectedValues, setSelectedValues] = useState<[number, number]>(selectedValuesProp);

  const onSliderChange = (payload: number | [number, number]) => {
    setSelectedValues(payload as [number, number]);
    handleChange && handleChange(payload);
  };

  useEffect(() => {
    setSelectedValues(selectedValuesProp);
  }, [selectedValuesProp]);

  const marks = {
    [rangeValues[0]]: rangeValues[0],
    [selectedValues[0]]: selectedValues[0],
    [selectedValues[1]]: selectedValues[1],
    [rangeValues[1]]: rangeValues[1],
  };

  return (
    <SliderBlockStyles>
      <Alignment direction={direction} {...rest}>
        {label && <BlockLabel>{label}</BlockLabel>}
        <StyledSlider
          range={true}
          included={true}
          marks={marks}
          min={rangeValues[0]}
          max={rangeValues[1]}
          step={step}
          vertical={vertical}
          defaultValue={selectedValues}
          value={selectedValues}
          onChange={onSliderChange}
          disabled={disabled}
          width={width}
        />
      </Alignment>
    </SliderBlockStyles>
  );
};

export default SliderBlock;
