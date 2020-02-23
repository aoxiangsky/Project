import React from "react";
import { Row, Col } from "antd";
import "./index.less";

function Header() {
  return (
    <div className="header">
      <Row>
        <Col span={20}>待编辑按钮区域</Col>
        <Col span={4}>AX欢迎您</Col>
      </Row>
    </div>
  );
}

export default Header;
