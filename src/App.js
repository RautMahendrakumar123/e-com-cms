import { BrowserRouter,Routes,Route } from "react-router-dom";
import Main from "./component/main/Main";
import Cart from "./component/cart/Cart";


function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Main />}/>
    <Route path="/cart" element={<Cart />} />
  </Routes>
  </BrowserRouter>
}

export default App;
