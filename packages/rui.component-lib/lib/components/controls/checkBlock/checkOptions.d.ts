import { FC, MouseEvent } from "react";
export interface Props {
    showCheckAll?: boolean;
    checkAll?: boolean;
    showCheckSingle?: boolean;
    checkSingle?: boolean;
    onAllChange: (e: MouseEvent<HTMLInputElement>) => void;
    onSingleChange: (e: MouseEvent<HTMLInputElement>) => void;
}
export declare const CheckOptions: FC<Props>;
