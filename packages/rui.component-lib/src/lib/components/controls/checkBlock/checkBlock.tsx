import React, {FC, useEffect, ReactNode, HTMLAttributes, useState, MouseEvent} from "react";
import {BlockLabel, Alignment, addOrRemoveArrayItem, useKeyPress} from "../../..";
import {CheckOptions} from "./checkOptions";
import {ChecksBasic} from "./checksBasic";
import {ChecksDND} from "./checksDND";
import {CheckBlockStyles} from "./checkBlock.styles";

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
   * Wether to keep always one checkbox checked.
   */
  keepOne?: boolean;
  /**
   * Wether to enable key press features.
   */
  keys?: boolean;
  /**
   * Wether to show the check all checkbox.
   */
  showCheckAll?: boolean;
  /**
   * Wether to show the check single checkbox.
   */
  showCheckSingle?: boolean;
  /**
   * Wether to enable drag and drop.
   */
  enableDND?: boolean;
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
  selectedValues: string[];
  /**
   * Returns all checked values.
   */
  getCheckedValues?: (payload: string[]) => void;
  /**
   * Returns all unchecked values.
   */
  getUncheckedValues?: (payload: string[]) => void;
  /**
   * Returns the reordered allValues.
   */
  getAllValuesReordered?: (payload: string[]) => void;
}

export const CheckBlock: FC<Props> = ({
  label,
  direction = "row",
  keepOne,
  keys,
  showCheckAll,
  showCheckSingle,
  enableDND,
  disabled,
  allValues,
  selectedValues,
  getCheckedValues,
  getUncheckedValues,
  getAllValuesReordered,
  ...rest
}) => {
  const [checked, setChecked] = useState<string[]>(selectedValues);
  const [checkAll, setCheckAll] = useState<boolean>(false);
  const [checkSingle, setCheckSingle] = useState<boolean>(false);
  const singleKeyPressed = useKeyPress("Control");
  const allKeyPressed = useKeyPress("Alt");

  useEffect(() => {
    setChecked(selectedValues);
  }, [selectedValues]);

  const onChange = (e: MouseEvent<HTMLInputElement>) => {
    setCheckAll(false);
    const value = e.currentTarget.value;
    if (keepOne) {
      if (checked.length > 1) {
        handleKeys(value, addOrRemoveArrayItem<string>(checked, value));
      } else {
        !checked.includes(value) && handleKeys(value, [...checked, value]);
      }
    } else {
      handleKeys(value, addOrRemoveArrayItem<string>(checked, value));
    }
  };

  const handleKeys = (value: string, checkedValues: string[]) => {
    if ((keys && singleKeyPressed) || checkSingle) {
      handleChange([value]);
    } else if (keys && allKeyPressed) {
      handleChange(allValues);
    } else {
      handleChange(checkedValues);
    }
  };

  const handleChange = (newValues: string[]) => {
    setChecked(newValues);
    if (getUncheckedValues) {
      getUncheckedValues(allValues.filter((value: string) => !newValues.includes(value)));
    }
    if (getCheckedValues) {
      getCheckedValues(newValues);
    }
  };

  const onAllChange = (e: MouseEvent<HTMLInputElement>) => {
    setCheckAll(e.currentTarget.checked);

    if (e.currentTarget.checked) {
      setCheckSingle(false);
    }

    if (e.currentTarget.checked) {
      handleChange(allValues);
    }

    if (!e.currentTarget.checked) {
      handleChange([]);
    }
  };

  const onSingleChange = (e: MouseEvent<HTMLInputElement>) => {
    setCheckSingle(e.currentTarget.checked);
    if (e.currentTarget.checked) {
      setCheckAll(false);
    }
  };

  return (
    <CheckBlockStyles>
      <Alignment direction={direction} {...rest}>
        <Alignment direction="row">
          {label && <BlockLabel>{label}</BlockLabel>}
          <CheckOptions
            showCheckAll={showCheckAll}
            checkAll={checkAll}
            showCheckSingle={showCheckSingle}
            checkSingle={checkSingle}
            onAllChange={onAllChange}
            onSingleChange={onSingleChange}
          />
        </Alignment>
        {enableDND ? (
          <ChecksDND
            allValues={allValues}
            checked={checked}
            direction={direction}
            disabled={disabled}
            onChange={onChange}
            getAllValuesReordered={getAllValuesReordered}
          />
        ) : (
          <ChecksBasic
            allValues={allValues}
            checked={checked}
            direction={direction}
            disabled={disabled}
            onChange={onChange}
          />
        )}
      </Alignment>
    </CheckBlockStyles>
  );
};

/** @component */
export default CheckBlock;
