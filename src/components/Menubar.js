import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  PlusCircleOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function Menubar() {
  return (
    <div>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item
          key="home"
          icon={<HomeOutlined style={styles} />}
        ></Menu.Item>
        <Menu.Item
          key="add"
          icon={<PlusCircleOutlined style={styles} />}
        ></Menu.Item>
        <Menu.Item
          key="random"
          icon={<QuestionCircleOutlined style={styles} />}
        ></Menu.Item>
        <Menu.Item
          key="user"
          icon={<UserOutlined style={styles} />}
        ></Menu.Item>
      </Menu>
    </div>
  );
}

const styles = {
  fontSize: "1.8em",
};
