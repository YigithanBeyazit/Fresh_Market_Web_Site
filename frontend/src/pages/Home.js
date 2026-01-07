import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box, CircularProgress, Alert } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../services/productService';

export default function Home({ searchTerm, resetSignal }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Verileri Backend'den Çekme İşlemi
  useEffect(() => {
    let mounted = true;
    setLoading(true);

    getAllProducts()
      .then((data) => {
        if (mounted) {
          setProducts(data);
          setLoading(false);
          setError(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          console.error("Fetch error:", err);
          setLoading(false);
          setError(true);
        }
      });

    return () => { mounted = false; };
  }, [resetSignal]); // Logo tıklandığında resetSignal değişir ve veriler yenilenir

  // Arama Filtreleme Mantığı
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container sx={{ py: 5 }}>
      {/* Başlık Bölümü */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: '#2e7d32' }}>
          Our Fresh Products
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Healthy, fresh, and organic products delivered to your door.
        </Typography>
      </Box>

      {/* Yüklenme ve Hata Durumları */}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
          <CircularProgress color="success" />
        </Box>
      ) : error ? (
        <Alert severity="error">Could not connect to the backend server. Please check your Spring Boot application.</Alert>
      ) : (
        <Grid container spacing={3}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => (
              <Grid item key={p.id} xs={12} sm={6} md={4} lg={3}>
                <ProductCard product={p} />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ textAlign: 'center', py: 5 }}>
                No products found matching "{searchTerm}"
              </Typography>
            </Grid>
          )}
        </Grid>
      )}
    </Container>
  );
}