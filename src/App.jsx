import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import Error from "./components/Error.jsx";
import Cart from "./components/Cart.jsx"
import Checkout from "./components/Checkout.jsx";
import { CartProvider } from "./context/CartContext.jsx"
import './sass/style.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="categories/:category" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error message='404 route not found'/>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

// Routes lo importamos para poder empezar a linkear nuestros elementos.

// NavBar lo dejamos fuera de Routes por que queremos que siempre se muestre, no solo cuando estamos dentro de un componente en especifico, lo mismo para el footer y otros elementos que queramos que siempre se muestren.

// BrowserRouter lo importamos para poder crear rutas y conectar nuestra app.

// CartProvider lo usamos para el Context, de esta manera, podemos enviar funciones desde 'CartContext' a toda nuestra app.