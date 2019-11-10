import React, {FC, useEffect, useState, HTMLAttributes} from "react";
import {Select} from "antd";
import {BlockLabel, Alignment} from "../../..";
import {StyledSelect, SelectBlockStyles} from "./selectBlock.styles";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /**
   * Wether to show a label.
   */
  label?: string;
  /**
   * Select the alignment of the label and the checkboxes.
   * @default row
   */
  direction?: "row" | "column";
  /**
   * Wether to show a placeholder.
   */
  placeholder?: string;
  /**
   * Chose the select mode.
   */
  mode?: "default" | "multiple" | "tags";
  /**
   * Wether to disable the select.
   */
  disabled?: boolean;
  /**
   * All selectable values.
   */
  allValues: string[];
  /**
   * Current selected value.
   */
  selectedValue?: string;
  /**
   * With of the select.
   */
  width?: string;
  /**
   * Returns the current selected value.
   */
  handleChange: (values: any) => void;
}

export const SelectBlock: FC<Props> = ({
  label,
  direction = "row",
  placeholder,
  disabled,
  mode,
  allValues,
  width,
  selectedValue: selectedValueProp,
  handleChange,
  ...rest
}) => {
  const [selected, setSelected] = useState<string | undefined>(selectedValueProp);

  useEffect(() => {
    setSelected(selectedValueProp);
  }, [selectedValueProp]);

  return (
    <SelectBlockStyles>
      <Alignment direction={direction} {...rest}>
        {label && <BlockLabel>{label}</BlockLabel>}
        <StyledSelect
          onChange={handleChange}
          defaultValue={selected}
          value={selected}
          placeholder={placeholder}
          mode={mode}
          disabled={disabled}
          width={width}
        >
          {allValues.map((item: string) => (
            <Select.Option key={item} value={item}>
              {item}
            </Select.Option>
          ))}
        </StyledSelect>
      </Alignment>
    </SelectBlockStyles>
  );
};

export default SelectBlock;
