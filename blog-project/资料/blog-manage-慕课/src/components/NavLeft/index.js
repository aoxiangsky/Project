import React, { useState } from "react";
import { Menu, Icon } from "antd";
import "./index.less";

const { SubMenu } = Menu;

function NavLeft() {
  // 层级菜单状态与函数维护
  const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
  const [openMenuKeys, changeOpenKeys] = useState([]);
  const onOpenChange = openKeys => {
    // 判断当前打开菜单层级
    const latestOpenKey = openKeys.find(key => openMenuKeys.indexOf(key) === -1);
    // 如果不是一级菜单
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      changeOpenKeys(openKeys);
    } else {
      changeOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <div>
      <div className="logo">
        <h1>翱翔会飞</h1>
      </div>
      <Menu mode="inline" openKeys={openMenuKeys} onOpenChange={onOpenChange} theme="dark">
        <SubMenu
          key="sub1"
          title={(
            <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          )}
        >
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={(
            <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
          )}
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={(
            <span>
              <Icon type="setting" />
              <span>Navigation Three</span>
            </span>
          )}
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default NavLeft;
