import React, {FC, ReactNode, HTMLAttributes, useState} from "react";
import {BlockLabel} from "../..";
import {FilterCheck} from "./filterCheck";
import {FilterChecksStyles} from "./filterCheckBlock.styles";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /**
   * Wether to show a label.
   */
  label?: string | ReactNode;

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

export const FilterCheckBlock: FC<Props> = ({
  label,
  allValues,
  selectedValue,
  handleChange,
  ...rest
}) => {
  const [checked, setChecked] = useState<string>(selectedValue);

  // tslint:disable-next-line: no-any
  const onChange = (value: string) => {
    handleChange(value);
    setChecked(value);
  };

  return (
    <div {...rest}>
      {label && <BlockLabel>{label}</BlockLabel>}
      <FilterChecksStyles>
        {allValues.map((item) => (
          <FilterCheck key={item} onChange={onChange} value={item} checked={checked === item}>
            {item}
          </FilterCheck>
        ))}
      </FilterChecksStyles>
    </div>
  );
};

/** @component */
export default FilterCheckBlock;
