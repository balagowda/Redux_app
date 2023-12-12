import "./App.css";
import { Routes, Route} from "react-router-dom";
import ProductList from './Components/ProductList'
import ProductDetail from './Components/ProductDetail'

const App = ()=> {
  return (
    <Routes>
      <Route path="/" exact element={<ProductList />} />

      <Route path="/product/:productId" element={<ProductDetail />} />

      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
