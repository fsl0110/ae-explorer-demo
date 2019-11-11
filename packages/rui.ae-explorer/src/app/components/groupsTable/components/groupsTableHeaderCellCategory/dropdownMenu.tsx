import React from "react";
import {SearchBlock} from "@dedrr/rui.component-lib";
import {MenuStyles} from "./groupsTableHeaderCellCategory.styles";

export const dropdownMenu = (searchTerm: string, handleSearch: (searchTerm: string) => void) => (
  <MenuStyles>
    <SearchBlock width="200px" value={searchTerm} handleChange={handleSearch} />
  </MenuStyles>
);
