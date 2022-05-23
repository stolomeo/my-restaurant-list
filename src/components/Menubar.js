import React, { useContext } from "react";

import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  PlusCircleOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { UserContext } from "../App";

export default function Menubar({ displayName }) {
  let navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
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
          icon={
            !user ? (
              <QuestionCircleOutlined style={styles} />
            ) : (
              <UserOutlined style={styles} />
            )
          }
        >
          {!user ? "Guest" : user.displayName}
        </Menu.Item>
      </Menu>
    </div>
  );
}

const styles = {
  fontSize: "1.8em",
};
