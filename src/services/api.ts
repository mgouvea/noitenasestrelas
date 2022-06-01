import axios from 'axios';

let baseURL = '';

if (process.env.NODE_ENV === 'development') {
  baseURL = 'https://api.mercadopago.com/v1/payments';
} else {
  baseURL = 'https://api.mercadopago.com/v1/payments';
}

export const api = axios.create({
  baseURL: baseURL,
  // prettier-ignore
  headers: { 'Authorization': `Bearer TEST-3500449633442271-042403-e0acf802af7cef2a1dcabe34e31c5d25-62745465` },
});
