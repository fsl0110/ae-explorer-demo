import React, {FC, HTMLAttributes} from "react";
import {useSelector} from "react-redux";
import {FilterButtons} from "@dedrr/rui.component-lib";

import {AppState} from "../../types";

export const DetailsFilterButtonsConnection: FC<HTMLAttributes<HTMLDivElement>> = ({...rest}) => {
  const filters = useSelector((state: AppState) => state.present.filters.filters);

  return (
    <div {...rest}>
      <FilterButtons label="Group Filters:" disabled={true} filters={filters} {...rest} />
    </div>
  );
};
