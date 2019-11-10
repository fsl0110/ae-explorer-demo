import React, {FC, ReactNode, HTMLAttributes} from "react";
import {BlockLabel, Alignment} from "../..";
import {StyledRangePicker, DateBlockStyles} from "./dateBlock.styles";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string | ReactNode;
  selectedValues: [string, string];
  rangeValues: [string, string];
  direction?: "row" | "column";
  disabled?: boolean;

  /**
   * With of the dataRange.
   */
  width?: string;
  handleChange?: (payload: any) => void;
}

export const DateBlock: FC<Props> = ({
  label,
  selectedValues,
  rangeValues,
  direction = "row",
  disabled,
  width,
  handleChange,
  ...rest
}) => {
  const dateFormat = "YYYY/MM/DD";
  return (
    <DateBlockStyles>
      <Alignment direction={direction} {...rest}>
        {label && <BlockLabel>{label}</BlockLabel>}
        <StyledRangePicker
          /*         defaultValue={[
          moment(selectedValues[0], dateFormat),
          moment(selectedValues[1], dateFormat),
        ]} */
          /*         ranges={[moment(rangeValues[0], dateFormat), moment(rangeValues[1], dateFormat)]} */
          format={dateFormat}
          onChange={handleChange}
          width={width}
        />
      </Alignment>
    </DateBlockStyles>
  );
};

/** @component */
export default DateBlock;
