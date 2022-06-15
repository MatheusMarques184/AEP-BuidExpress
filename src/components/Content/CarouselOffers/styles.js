import styled from 'styled-components';
import * as S from '../../../styles/styles';

export const Card = styled.div`
	width: 30.5rem;
	height: 11.3rem;
	cursor: pointer;
`;

export const Title = styled.h2`
	color: var(--white-color);
`;

export const CardImage = styled.div`
	padding: 1rem 1rem 1rem 1.5rem;
`;

export const Image = styled.img``;

export const CardText = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding-right: 1rem;
`;

export const MainContent = styled(S.MainContent)``;

export const Description = styled.span`
	color: var(--white-color);
`;

export const DescriptionValue = styled.p`
	font-size: 2rem;
	display: inline;
	font-weight: bold;
`;

export const CardContent = styled.div`
	display: flex;
	background-color: var(--primary-color);
	width: 30.5rem;
	height: 11.3rem;
	border: 0.5px solid rgba(0, 0, 0, 0.2);
	box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
	border-radius: 1.7rem;
`;
