import React, {FC, useState} from "react";
import {Icon} from "antd";
import {FilterCheckStyles} from "./filterCheck.styles";

export interface Props {
  children: string;
  checked: boolean;
  value: string;
  onChange: (payload: string) => void;
}

export const FilterCheck: FC<Props> = ({checked, value, children, onChange}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleCheck = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      onChange(value);
    }
  };

  return (
    <FilterCheckStyles role="button" checked={isChecked} onClick={handleCheck}>
      {children}
      {isChecked && <Icon type="check" />}
    </FilterCheckStyles>
  );
};

export default FilterCheck;
