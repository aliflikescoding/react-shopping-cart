import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CardContext';
import { DataProvider } from './context/DataContext';
import Header from './sections/Header';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import NotFound from './pages/NotFound';
import ProductPage from './pages/ProductPage';
import Footer from './sections/Footer';

const App = () => {
  return (
    <DataProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:productId" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </DataProvider>
    
  );
};

export default App;