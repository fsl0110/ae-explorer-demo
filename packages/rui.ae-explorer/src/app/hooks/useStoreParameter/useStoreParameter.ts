import {useDispatch} from "react-redux";
import {setSelectedSetting} from "../../store/actions";

export const useStoreParameter = () => {
  const dispatch = useDispatch();
  const url = new URL(window.location.href);
  const storeParam: string = url.searchParams.get("store") || "";

  if (storeParam[0]) {
    const setting = JSON.parse(atob(storeParam));
    const pushUrl = removeParam("store", window.location.href);
    window.history.pushState("", "", pushUrl.replace("/?", ""));
    dispatch(setSelectedSetting(setting));
  }
};

function removeParam(key: string, sourceURL: string) {
  var rtn = sourceURL.split("?")[0],
    param,
    params_arr = [],
    queryString = sourceURL.indexOf("?") !== -1 ? sourceURL.split("?")[1] : "";
  if (queryString !== "") {
    params_arr = queryString.split("&");
    for (var i = params_arr.length - 1; i >= 0; i -= 1) {
      param = params_arr[i].split("=")[0];
      if (param === key) {
        params_arr.splice(i, 1);
      }
    }
    rtn = rtn + "?" + params_arr.join("&");
  }
  return rtn;
}
