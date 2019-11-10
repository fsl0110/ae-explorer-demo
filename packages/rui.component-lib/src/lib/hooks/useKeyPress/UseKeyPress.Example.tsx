import React, {FC} from "react";
import {useKeyPress} from "./useKeyPress";

interface Props {
  keyToPress: string;
}

export const UseKeyPressExample: FC<Props> = ({keyToPress}) => {
  const keyPressed = useKeyPress(keyToPress);

  console.log(`key ${keyToPress} pressed?`, keyPressed);

  return <strong>{`Click "${keyToPress}" and see the result in the console.`}</strong>;
};

/** @component */
export default UseKeyPressExample;
