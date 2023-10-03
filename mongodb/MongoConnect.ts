import mongoose from 'mongoose';

const { MONGO_URI } = process.env;

if (!MONGO_URI) throw new Error('Add MONGO_URI to .env.local');

export const connectMongoDB = async () => {
	if (mongoose.connection.readyState === 1) {
		return mongoose.connection.asPromise();
	}

	return await mongoose.connect(MONGO_URI);
};
