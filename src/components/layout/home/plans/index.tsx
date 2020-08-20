import React from 'react';
import styled, { useTheme } from 'styled-components';
import HomePlanCard from './card';

const Root = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

type HomePlansProps = React.PropsWithoutRef<{
}>;

type HomePlansComponent = React.FunctionComponent<HomePlansProps>;

const HomePlans: HomePlansComponent = ({  }) => {
	const theme = useTheme();

	return (
		// Note: The ID is used by the navbar to scroll this element into view.
		<Root id='plans'>
			<HomePlanCard
				bodyItems={[
					'Acesso a métricas de diversidade e inclusão da sua empresa',
					'',
				]}
				frequency=''
				headerBackgroundColor={theme.colors.secondary.light}
				headerTextColor={theme.colors.secondary.dark}
				price='Grátis!'
				title='Básico'
				linkHref='#'
			/>
			<HomePlanCard
				bodyItems={[
					'Tudo do plano Básico',
					'Acesso a diagnósticos da sua empresa em tempo integral',
					'Soluções individuais e costumizadas para a sua empresa',
					'Treinamento e ações de impacto em diversidade, equidade e inclusão',
				]}
				frequency='Por mês'
				// Based on this color: #CD004B. It's a shade of red
				headerBackgroundColor='#e16693'
				headerTextColor='#52001e'
				price='R$ 100,00'
				title='Pro'
				showBanner
				linkHref='#'
			/>
			<HomePlanCard
				bodyItems={[
					'Tudo do plano Pro',
					'Monitoramento permanente',
					'Gerenciamento de métricas',
					'Implementações de soluções para impactos no ROI, desempenho e faaturamento',
				]}
				frequency='Por mês'
				// Based on this color: #04B34A. It's a shade of green
				headerBackgroundColor='#68d192'
				headerTextColor='#02481e'
				price='R$ 200,00'
				title='Premium'
				linkHref='#'
			/>
		</Root>
	);
}

export default HomePlans;