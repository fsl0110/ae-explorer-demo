import { FC } from "react";
import { Sort } from "../../../../types";
export interface Props {
    subCategories: any;
    prevalenceRange: [number, number];
    searchTerm: string;
    sort: Sort[];
    bodyCellsView: string;
    colors: string[];
}
export declare const GroupsTableRowsExpanded: FC<Props>;
