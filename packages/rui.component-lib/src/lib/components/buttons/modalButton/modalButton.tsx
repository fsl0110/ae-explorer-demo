import React, {FC, useState, ReactNode, HTMLAttributes} from "react";
import {Button, Modal, Tooltip} from "antd";

interface Props extends HTMLAttributes<HTMLDivElement> {
  hide?: boolean;
  disabled?: boolean;
  isOpen?: boolean;
  iconName: string;
  tooltipTitle: string;
  width?: number;
  children: ReactNode | ReactNode[];
}

export const ModalButton: FC<Props> = ({
  hide,
  disabled,
  isOpen,
  iconName,
  tooltipTitle,
  width,
  children,
  ...rest
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(isOpen || false);

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  if (hide) {
    return null;
  }

  return (
    <div {...rest}>
      <Tooltip title={tooltipTitle}>
        <Button shape="circle" icon={iconName} onClick={handleModalOpen} disabled={disabled} />
      </Tooltip>
      <Modal
        title={tooltipTitle}
        visible={modalOpen}
        footer={false}
        width={width || 300}
        centered={true}
        onCancel={handleModalOpen}
      >
        {children}
      </Modal>
    </div>
  );
};

export default ModalButton;
