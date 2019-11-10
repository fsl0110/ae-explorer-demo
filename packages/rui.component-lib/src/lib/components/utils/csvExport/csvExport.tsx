import React, {FC, ReactNode, HTMLAttributes} from "react";
import csvDownload from "json-to-csv-export";

export interface Props extends HTMLAttributes<HTMLElement> {
  data: {};
  filename: string;
  children: ReactNode | ReactNode[];
}

export const CSVExport: FC<Props> = ({data, filename, children, ...rest}) =>
  React.cloneElement(children as never, {
    onClick: () => {
      csvDownload(data, filename);
    },
    ...rest,
  });

export default CSVExport;
