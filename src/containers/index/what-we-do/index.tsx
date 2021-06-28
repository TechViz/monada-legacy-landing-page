import React from 'react';
import styled from 'styled-components';
import HomeSubpartRoot from '../home-subpart-root';

const List = styled.ul`
	padding: 64px 0;
	margin: 0;
	width: 100%;
	padding-left: 16px;
	row-gap: 32px;
	display: flex;
	flex-direction: column;
	font-size: 32px;
`;

const Item = styled.li``;

type WhatWeDoProps = React.PropsWithoutRef<{}>;

type WhatWeDoComponent = React.FunctionComponent<WhatWeDoProps>;

const WhatWeDo: WhatWeDoComponent = ({}) => {
	return (
		<HomeSubpartRoot>
			<List>
				<Item>Demonstrativo de retorno de investimentos;</Item>
				<Item>Dashboard interativa com métricas de D&I atualizadas em tempo real;</Item>
				<Item>Indicadores e KPIs para obtenção de retornos a curto, médio e longo prazo;</Item>
				<Item>Mapeamento de oportunidades e desafios para investimentos de impacto; </Item>
				<Item>
					Conexão de métricas de D&I com metas de ESG (Environmental, Social & Governance);
				</Item>
			</List>
		</HomeSubpartRoot>
	);
};

export default WhatWeDo;
