import type {NextConfig} from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'pbs.twimg.com',
			},
			{
				protocol: 'https',
				hostname: 'files.couchconcerts.com',
			},
			{
				protocol: 'https',
				hostname: 'upload.wikimedia.org',
			},
		],
	},
};

export default nextConfig;