import React from 'react';
import { contactFormSubmitURL } from '../../../../constants/backend-url';

export function useContactFormSubmit() {
	const [isLoading, setIsLoading] = React.useState(false);

	const makeRequest = React.useCallback(async (body: object) => {
		setIsLoading(true);
		try {
			const headers: Record<string, string> = {
				'Content-Type': 'application/json',
			};

			const response = await fetch(contactFormSubmitURL, {
				method: 'POST',
				headers,
				body: JSON.stringify(body),
			});

			if (!response.ok) throw response;
		} finally {
			setIsLoading(false);
		}
	}, []);

	return { isLoading, makeRequest };
}
