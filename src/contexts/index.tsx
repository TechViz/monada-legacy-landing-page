import React from 'react';

import HamburguerProvider from "./hamburguer";

const Providers: React.FunctionComponent<React.PropsWithChildren<{}>> = ({ children }) => {
	return <HamburguerProvider>
		{children}
	</HamburguerProvider>
}

export default  Providers;