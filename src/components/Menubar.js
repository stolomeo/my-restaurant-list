import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  PlusCircleOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function Menubar() {
  let navigate = useNavigate();
  return (
    <div>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item
          key="home"
          icon={<HomeOutlined style={styles} />}
          onClick={() => navigate("/")}
        ></Menu.Item>
        <Menu.Item
          key="add"
          icon={<PlusCircleOutlined style={styles} />}
          onClick={() => navigate("/add")}
        ></Menu.Item>
        <Menu.Item
          key="random"
          icon={<QuestionCircleOutlined style={styles} />}
        ></Menu.Item>
      </Menu>
    </div>
  );
}

const styles = {
  fontSize: "1.8em",
};
