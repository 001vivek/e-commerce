import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import ProductDetails from "./components/Shop/ProductDetails";
import ProductLists from "./components/Shop/ProductList";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <Router>
      <Layout>
      {showCart && <Cart />}
        <Routes>
          <Route path="/" exact element={<ProductLists />} />
          <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
