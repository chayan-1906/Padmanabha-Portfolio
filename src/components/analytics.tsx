'use client';

import {useEffect} from 'react';

function Analytics() {
	useEffect(() => {
		fetch('/api/analytics', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		}).catch(error => console.error('Analytics error:', error));
	}, []);

	return null;
}

export default Analytics;
