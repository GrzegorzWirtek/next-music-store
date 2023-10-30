import Stripe from 'stripe';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
		apiVersion: '2023-10-16',
	});

	const data = await req.json();

	const sessions = await stripe.checkout.sessions.create({
		success_url: 'https://localhost:3000',
		line_items: data,
		mode: 'payment',
		currency: 'EUR',
	});

	return NextResponse.json(sessions.url);
}
