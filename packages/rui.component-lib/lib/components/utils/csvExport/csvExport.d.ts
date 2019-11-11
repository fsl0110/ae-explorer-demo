import { FC, ReactNode, HTMLAttributes } from "react";
export interface Props extends HTMLAttributes<HTMLElement> {
    data: {};
    filename: string;
    children: ReactNode | ReactNode[];
}
export declare const CSVExport: FC<Props>;
export default CSVExport;
