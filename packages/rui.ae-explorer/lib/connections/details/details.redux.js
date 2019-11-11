"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var details_1 = require("../../pages/details/details");
var useDetailsData_1 = require("./useDetailsData");
/* import {useColumnReorder} from "../../hooks/useColumnReorder/useColumnReorder"; */
var useColumnSelection_1 = require("../../hooks/useColumnSelection/useColumnSelection");
var actions_1 = require("../../store/actions");
var rui_component_lib_1 = require("@dedrr/rui.component-lib");
var useStoreParameter_1 = require("../../hooks/useStoreParameter/useStoreParameter");
exports.DetailsWithRouter = function (_a) {
    var data = _a.data, match = _a.match;
    var dispatch = react_redux_1.useDispatch();
    useStoreParameter_1.useStoreParameter();
    var filters = react_redux_1.useSelector(function (state) { return state.present.filters.filters; });
    var _b = useDetailsData_1.useDetailsData(data, filters, match.params.id), detailsData = _b[0], count = _b[1];
    var unselectedColumns = react_redux_1.useSelector(function (state) { return state.present.detailsTable.unselectedColumns; });
    /*   const reorderedColumns = useSelector(
      (state: AppState) => state.present.detailsTable.reorderedColumns,
    ); */
    /*  const reorderedData = useColumnReorder(reorderedColumns, detailsData); */
    var selectedData = useColumnSelection_1.useColumnSelection(unselectedColumns, detailsData);
    react_1.useEffect(function () {
        dispatch(actions_1.setSelectedColumns(rui_component_lib_1.getObjAttrs(detailsData[0])));
        dispatch(actions_1.setAllColumns(rui_component_lib_1.getObjAttrs(detailsData[0])));
    }, [detailsData, dispatch]);
    return react_1.default.createElement(details_1.Details, { count: count, detailsData: selectedData, category: match.params.id });
};
exports.DetailsConnection = react_router_dom_1.withRouter(exports.DetailsWithRouter);
//# sourceMappingURL=details.redux.js.map