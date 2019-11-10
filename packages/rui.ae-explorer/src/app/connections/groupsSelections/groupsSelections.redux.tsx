import React, {FC} from "react";
import {useSelector, useDispatch} from "react-redux";

import {GroupsSelections} from "../../components";
import {AppState} from "../../store";
import {setSummarizedBy, setGroupedBy} from "../../store/actions";

export const GroupsSelectionsConnection: FC = () => {
  const dispatch = useDispatch();
  const summarizedBy = useSelector((state: AppState) => state.present.selections.summarizedBy);
  const groupedBy = useSelector((state: AppState) => state.present.selections.groupedBy);

  const handleSummarizedByChange = (payload: string) => {
    dispatch(setSummarizedBy(payload));
  };

  const handleGroupedByChange = (payload: string) => {
    dispatch(setGroupedBy(payload));
  };

  return (
    <GroupsSelections
      summarizedBy={summarizedBy}
      groupedBy={groupedBy}
      setSummarizedBy={handleSummarizedByChange}
      setGroupedBy={handleGroupedByChange}
    />
  );
};
