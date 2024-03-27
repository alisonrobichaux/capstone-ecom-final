import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import CheckoutPage from './components/CheckoutPage';
import ViewCartPage from './components/ViewCartPage';
import OrderConfirmationPage from './components/OrderConfirmationPage';
import ProductPage from './components/ProductPage'
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <div className="overflow-hidden">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/view-cart" element={<ViewCartPage />} />
            <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
            <Route path="/product-page" element={<ProductPage />} /> 

          </Routes>
          <Sidebar />
          <Footer />
        </Router>
      </div>
    </AuthProvider>
  );
};

export default App;
