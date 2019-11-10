import React, {FC} from "react";
import {ErrorMsg} from "../../../";

export const TableRowNoData: FC = () => (
  <tr>
    <td colSpan={10}>
      <strong>
        <ErrorMsg>No data available!</ErrorMsg>
      </strong>
    </td>
  </tr>
);
