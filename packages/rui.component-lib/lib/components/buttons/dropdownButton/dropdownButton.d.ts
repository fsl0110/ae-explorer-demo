import { FC, ReactNode, HTMLAttributes } from "react";
interface Props extends HTMLAttributes<HTMLDivElement> {
    hide?: boolean;
    disabled?: boolean;
    trigger?: "click" | "hover";
    iconName: string;
    tooltipTitle: string;
    hideOnContentClick: boolean;
    children: ReactNode | ReactNode[];
}
export declare const DropdownButton: FC<Props>;
export default DropdownButton;
