import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Menu from "../pages/Menu";
import PaymentSuccess from "../pages/PaymentSuccess";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Cart />} />
        <Route path="/cart" element={<Menu />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Navigation;
