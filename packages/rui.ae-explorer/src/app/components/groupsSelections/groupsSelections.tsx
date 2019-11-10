import React, {FC} from "react";

import {RadioBlock, SelectBlock} from "rui.component-lib";
import {SelectionsStyles} from "./groupsSelections.styles";

export interface Props {
  summarizedBy: string;
  groupedBy: string;
  setSummarizedBy: (payload: string) => void;
  setGroupedBy: (payload: string) => void;
}

export const GroupsSelections: FC<Props> = ({
  summarizedBy,
  groupedBy,
  setSummarizedBy,
  setGroupedBy,
}) => (
  <SelectionsStyles>
    <RadioBlock
      label="Summarize by:"
      direction="row"
      allValues={["Participants", "Events"]}
      selectedValue={summarizedBy}
      handleChange={setSummarizedBy}
    />
    <SelectBlock
      label="Group by:"
      allValues={["ARM", "SEX", "RACE", "NONE", "AEOUT", "AEREL", "AESEV", "AESER", "SBJTSTAT"]}
      selectedValue={groupedBy}
      direction="row"
      handleChange={setGroupedBy}
    />
  </SelectionsStyles>
);
