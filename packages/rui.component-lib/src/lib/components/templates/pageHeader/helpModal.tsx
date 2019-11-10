import React, {FC, useState} from "react";
import {Button, Modal, Tooltip} from "antd";

export const HelpModal: FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <Tooltip title="Help">
        <Button shape="circle" icon="question" onClick={handleModalOpen} />
      </Tooltip>
      <Modal
        title="Help"
        visible={modalOpen}
        footer={false}
        width={300}
        centered={true}
        onCancel={handleModalOpen}
      >
        Some dynamic Help content
      </Modal>
    </div>
  );
};
