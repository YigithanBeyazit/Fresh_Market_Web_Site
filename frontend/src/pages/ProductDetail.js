import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../services/productService";
import { useCart } from "../context/CartContext";
import { resolveImageUrl } from "../config";

import {
  Container, Grid, Typography, Button, Box,
  CircularProgress, CardMedia, Paper, Divider, Snackbar, Alert
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ProductDetail() {
  const { id } = useParams();
  const { add } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    getProductById(id)
      .then((data) => {
        if (!cancelled) {
          setProduct(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err?.message || "Error loading product");
          setLoading(false);
        }
      });

    return () => { cancelled = true; };
  }, [id]);

  const handleAddToCart = () => {
    add(product);
    setOpenSnackbar(true);
  };

  if (loading) {
    return (
      <Container sx={{ py: 10, display: "flex", justifyContent: "center" }}>
        <CircularProgress color="success" />
      </Container>
    );
  }

  if (error || !product) {
    return (
      <Container sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h5" color="error" gutterBottom>
          Oops! Product not found.
        </Typography>
        <Button variant="contained" component={Link} to="/" startIcon={<ArrowBackIcon />}>
          Back to Fresh Market
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 6 }}>
      <Button
        component={Link}
        to="/"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 4, color: 'text.secondary' }}
      >
        Back to Products
      </Button>

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} variant="outlined" sx={{ p: 2, borderRadius: 4, textAlign: 'center' }}>
            <CardMedia
              component="img"
              image={resolveImageUrl(product.imageUrl)}
              alt={product.name}
              sx={{
                width: "100%",
                maxHeight: 500,
                objectFit: "contain",
                borderRadius: 2,
              }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="overline" color="success.main" sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
            {product.category || "Fresh Produce"}
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            {product.name}
          </Typography>

          <Typography variant="h4" sx={{ color: '#2e7d32', mb: 3, fontWeight: 'bold' }}>
            ${typeof product.price === "number" ? product.price.toFixed(2) : product.price}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Description
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
            {product.description}
          </Typography>

          {product.details && (
            <Box sx={{ mt: 2, p: 2, bgcolor: '#f9f9f9', borderRadius: 2 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                Nutritional Details & Origin:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.details}
              </Typography>
            </Box>
          )}

          <Box sx={{ mt: 5 }}>
            <Button
              variant="contained"
              size="large"
              color="success"
              startIcon={<ShoppingCartIcon />}
              onClick={handleAddToCart}
              sx={{ px: 4, py: 1.5, borderRadius: 3, fontWeight: 'bold' }}
            >
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert severity="success" variant="filled" sx={{ width: '100%' }}>
          {product.name} added to your cart!
        </Alert>
      </Snackbar>
    </Container>
  );
}