import RestaurantList from "./components/RestaurantList";
import { Layout } from "antd";
import Menubar from "./components/Menubar";
import { Route, Routes } from "react-router-dom";
import RestaurantPage from "./components/RestaurantPage";
import Login from "./components/Login";

function App() {
  const { Header, Content } = Layout;
  return (
    <Layout className="layout">
      <Header>
        <Menubar />
      </Header>
      <Content>
        <Routes>
          <Route
            path="/restaurants/:restaurantId"
            element={<RestaurantPage />}
          />
          <Route path="/Random" element={<h1>Random</h1>} />
          <Route path="/add" element={<h1>Add restaurant</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<RestaurantList />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default App;
