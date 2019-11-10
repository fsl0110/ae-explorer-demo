import React, {FC, useEffect, ReactNode, HTMLAttributes, useState, MouseEvent} from "react";
import {Radio} from "antd";
import {BlockLabel, Alignment} from "../..";
import {RadiosStyles, RadioBlockStyles} from "./radioBlock.styles";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /**
   * Wether to show a label.
   */
  label?: string | ReactNode;
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
   * Current checked value.
   */
  selectedValue: string;
  /**
   * Returns the checked value.
   */
  handleChange: (payload: string) => void;
}

export const RadioBlock: FC<Props> = ({
  label,
  allValues,
  selectedValue: selectedValueProp,
  direction = "row",
  disabled,
  handleChange,
  ...rest
}) => {
  const [checked, setChecked] = useState<string>(selectedValueProp);

  useEffect(() => {
    setChecked(selectedValueProp);
  }, [selectedValueProp]);

  const onChange = (e: MouseEvent<HTMLInputElement>) => {
    setChecked(e.currentTarget.value);
    handleChange(e.currentTarget.value);
  };

  return (
    <RadioBlockStyles>
      <Alignment direction={direction} {...rest}>
        {label && <BlockLabel>{label}</BlockLabel>}
        <RadiosStyles direction={direction}>
          {allValues.map((item) => (
            <Radio
              key={item}
              onClick={onChange}
              value={item}
              checked={checked === item}
              disabled={disabled}
            >
              {item}
            </Radio>
          ))}
        </RadiosStyles>
      </Alignment>
    </RadioBlockStyles>
  );
};

export default RadioBlock;
