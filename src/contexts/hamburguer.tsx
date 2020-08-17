import React from 'react';

type HamburguerContext = {
	isHamburguerOpen: boolean,
	openHamburguer: () => void,
	closeHamburguer: () => void,
};

const context = React.createContext<HamburguerContext>(null as any);

const HamburguerProvider = ({ ...props }) => {
	const [isHamburguerOpen, setIsHamburguerOpen] = React.useState<boolean>(false);

	function closeHamburguer () {
		setIsHamburguerOpen(false);
	}

	function openHamburguer () {
		setIsHamburguerOpen(true);
	}

	return <context.Provider {...props} value={{ isHamburguerOpen, openHamburguer, closeHamburguer }} />
}

function useHamburguer () {
	return React.useContext(context) as HamburguerContext;
}

export default HamburguerProvider;
export { useHamburguer };