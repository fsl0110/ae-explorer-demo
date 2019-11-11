import { FC, HTMLAttributes, ReactNode } from "react";
export interface Props extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode | ReactNode[];
}
export declare const PageHeader: FC<Props>;
