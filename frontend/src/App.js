import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import Payment from "./pages/Payment"; // Ödeme sayfası eklendi
import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
  // Arama çubuğuna yazılan metni tutan state
  const [searchTerm, setSearchTerm] = useState('');

  // Logo tıklandığında Home sayfasını sıfırlamak için kullanılan sinyal
  const [resetSignal, setResetSignal] = useState(0);

  return (
    <CartProvider>
      {/* Header'a arama fonksiyonlarını gönderiyoruz */}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setResetSignal={setResetSignal}
      />

      <Routes>
        {/* Ana sayfa: Arama terimine ve sıfırlama sinyaline göre ürün listeler */}
        <Route
          path="/"
          element={<Home searchTerm={searchTerm} resetSignal={resetSignal} />}
        />

        {/* Sepet özeti sayfası */}
        <Route path="/checkout" element={<Checkout />} />

        {/* Ödeme ve Form sayfası */}
        <Route path="/payment" element={<Payment />} />

        {/* Dinamik ürün detay sayfası */}
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </CartProvider>
  );
}

export default App;