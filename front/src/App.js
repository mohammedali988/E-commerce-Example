import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./component/layOut";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import ConnectWallet from "./pages/ConnectWallet";
import Support from "./pages/Support";
import CreateItem from "./pages/CreateItem";
import ItemDetails from "./pages/ItemDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="explore" element={<Explore />}></Route>
          <Route path="connect/wallet" element={<ConnectWallet />}></Route>
          <Route path="support" element={<Support />}></Route>
          <Route path="create/item" element={<CreateItem />}></Route>
          <Route path="itemDetails" element={<ItemDetails />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
