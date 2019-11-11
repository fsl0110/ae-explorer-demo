import React, {FC} from "react";
import {DetailsTableConnection, DetailsFilterButtonsConnection} from "../../connections";
import {Button} from "antd";
import {CSVExport, BlockLabel} from "@dedrr/rui.component-lib";
import {DetailsStyles} from "./details.styles";
import {Data} from "../../types";

export interface Props {
  detailsData: Data[];
  category: string;
  count: number;
}

export const Details: FC<Props> = ({category, detailsData, count}) => (
  <DetailsStyles>
    <BlockLabel className="info-text">Details for {`${count} ${category}`} records</BlockLabel>
    <DetailsFilterButtonsConnection className="group-filter-buttons" />
    <DetailsTableConnection detailsData={detailsData} />
    <CSVExport filename={`${category}.csv`} data={detailsData} className="export-button">
      <Button>Export CSV</Button>
    </CSVExport>
  </DetailsStyles>
);
