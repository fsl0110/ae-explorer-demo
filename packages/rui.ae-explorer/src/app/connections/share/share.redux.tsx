import React from "react";
import {useSelector} from "react-redux";
import {AppState} from "../../types";
import {Share} from "../../components";

export const ShareConnection = () => {
  const setting: any = useSelector((state: AppState) => state.present);

  const encoded = btoa(JSON.stringify(setting));
  const urlToShare = `${window.location.href}/?store=${encoded}`;
  console.log("setting", encoded);
  console.log("setting encoded", JSON.parse(atob(encoded)));

  return <Share setting={urlToShare} />;
};
