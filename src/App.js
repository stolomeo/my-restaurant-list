import RestaurantList from "./components/RestaurantList";
import { Layout } from "antd";
import Menubar from "./components/Menubar";

function App() {
  const { Header, Content } = Layout;
  return (
    <Layout className="layout">
      <Header>
        <Menubar />
      </Header>
      <Content>
        <RestaurantList />
      </Content>
    </Layout>
  );
}

export default App;
