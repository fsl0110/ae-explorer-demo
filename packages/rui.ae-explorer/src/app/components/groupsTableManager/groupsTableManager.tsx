import React, {FC} from "react";
import {RadioBlock} from "@dedrr/rui.component-lib";

export interface Props {
  bodyCellsView: string;
  handleChange: (payload: string) => void;
}

export const GroupsTableManager: FC<Props> = ({bodyCellsView, handleChange}) => (
  <RadioBlock
    label="Cell Toggle"
    direction="column"
    allValues={["Percentage", "Amount"]}
    selectedValue={bodyCellsView}
    handleChange={handleChange}
  />
);
