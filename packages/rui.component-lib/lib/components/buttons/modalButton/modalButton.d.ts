import { FC, ReactNode, HTMLAttributes } from "react";
interface Props extends HTMLAttributes<HTMLDivElement> {
    hide?: boolean;
    disabled?: boolean;
    isOpen?: boolean;
    iconName: string;
    tooltipTitle: string;
    width?: number;
    children: ReactNode | ReactNode[];
}
export declare const ModalButton: FC<Props>;
export default ModalButton;
