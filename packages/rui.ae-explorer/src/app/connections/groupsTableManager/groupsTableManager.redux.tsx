import React, {FC} from "react";
import {useSelector, useDispatch} from "react-redux";
import {GroupsTableManager} from "../../components";
import {AppState} from "../../types";
import {setBodyCellsView} from "../../store/actions";

export const GroupsTableManagerConnection: FC = () => {
  const dispatch = useDispatch();
  const bodyCellsView = useSelector((state: AppState) => state.present.groupsTable.bodyCellsView);

  const handleChange = (payload: string) => {
    dispatch(setBodyCellsView(payload));
  };

  return <GroupsTableManager handleChange={handleChange} bodyCellsView={bodyCellsView} />;
};
