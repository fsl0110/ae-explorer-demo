import React, {FC} from "react";
import {RadioBlock, BlockLabel} from "../../..";
import {ChartManagerStyles, ItemContainerStyles} from "./chartManager.styles";

interface Props {
  allValues: string[];
  selectedValue: string;
  handleChange: () => void;
}

export const ChartManager: FC<Props> = ({allValues, selectedValue, handleChange}) => (
  <ChartManagerStyles>
    <BlockLabel>Type of charts:</BlockLabel>
    <ItemContainerStyles>
      <RadioBlock
        allValues={allValues}
        selectedValue={selectedValue}
        direction="column"
        handleChange={handleChange}
      />
    </ItemContainerStyles>
  </ChartManagerStyles>
);
