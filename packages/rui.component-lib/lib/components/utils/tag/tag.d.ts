import { FC, ReactNode, HTMLAttributes } from "react";
export interface Props extends HTMLAttributes<HTMLElement> {
    children: ReactNode | ReactNode[];
    /**
     * Define a HTML-Tag to wrap the children(s)
     */
    type: keyof JSX.IntrinsicElements;
}
export declare const Tag: FC<Props>;
export default Tag;
