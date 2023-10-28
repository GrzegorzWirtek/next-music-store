const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
	const stripeObj = await stripe.checkout.sessions.create({
		success_url: 'https://localhost:3000',
		line_items: [{ price: 'price_1O69IJDZHLfRukhz4Cq4lLuo', quantity: 2 }],
		mode: 'payment',
	});

	return NextResponse.json(stripeObj);
}
