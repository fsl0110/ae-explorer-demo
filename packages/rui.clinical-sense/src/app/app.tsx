import React, {FC, useState} from "react";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {store} from "./store";
import {Header} from "./components";
import {AppStyles} from "./app.styles";
import "antd/dist/antd.css";
import {AEExplorer} from "@dedrr/rui.ae-explorer";
import data from "./data.json";
import tinyData from "./data.tiny.json";

export const App: FC = () => {
  const [aeData, setAeData] = useState(data);

  const handleDataChange = (payload: string) => {
    const nextData = payload === "full" ? data : tinyData;
    setAeData(nextData);
  };

  const aeExplorer = () => <AEExplorer data={aeData} />;

  const redirect = () => <Redirect to="/aeexplorer" />;

  return (
    <Provider store={store}>
      <Router>
        <AppStyles>
          <Header handleChange={handleDataChange} />
          <Switch>
            <Route exact={true} path="/" render={redirect} />
            <Route path="/aeexplorer" component={aeExplorer} />
          </Switch>
        </AppStyles>
      </Router>
    </Provider>
  );
};
