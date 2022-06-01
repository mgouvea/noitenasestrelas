const mercadopago = require('mercadopago');
mercadopago.configurations.setAccessToken(process.env.ACCESS_TOKEN);

type IdentificationPayerPix = {
  type: string;
  number: string;
};

type PayerPix = {
  first_name: string;
  last_name: string;
  email: string;
  identification: IdentificationPayerPix;
};

type PaymentProps = {
  transaction_amount: number;
  payment_method_id: string;
  payer: PayerPix;
  description: string;
};

const payment_data = ({
  transaction_amount,
  description,
  payment_method_id,
  payer,
}: PaymentProps) => {
  return {
    transaction_amount: transaction_amount,
    description: description,
    payment_method_id: payment_method_id,
    payer: {
      first_name: payer.first_name,
      last_name: payer.last_name,
      email: payer.email,
      identification: {
        type: payer.identification.type,
        number: payer.identification.number,
      },
    },
  };
};

export const mp = mercadopago.payment
  .create(payment_data)
  .then(function (data) {})
  .catch(function (error) {});
