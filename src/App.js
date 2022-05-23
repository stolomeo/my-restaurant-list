import RestaurantList from "./components/RestaurantList";
import { Layout } from "antd";
import Menubar from "./components/Menubar";
import { Route, Routes } from "react-router-dom";
import RestaurantPage from "./components/RestaurantPage";
import Login from "./components/Login";
import { createContext, useState } from "react";

const { Header, Content } = Layout;
export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
            <Route
              path="/add"
              element={
                !user ? <Login setUser={setUser} /> : <h1>Add restaurant</h1>
              }
            />
            <Route path="/" element={<RestaurantList />} />
          </Routes>
        </Content>
      </Layout>
    </UserContext.Provider>
  );
}

export default App;
