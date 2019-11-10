import React, {FC, useState, useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import {AppStyles} from "./app.styles";
import {Header} from "./components";
import {Groups} from "./pages/groups/groups";
import {DetailsConnection} from "./connections/details/details.redux";
import {Data} from "./types";

interface Props {
  data: Data[];
}

export const App: FC<Props> = ({data: dataProp}) => {
  const [data, setData] = useState<Data[]>(dataProp);

  useEffect(() => {
    setData(dataProp);
  }, [dataProp]);

  const groups = () => <Groups data={data} />;
  const details = () => <DetailsConnection data={data} />;

  const arr = window.location.pathname.split("/");

  return (
    <AppStyles>
      <Header data={data} />
      <Switch>
        <Route exact={true} path={`/${arr[1]}`} component={groups} />
        <Route path={`/${arr[1]}/:id`} component={details} />
      </Switch>
    </AppStyles>
  );
};
