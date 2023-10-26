const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
	res.statusCode = 200;

	// const stripeObj = await stripe.checkout.sessions.create({
	// 	success_url: 'https://example.com/success',
	// 	line_items: [{ price: 12, quantity: 2 }],
	// 	mode: 'payment',
	// });
	// console.log('HERE IS STRIPE OBJ', stripeObj);

	return NextResponse.json({ hi: 'helo' });
}
