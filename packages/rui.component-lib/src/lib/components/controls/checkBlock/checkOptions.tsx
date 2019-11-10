import React, {FC, MouseEvent} from "react";
import {Checkbox, Typography} from "antd";
const {Text} = Typography;

export interface Props {
  showCheckAll?: boolean;
  checkAll?: boolean;
  showCheckSingle?: boolean;
  checkSingle?: boolean;
  onAllChange: (e: MouseEvent<HTMLInputElement>) => void;
  onSingleChange: (e: MouseEvent<HTMLInputElement>) => void;
}

export const CheckOptions: FC<Props> = ({
  showCheckAll,
  checkAll,
  showCheckSingle,
  checkSingle,
  onAllChange,
  onSingleChange,
}) => {
  if (!showCheckAll && !showCheckSingle) {
    return null;
  }

  return (
    <div>
      {showCheckAll && (
        <Checkbox
          checked={checkAll}
          value={checkAll}
          onClick={onAllChange}
          style={{marginBottom: "0.5em"}}
        >
          <Text strong={true}>check all</Text>
        </Checkbox>
      )}
      {showCheckSingle && (
        <Checkbox
          checked={checkSingle}
          value={checkSingle}
          onClick={onSingleChange}
          style={{marginBottom: "0.5em"}}
        >
          <Text strong={true}>check single</Text>
        </Checkbox>
      )}
    </div>
  );
};
