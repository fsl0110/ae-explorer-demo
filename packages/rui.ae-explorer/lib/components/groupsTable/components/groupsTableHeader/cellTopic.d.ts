import { FC, HTMLAttributes } from "react";
import { HeaderGroup } from "../../../../types";
interface Props extends HTMLAttributes<HTMLDivElement> {
    group: HeaderGroup;
    color: string;
}
export declare const CellTopic: FC<Props>;
export {};
