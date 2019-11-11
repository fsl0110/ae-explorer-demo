import React, {FC, useEffect} from "react";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {Details} from "../../pages/details/details";
import {AppState, Data} from "../../types";
import {useDetailsData} from "./useDetailsData";
/* import {useColumnReorder} from "../../hooks/useColumnReorder/useColumnReorder"; */
import {useColumnSelection} from "../../hooks/useColumnSelection/useColumnSelection";
import {setSelectedColumns, setAllColumns} from "../../store/actions";
import {getObjAttrs} from "@dedrr/rui.component-lib";
import {useStoreParameter} from "../../hooks/useStoreParameter/useStoreParameter";

export interface Props extends RouteComponentProps<{id: string}> {
  data: Data[];
}

export const DetailsWithRouter: FC<Props> = ({data, match}) => {
  const dispatch = useDispatch();
  useStoreParameter();
  const filters = useSelector((state: AppState) => state.present.filters.filters);
  const [detailsData, count] = useDetailsData(data, filters, match.params.id);
  const unselectedColumns = useSelector(
    (state: AppState) => state.present.detailsTable.unselectedColumns,
  );

  /*   const reorderedColumns = useSelector(
    (state: AppState) => state.present.detailsTable.reorderedColumns,
  ); */
  /*  const reorderedData = useColumnReorder(reorderedColumns, detailsData); */
  const selectedData = useColumnSelection(unselectedColumns, detailsData);

  useEffect(() => {
    dispatch(setSelectedColumns(getObjAttrs(detailsData[0])));
    dispatch(setAllColumns(getObjAttrs(detailsData[0])));
  }, [detailsData, dispatch]);

  return <Details count={count} detailsData={selectedData} category={match.params.id} />;
};

export const DetailsConnection = withRouter(DetailsWithRouter);
