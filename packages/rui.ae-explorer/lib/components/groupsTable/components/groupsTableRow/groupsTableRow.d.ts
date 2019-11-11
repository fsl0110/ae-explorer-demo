import { FC } from "react";
export interface Props {
    /**
     * The grouped data of the row.
     */
    group: any;
    /**
     * The colors of the row cell values.
     */
    colors: string[];
    /**
     * Wether the row is expanded.
     */
    expanded?: boolean;
    /**
     * Wether the row is used as an expanded row.
     */
    expandedRow?: boolean;
    bodyCellsView: string;
    searchTerm: string;
    prevalenceRange: [number, number];
    handleExpand?: (payload: string) => void;
}
export declare const GroupsTableRow: FC<Props>;
