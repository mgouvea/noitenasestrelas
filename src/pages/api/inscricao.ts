import { NextApiRequest, NextApiResponse } from 'next';
import { mp } from '../../services/mercadoPago';
// import { connectToDatabase } from '../../../services/mongodb';

const handlerCreateVegetal = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { method } = req;

    switch (method) {
      case 'POST':
        const mercadopago = require('mercadopago');
        mercadopago.configurations.setAccessToken(process.env.ACCESS_TOKEN_MP);

        const payment_data = {
          transaction_amount: 100,
          description: 'Noite nas Estrelas',
          payment_method_id: 'pix',
          payer: {
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            identification: {
              type: req.body.identification.type,
              number: req.body.identification.number,
            },
          },
        };

        mercadopago.payment
          .create(payment_data)
          .then(function (data) {})
          .catch(function (error) {});

        break;
      default:
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handlerCreateVegetal;
