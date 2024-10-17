import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./Components/Admin";
import Login from "./Components/Login";
import Allprod from "./Components/Allprod";
import Prducts from "./Components/Prducts";
import CreateApi from "./Components/CreateApi";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/allprod" element={<Allprod />} />
          <Route path="/products" element={<Prducts />} />
          <Route path="/addprod/" element={<CreateApi />} />
          <Route path="/addprod/:id" element={<CreateApi />} />
          {/* <Route path="/allprod/:id" element={<CreateApi />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
