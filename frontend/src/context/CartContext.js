import React, { createContext, useState, useContext, useEffect } from "react";

// Sepet verilerinin saklanacağı Context oluşturuluyor
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Uygulama genelinde sepet ürünlerini tutan state
  const [items, setItems] = useState([]);

  // Ürün Ekleme (Aynı ürün varsa adedini artırır, yoksa yeni ekler)
  const add = (product) => {
    setItems((prev) => {
      const existing = prev.find((it) => it.id === product.id);
      if (existing) {
        return prev.map((it) =>
          it.id === product.id ? { ...it, quantity: (it.quantity || 1) + 1 } : it
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Miktar Artırma (Checkout sayfasında kullanılır)
  const increase = (id) => {
    setItems(prev =>
      prev.map(it => it.id === id ? { ...it, quantity: (it.quantity || 1) + 1 } : it)
    );
  };

  // Miktar Azaltma (Miktarın 1'in altına düşmesini engeller)
  const decrease = (id) => {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, quantity: Math.max(1, (it.quantity || 1) - 1) } : it
      )
    );
  };

  // Belirli bir ürünü sepetten tamamen silme
  const remove = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  // Sepeti tamamen boşaltma (Ödeme tamamlandığında kullanılır)
  const clear = () => setItems([]);

  // Alt bileşenlere sunulacak fonksiyonlar ve veriler
  const value = {
    items,
    add,
    increase,
    decrease,
    remove,
    clear
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Kolay erişim için Custom Hook
export const useCart = () => useContext(CartContext);