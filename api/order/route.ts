const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import type { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
	res.statusCode = 200;

	// const stripeObj = await stripe.checkout.sessions.create({
	// 	success_url: 'https://example.com/success',
	// 	line_items: [{ price: 'price_H5ggYwtDq4fbrJ', quantity: 2 }],
	// 	mode: 'payment',
	// });

	res.json({ aaa: 'dsad' });
}
