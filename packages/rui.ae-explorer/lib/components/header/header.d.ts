/// <reference types="@emotion/core" />
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Data } from "../../types";
export interface Props extends RouteComponentProps<{
    id: string;
}> {
    data: Data[];
}
export declare const Header: import("react").ComponentClass<Pick<Props, "data">, any> & import("react-router").WithRouterStatics<React.FunctionComponent<Props>>;
