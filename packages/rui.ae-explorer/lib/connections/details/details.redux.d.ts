/// <reference types="@emotion/core" />
import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Data } from "../../types";
export interface Props extends RouteComponentProps<{
    id: string;
}> {
    data: Data[];
}
export declare const DetailsWithRouter: FC<Props>;
export declare const DetailsConnection: import("react").ComponentClass<Pick<Props, "data">, any> & import("react-router").WithRouterStatics<React.FunctionComponent<Props>>;
