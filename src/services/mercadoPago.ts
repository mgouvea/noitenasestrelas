import { useMercadopago } from 'react-sdk-mercadopago';

export const mercadoPago = useMercadopago.v2(process.env.PUBLIC_KEY_MP, {
  locale: 'en-US',
});
