import React, {FC, useState, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Button, Drawer} from "antd";
import {Page, Alignment, useFilters} from "@dedrr/rui.component-lib";
import {
  GroupsSelectionsConnection,
  FilterConnection,
  GroupsTableConnection,
  GroupsFilterButtonsConnection,
} from "../../connections";
import {ControlsStyles} from "./groups.styles";
import {useGroups} from "../../hooks/useGroups/useGroups";
import {AppState, Data} from "../../types";
import {useCreateGroupFilters} from "../../components/groupsTable/hooks";
import {setGroupsFilters} from "../../store/actions";
import {colors} from "../../config";
import {useStoreParameter} from "../../hooks/useStoreParameter/useStoreParameter";

export interface Props {
  data: Data[];
}

export const Groups: FC<Props> = ({data}) => {
  const dispatch = useDispatch();
  const pageEl = useRef<HTMLDivElement>(null);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [drawerNode, setDrawerNode] = useState(pageEl.current ? pageEl.current : undefined);
  const datafilters = useSelector((state: AppState) => state.present.filters.filters);
  const groupVariable = useSelector((state: AppState) => state.present.selections.groupedBy);
  const summarizedBy = useSelector((state: AppState) => state.present.selections.summarizedBy);
  const filteredData = useFilters(data, datafilters);
  // TODO: remove age computing from useGroups.It is computed by getObjAttrValues in filters
  const [headerGroups, bodyGroups, footerGroups, prevalenceRange] = useGroups(
    filteredData,
    groupVariable,
    summarizedBy,
  );
  const groupFilters = useCreateGroupFilters(headerGroups, bodyGroups);
  useStoreParameter();
  dispatch(setGroupsFilters(groupFilters));

  const handleDrawerVisibility = () => {
    setDrawerOpen(!drawerOpen);
    setDrawerNode(pageEl.current ? pageEl.current : undefined);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const getContainer = () => document.body || drawerNode;

  return (
    <div ref={pageEl} style={{position: "relative"}}>
      <Page>
        <ControlsStyles>
          <Alignment direction="row">
            <GroupsSelectionsConnection />
            <Button icon="filter" onClick={handleDrawerVisibility}>
              Data Filters
            </Button>
          </Alignment>
          <GroupsFilterButtonsConnection />
        </ControlsStyles>
        <GroupsTableConnection
          colors={colors}
          headerGroups={headerGroups}
          bodyGroups={bodyGroups}
          footerGroups={footerGroups}
          prevalenceRange={prevalenceRange}
        />
      </Page>
      <Drawer
        title="Data Filters"
        placement="left"
        closable={true}
        onClose={handleDrawerClose}
        visible={drawerOpen}
        getContainer={getContainer()}
        style={{position: "absolute", zIndex: 90}}
      >
        <FilterConnection data={data} />
      </Drawer>
    </div>
  );
};
