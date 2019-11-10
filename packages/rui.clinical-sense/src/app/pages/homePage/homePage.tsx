import React, {FC} from "react";
import {HomePageStyles} from "./homePage.styles";

interface Props {
  count?: number;
}

export const HomePage: FC<Props> = ({count}) => (
  <div>
    <HomePageStyles>
      <h2>HomePage </h2>
    </HomePageStyles>
  </div>
);
