import React, {FC, ReactNode, HTMLAttributes, useState, useEffect, ChangeEvent} from "react";
import {BlockLabel, Alignment} from "../..";
import {StyledSearch, SearchBlockStyles} from "./searchBlock.styles";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /**
   * Wether to show a label.
   */
  label?: string | ReactNode;
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
   * Wether to disable the search.
   */
  disabled?: boolean;
  /**
   * Wether to fire search on each keypress.
   */
  keypress?: boolean;
  /**
   * Current search value.
   */
  value?: string;
  /**
   * With of the searchfield.
   */
  width?: string;
  /**
   * Returns the current search term.
   */
  handleChange: (payload: string) => void;
}

export const SearchBlock: FC<Props> = ({
  label,
  direction = "row",
  placeholder,
  disabled,
  keypress,
  value,
  width,
  handleChange,
  ...rest
}) => {
  const [term, setTerm] = useState<string>(value || "");

  useEffect(() => {
    setTerm(value || "");
  }, [value]);

  useEffect(() => {
    keypress && handleChange(term);
  }, [term, handleChange, keypress]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const onSearchClick = (searchTerm: string) => {
    handleChange(searchTerm);
  };

  return (
    <SearchBlockStyles>
      <Alignment direction={direction} {...rest}>
        {label && <BlockLabel>{label}</BlockLabel>}
        <StyledSearch
          placeholder={placeholder}
          allowClear={true}
          onSearch={onSearchClick}
          value={term}
          onChange={onChange}
          disabled={disabled}
          width={width}
        />
      </Alignment>
    </SearchBlockStyles>
  );
};

export default SearchBlock;
