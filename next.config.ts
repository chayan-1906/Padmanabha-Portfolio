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
			{
				protocol: 'https',
				hostname: 'github.com',
			},
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'ap-south-1.graphassets.com',
			},
		],
	},
};

export default nextConfig;
