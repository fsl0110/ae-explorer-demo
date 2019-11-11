import React, {FC} from "react";
import {Link, withRouter, RouteComponentProps} from "react-router-dom";
import {PageHeader, BackButton, ModalButton} from "@dedrr/rui.component-lib";
import {DetailsTableManagerConnection} from "../../connections/detailsTableManager/detailsTableManager.redux";
import {StoreManagerConnection} from "../../connections/storeManager/storeManager.redux";
import {GroupsFilterManagerConnection} from "../../connections/groupsFilterManager/groupsFilterManager.redux";
import {GroupsTableManagerConnection} from "../../connections/groupsTableManager/groupsTableManager.redux";
import {ShareConnection} from "../../connections";
import {Data} from "../../types";
import {Help} from "../help/help";

export interface Props extends RouteComponentProps<{id: string}> {
  data: Data[];
}

const HeaderWithRouter: FC<Props> = ({data, location}) => {
  const arr = location.pathname.split("/");

  return (
    <PageHeader>
      <Link to={`/${arr[1]}`}>
        <BackButton tooltipTitle="back" disabled={!arr[2]} />
      </Link>
      <StoreManagerConnection />
      <div className="manager">
        <ModalButton iconName="filter" tooltipTitle="Data Filters Manager" disabled={!!arr[2]}>
          <GroupsFilterManagerConnection />
        </ModalButton>
        <ModalButton iconName="table" tooltipTitle="Table Manager">
          {!arr[2] ? <GroupsTableManagerConnection /> : <DetailsTableManagerConnection />}
        </ModalButton>
      </div>
      <ModalButton iconName="question" tooltipTitle="Help" width={600}>
        <Help />
      </ModalButton>
      <div>
        <ShareConnection />
      </div>
    </PageHeader>
  );
};

export const Header = withRouter(HeaderWithRouter);
