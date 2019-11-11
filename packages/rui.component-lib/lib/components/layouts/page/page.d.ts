import { FC, ReactNode, HTMLAttributes } from "react";
export interface Props extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode | ReactNode[];
}
export declare const Page: FC<Props>;
export default Page;
