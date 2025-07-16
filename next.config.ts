import type {NextConfig} from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.squarespace-cdn.com',
			},
			{
				protocol: 'https',
				hostname: 'files.couchconcerts.com',
			},
			{
				protocol: 'https',
				hostname: 'remixlabs.com',
			},
		],
	},
};

export default nextConfig;