import React from "react";
import { initializeApp } from "firebase/app";
import { Button, Form, Input } from "antd";

const firebaseConfig = {
  apiKey: "AIzaSyDfBGbR5P2Foh82CQrpoJm_gHXOrPxaHes",
  authDomain: "my-first-firestore-st.firebaseapp.com",
  projectId: "my-first-firestore-st",
  storageBucket: "my-first-firestore-st.appspot.com",
  messagingSenderId: "1049745553970",
  appId: "1:1049745553970:web:a72cd14e8ba526c0835a2b",
  measurementId: "G-605MHRSNP6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function Login() {
  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
      <Form.Item label="Email" name="email">
        <Input />
      </Form.Item>
    </Form>
  );
}
