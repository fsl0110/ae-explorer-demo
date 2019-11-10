import React, {FC, ReactNode, HTMLAttributes} from "react";
import {PageStyles} from "./page.styles";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode | ReactNode[];
}

export const Page: FC<Props> = ({...rest}) => <PageStyles {...rest} />;

export default Page;
