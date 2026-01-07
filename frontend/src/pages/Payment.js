import React, { useState } from 'react';
import {
    Container, Grid, Typography, TextField, Button,
    Box, Paper, RadioGroup, FormControlLabel, Radio, Divider
} from '@mui/material';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
    const { clear, items } = useCart();
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('card');

    // Form state yönetimi
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    // Sadece Harf ve Boşluk İzni (İsim ve Soyisim için)
    const handleLetterInput = (e) => {
        const value = e.target.value;
        if (/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]*$/.test(value)) {
            setFormData({ ...formData, [e.target.name]: value });
        }
    };

    // Sadece Rakam İzni (Telefon, Kart, CVV için)
    const handleNumberInput = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setFormData({ ...formData, [e.target.name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your order! Your fresh products are on the way.");
        clear(); // Sepeti boşalt
        navigate('/'); // Ana sayfaya dön
    };

    return (
        <Container sx={{ py: 5 }}>
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', color: '#2e7d32' }}>
                Checkout & Payment
            </Typography>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={4}>
                    {/* Sol Taraf: Teslimat Bilgileri */}
                    <Grid item xs={12} md={7}>
                        <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
                            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Shipping Information</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth label="First Name *" name="firstName" required
                                        value={formData.firstName} onChange={handleLetterInput}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth label="Last Name *" name="lastName" required
                                        value={formData.lastName} onChange={handleLetterInput}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth label="Phone Number *" name="phone" required
                                        value={formData.phone} onChange={handleNumberInput} inputProps={{ maxLength: 11 }}
                                        placeholder="05XXXXXXXXX"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth label="Full Address *" name="address" required multiline rows={3}
                                        value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    {/* Sağ Taraf: Ödeme Yöntemi */}
                    <Grid item xs={12} md={5}>
                        <Paper variant="outlined" sx={{ p: 3, borderRadius: 2, bgcolor: '#f9f9f9' }}>
                            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Payment Method</Typography>
                            <RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                                <FormControlLabel value="card" control={<Radio color="success" />} label="Credit / Debit Card" />
                                <FormControlLabel value="cash" control={<Radio color="success" />} label="Cash on Delivery" />
                            </RadioGroup>

                            {paymentMethod === 'card' && (
                                <Box sx={{ mt: 3 }}>
                                    <TextField
                                        fullWidth label="Card Number *" name="cardNumber" sx={{ mb: 2 }} required
                                        value={formData.cardNumber} onChange={handleNumberInput} inputProps={{ maxLength: 16 }}
                                    />
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth label="MM/YY *" name="expiry" required
                                                value={formData.expiry} onChange={handleNumberInput} inputProps={{ maxLength: 4 }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                fullWidth label="CVV *" name="cvv" required
                                                value={formData.cvv} onChange={handleNumberInput} inputProps={{ maxLength: 3 }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            )}

                            <Divider sx={{ my: 3 }} />

                            <Button
                                type="submit" variant="contained" color="success"
                                fullWidth size="large" sx={{ py: 1.5, fontWeight: 'bold' }}
                            >
                                Complete Purchase
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}