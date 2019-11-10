import React, {FC} from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import {Button, Tooltip, message} from "antd";

export interface Props {
  setting: string;
}

export const Share: FC<Props> = ({setting}) => {
  const onCopy = () => {
    message.config({
      top: 20,
      duration: 3,
    });
    message.success(`The setting was copied as url into the clipboard`);
  };

  return (
    <CopyToClipboard text={setting} onCopy={onCopy}>
      <Tooltip title="Share setting">
        <Button shape="circle" icon="share-alt" onClick={onCopy} />
      </Tooltip>
    </CopyToClipboard>
  );
};
