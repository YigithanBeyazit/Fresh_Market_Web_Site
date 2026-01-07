import React, { useState } from "react";
import {
  Card, CardMedia, CardContent, Typography, IconButton,
  Box, CardActionArea, Snackbar, Alert
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useCart } from "../context/CartContext";
import { resolveImageUrl } from "../config";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { add } = useCart();
  const navigate = useNavigate();

  // Sepete eklendiğinde açılacak bildirim durumu
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Kartın tıklama olayının tetiklenmesini engeller
    add(product);
    setOpenSnackbar(true);
  };

  return (
    <>
      <Card sx={{
        maxWidth: 345,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)', // Üzerine gelince yukarı kalkma efekti
          boxShadow: 4
        }
      }}>
        <CardActionArea onClick={handleCardClick}>
          <CardMedia
            component="img"
            height="180"
            image={resolveImageUrl(product.imageUrl)}
            alt={product.name}
            sx={{ objectFit: 'cover' }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h6" component="div" noWrap>
              {product.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: '-webkit-box',
                WebkitLineClamp: 2, // Açıklamayı 2 satırla sınırlar
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                height: '40px'
              }}
            >
              {product.description}
            </Typography>
          </CardContent>
        </CardActionArea>

        <Box sx={{
          p: 2,
          pt: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2e7d32' }}>
            ${product.price.toFixed(2)}
          </Typography>

          <IconButton
            color="success"
            onClick={handleAddToCart}
            sx={{
              transition: '0.2s',
              '&:hover': { transform: 'scale(1.1)' }
            }}
          >
            <AddCircleIcon fontSize="large" />
          </IconButton>
        </Box>
      </Card>

      {/* Sepet Bildirimi */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert severity="success" variant="filled" sx={{ width: '100%' }}>
          {product.name} added to cart!
        </Alert>
      </Snackbar>
    </>
  );
}