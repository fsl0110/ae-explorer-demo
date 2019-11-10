import React, {FC} from "react";
import {withRouter, RouteComponentProps} from "react-router-dom";
import {HeaderStyles} from "./header.styles";
import {Select} from "antd";

interface Props extends RouteComponentProps {
  handleChange: (payload: string) => void;
}

export const HeaderWithRouter: FC<Props> = ({handleChange, history}) => {
  const handleDataChange = (payload: string) => {
    handleChange(payload);
    history.push("/aeexplorer");
  };

  return (
    <HeaderStyles>
      <h4>Select Data</h4>
      <Select defaultValue="full" onChange={handleDataChange}>
        <Select.Option value="full">Full Data</Select.Option>
        <Select.Option value="data">Tiny Data</Select.Option>
      </Select>
      <h4 className="demo-text">(only for Demo)</h4>
    </HeaderStyles>
  );
};

export const Header = withRouter(HeaderWithRouter);
