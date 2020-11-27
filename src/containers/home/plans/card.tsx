import React from 'react';
import styled from 'styled-components';

const Root = styled.a`
	border-radius: 16px;
	box-shadow: ${props => props.theme.shadows.layout.large.strong.normal};
	margin: 0 32px;
	width: 300px;
	height: 60%;
	position: relative;
	transition-duration: 1000ms;
	transition-property: trasnform box-shadow;
	cursor: pointer;
	text-decoration: none;
	outline: 1px solid rgba(0, 0, 0, 0);
	:hover, :focus {
		transform: scale(1.05);
		box-shadow: ${props => props.theme.shadows.layout.large.strong.hover};
	}
	:active {
		transform: scale(.95);
		box-shadow: ${props => props.theme.shadows.layout.large.strong.active};
	}
`;

const Header = styled.div<{ backgroundColor: string, textColor: string }>`
	background-color: ${({ backgroundColor }) => backgroundColor};
	border-radius: 16px 16px 0 0;
	padding: 16px;
	text-align: center;
	height: 150px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	color: ${({ textColor }) => textColor};
`;

const Title = styled.p`
	font-size: 28px;
	margin: 0;
`;

const Price = styled.p`
	font-size: 30px;
	margin: 0;
`;

const Frequency = styled.p`
	font-size: 22px;
	margin: 0;
	${props => props.children === 'a' ? 'color: transparent;': ''}
`;

const Body = styled.ul`
	padding: 16px;
	border-radius: 0 0 16px 16px;
	background-color: white;
	overflow-y: auto;
`;

const Item = styled.li`
	font-size: 16px;
	color: black;
	margin: 8px 0 8px 16px;
`;

const Banner = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	width: 60%;
	padding: 8px 16px;
	text-align: center;
	background-color: ${props => props.theme.colors.action.main};
	color: rgba(0, 0, 0, 0.8);
	border-radius: 16px 16px 0 0;
	transform: translate(-50%, -100%);
	font-size: 18px;
`;

type HomePlanCardProps = React.PropsWithoutRef<{
	title: string,
	price: string,
	frequency: string,
	bodyItems: string[],
	headerBackgroundColor: string,
	headerTextColor: string,
	linkHref: string,
	showBanner?: boolean,
}>;

type HomePlanCardComponent = React.FunctionComponent<HomePlanCardProps>;

const HomePlanCard: HomePlanCardComponent = ({
	bodyItems,
	frequency,
	headerBackgroundColor,
	headerTextColor,
	price,
	title,
	linkHref,
	showBanner = false,
}) => {
	return (
		<Root href={linkHref}>
			{ showBanner && <Banner>Preferido!</Banner> }
			<Header backgroundColor={headerBackgroundColor} textColor={headerTextColor}>
				<Title>{title}</Title>
				<Price>{price}</Price>
				<Frequency>{frequency || 'a'}</Frequency>
			</Header>
			<Body>
				{bodyItems.map(item => <Item key={item}>{item}</Item>)}
			</Body>
		</Root>
	);
}

export default HomePlanCard;