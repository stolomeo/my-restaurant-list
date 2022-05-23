import React from "react";
import { initializeApp } from "firebase/app";
import { Button, Form, Input } from "antd";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfBGbR5P2Foh82CQrpoJm_gHXOrPxaHes",
  authDomain: "my-first-firestore-st.firebaseapp.com",
  projectId: "my-first-firestore-st",
  storageBucket: "my-first-firestore-st.appspot.com",
  messagingSenderId: "1049745553970",
  appId: "1:1049745553970:web:a72cd14e8ba526c0835a2b",
  measurementId: "G-605MHRSNP6",
};

const connectAuth = () => {
  const app = initializeApp(firebaseConfig); //connect fo firebase
  return getAuth(app);
};

// Initialize Firebase

export default function Login() {
  const handleLogin = ({ email, password }) => {
    const auth = connectAuth(); //connect to auth
    //login with firebase auth
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res.user))
      .catch(console.error);
  };

  const handleGoogleLogin = () => {
    const auth = connectAuth(); //connect to auth
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => console.log(res.user))
      .catch(console.error);
  };

  return (
    <section style={{ padding: "2em" }}>
      <Form
        onFinish={handleLogin}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter a valid email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button onClick={handleGoogleLogin}>Google Login</Button>
        </Form.Item>
      </Form>
    </section>
  );
}
