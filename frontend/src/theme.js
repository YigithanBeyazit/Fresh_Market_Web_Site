import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    // Fresh Market konseptine daha uygun olan yeşil tonu
    primary: { main: '#2e7d32' },
    secondary: { main: '#ffa000' } // Portakal/Havuç turuncusu (vurgu rengi)
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 1
      }
    },
    // Butonları daha yuvarlak yaparak "organik" bir hava katabilirsin
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  }
});

export default theme;