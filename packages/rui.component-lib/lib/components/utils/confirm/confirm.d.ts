import { FC, ReactNode } from "react";
export interface Props {
    title: string;
    yesHandler: () => void;
    noHandler?: () => void;
    children: ReactNode | ReactNode[];
}
export declare const Confirm: FC<Props>;
