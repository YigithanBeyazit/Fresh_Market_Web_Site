import api from "../api/axios";

// Öne çıkan (Örn: taze/indirimli) ürünleri getirir
export const getTopProducts = async () => {
  // Backend'deki @GetMapping("/featured") ucuyla eşleşmeli
  const res = await api.get("/products/featured");
  return res.data;
};

// Tüm market ürünlerini getirir
export const getAllProducts = async () => {
  const res = await api.get("/products");
  return res.data;
};

// ID'ye göre tek bir meyve/sebze detayını getirir
export const getProductById = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};