import React, {FC, useState, useEffect} from "react";
import _ from "lodash";
import {CheckBlock, BlockLabel} from "../../..";
import {TableManagerStyles, ItemContainerStyles} from "./tabelManager.styles";

interface Props {
  allColumns: string[];
  selectedColumns: string[];
  getCheckedColumns?: (payload: string[]) => void;
  getUncheckedColumns?: (payload: string[]) => void;
  /**
   * Returns the reordered allValues.
   */
  getAllColumnsReordered?: (payload: string[]) => void;
}

export const TableManager: FC<Props> = ({
  allColumns: allColumnsProp,
  selectedColumns: selectedColumnsProp,
  getCheckedColumns,
  getUncheckedColumns,
  getAllColumnsReordered,
}) => {
  const [allColumns, setAllColumns] = useState(allColumnsProp);
  const [selectedColumns, setSelectedColumns] = useState(selectedColumnsProp);

  useEffect(() => {
    setSelectedColumns(selectedColumnsProp);
  }, [selectedColumnsProp]);

  useEffect(() => {
    setAllColumns(allColumnsProp);
  }, [allColumnsProp]);

  const handleUncheckedValues = (payload: string[]) => {
    getUncheckedColumns && getUncheckedColumns(payload);
  };

  const handleCheckedValues = (payload: string[]) => {
    getCheckedColumns && getCheckedColumns(payload);
  };

  return (
    <TableManagerStyles>
      <BlockLabel>Columns to show:</BlockLabel>
      <ItemContainerStyles>
        <CheckBlock
          allValues={allColumns}
          selectedValues={selectedColumns}
          direction="column"
          keys={true}
          /*  enableDND={true} */
          /* showCheckAll={true} */
          keepOne={true}
          getCheckedValues={handleCheckedValues}
          getUncheckedValues={handleUncheckedValues}
          getAllValuesReordered={getAllColumnsReordered}
        />
      </ItemContainerStyles>
    </TableManagerStyles>
  );
};
