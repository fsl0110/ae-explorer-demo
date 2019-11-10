import React, {FC} from "react";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/lib/integration/react";
import {BrowserRouter as Router} from "react-router-dom";
import {store, persistor} from "./store";
import {Data} from "./types";
import {App} from "./app";

export interface Props {
  data: Data[];
}

export const AEExplorer: FC<Props> = ({data}) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <App data={data} />
      </Router>
    </PersistGate>
  </Provider>
);
