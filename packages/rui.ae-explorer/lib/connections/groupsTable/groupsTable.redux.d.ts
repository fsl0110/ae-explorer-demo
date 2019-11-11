import { FC } from "react";
import { GroupedValue, HeaderGroup } from "../../types";
export interface Props {
    colors: string[];
    headerGroups: HeaderGroup[];
    bodyGroups: any;
    footerGroups: GroupedValue[];
    prevalenceRange: any;
}
export declare const GroupsTableConnection: FC<Props>;
