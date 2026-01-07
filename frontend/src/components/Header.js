import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge, InputBase, Box, alpha, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

// Arama kutusu için özel stil tanımlamaları (Styled Components)
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch'
    },
  },
}));

export default function Header({ searchTerm, setSearchTerm }) {
  const { items } = useCart();

  // Sepetteki toplam ürün adedini hesaplar (Miktarları toplar)
  const totalCount = items.reduce(
    (sum, it) => sum + (it.quantity || 1),
    0
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#2e7d32' }}> {/* Fresh Market Yeşil Tonu */}
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

        {/* SOL TARAF: Logo ve Marka İsmi */}
        <Box sx={{ flexBasis: '200px' }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: 'bold',
            }}
          >
            Fresh Market
          </Typography>
        </Box>

        {/* ORTA TARAF: Dinamik Arama Çubuğu */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search products..."
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm} // App.js'den gelen state
              onChange={(e) => setSearchTerm(e.target.value)} // State'i güncelleyen fonksiyon
            />
          </Search>
        </Box>

        {/* SAĞ TARAF: Sepet İkonu ve Badge */}
        <Box sx={{ flexBasis: '200px', display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            color="inherit"
            aria-label="cart"
            component={Link}
            to="/checkout"
          >
            <Badge badgeContent={totalCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>

      </Toolbar>
    </AppBar>
  );
}