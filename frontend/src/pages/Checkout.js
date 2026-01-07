import React from "react";
import { useCart } from "../context/CartContext";
import { Container, Typography, Box, Grid, Button, Divider, CardMedia, IconButton, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { resolveImageUrl } from "../config";
import { Link, useNavigate } from "react-router-dom";

export default function Checkout() {
  // Fonksiyon isimlerini CartContext'teki add, decrease, remove, clear ile eşitledik
  const { items, add, decrease, remove, clear } = useCart();
  const navigate = useNavigate();

  // Toplam fiyat hesaplama
  const totalPrice = items.reduce(
    (sum, it) => sum + it.price * (it.quantity || 1),
    0
  );

  // Sepet boşsa gösterilecek ekran
  if (items.length === 0) {
    return (
      <Container sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: 'text.secondary' }}>
          Your cart is empty
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          It looks like you haven't added any fresh products yet.
        </Typography>
        <Button variant="contained" component={Link} to="/" size="large">
          Go Shopping
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        Shopping Cart Summary
      </Typography>

      <Paper elevation={0} variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Button color="error" startIcon={<DeleteIcon />} onClick={clear} sx={{ fontWeight: 'bold' }}>
            Clear Entire Cart
          </Button>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {items.map((item) => (
          <Box key={item.id} sx={{ mb: 3 }}>
            <Grid container alignItems="center" spacing={2}>
              {/* Ürün Görseli */}
              <Grid item xs={12} sm={2}>
                <CardMedia
                  component="img"
                  image={resolveImageUrl(item.imageUrl)}
                  alt={item.name}
                  sx={{ height: 100, width: "100%", borderRadius: 2, objectFit: 'cover' }}
                />
              </Grid>

              {/* Ürün Bilgisi */}
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Unit Price: ${item.price.toFixed(2)}
                </Typography>
              </Grid>

              {/* Miktar Kontrolü */}
              <Grid item xs={12} sm={3} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: 1 }}>
                  <IconButton size="small" onClick={() => decrease(item.id)}>
                    <RemoveIcon fontSize="small" />
                  </IconButton>
                  <Typography sx={{ px: 2, fontWeight: 'bold' }}>{item.quantity || 1}</Typography>
                  <IconButton size="small" onClick={() => add(item)}>
                    <AddIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Grid>

              {/* Ara Toplam ve Silme */}
              <Grid item xs={8} sm={2}>
                <Typography variant="h6" sx={{ color: '#2e7d32', fontWeight: 'bold' }}>
                  ${(item.price * (item.quantity || 1)).toFixed(2)}
                </Typography>
              </Grid>
              <Grid item xs={4} sm={1} sx={{ textAlign: 'right' }}>
                <IconButton color="error" onClick={() => remove(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Divider sx={{ mt: 3 }} />
          </Box>
        ))}

        {/* Alt Toplam ve Ödeme Butonu */}
        <Box
          sx={{
            mt: 4,
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: '#f9f9f9',
            borderRadius: 2
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            Total: ${totalPrice.toFixed(2)}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/payment')} // Payment sayfasına yönlendirme
            sx={{ px: 5, py: 1.5, borderRadius: 2, fontWeight: 'bold' }}
          >
            Go to Payment
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}