import React, {FC, MouseEvent} from "react";
import {Checkbox} from "antd";
import {CheckboxesStyles} from "./checkBlock.styles";

export interface Props {
  /**
   * Select the alignment of the label and the checkboxes.
   * @default row
   */
  direction?: "row" | "column" | "column-row";
  /**
   * Wether to disable all checkboxes.
   */
  disabled?: boolean;
  /**
   * All checkable values.
   */
  allValues: string[];
  /**
   * Current checked values.
   */
  checked: string[];
  /**
   * Returns the current checked value.
   */
  onChange: (e: MouseEvent<HTMLInputElement>) => void;
}

export const ChecksBasic: FC<Props> = ({allValues, checked, direction, disabled, onChange}) => (
  <CheckboxesStyles direction={direction}>
    {allValues.map((item) => (
      <Checkbox
        key={item}
        checked={checked.includes(item)}
        defaultChecked={checked.includes(item)}
        value={item}
        disabled={disabled}
        onClick={onChange}
      >
        {item}
      </Checkbox>
    ))}
  </CheckboxesStyles>
);
