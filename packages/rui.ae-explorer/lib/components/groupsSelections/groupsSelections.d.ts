import { FC } from "react";
export interface Props {
    summarizedBy: string;
    groupedBy: string;
    setSummarizedBy: (payload: string) => void;
    setGroupedBy: (payload: string) => void;
}
export declare const GroupsSelections: FC<Props>;
