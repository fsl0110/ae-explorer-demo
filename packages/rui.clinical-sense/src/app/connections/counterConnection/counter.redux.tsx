import React, {FC} from "react";
import {useSelector, useDispatch} from "react-redux";
import {ActionCreators} from "redux-undo";
import {AppState} from "../../store";
import {increment, decrement} from "../../store/actions/counter.actions";

import {Counter} from "../../components/counter/counter";

export const CounterRedux: FC = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: AppState) => state.counter.count);
  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleUndo = () => dispatch(ActionCreators.undo());
  const handleRedo = () => dispatch(ActionCreators.redo());

  return (
    <Counter
      value={value}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleUndo={handleUndo}
      handleRedo={handleRedo}
    />
  );
};
