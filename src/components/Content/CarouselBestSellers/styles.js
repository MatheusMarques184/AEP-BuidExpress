import styled from 'styled-components';
import * as S from '../../../styles/styles';

export const Card = styled.div`
	width: 9.2rem;
	height: 19rem;
`;

export const CardImage = styled.div`
	padding: 1rem 1rem 1rem 1.5rem;
	border-bottom: 0.5px solid rgba(161, 161, 161, 0.6);
`;

export const Image = styled.img``;

export const CardText = styled.div`
	width: 100%;
`;

export const MainContent = styled(S.MainContent)``;

export const Description = styled.p``;

export const DescriptionValue = styled.p`
	text-align: right;
	color: var(--primary-color);
	font-weight: bold;
`;

export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 9.2rem;
	height: 19rem;
	background-color: #eaeaea;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
`;

export const Buy = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ButtonBuy = styled.div`
	background-color: var(--primary-color);
	border-radius: 2rem;
	width: 8rem;
	height: 2.1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	cursor: pointer;
`;

export const Button = styled.a``;
