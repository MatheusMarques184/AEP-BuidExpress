import styled from 'styled-components';
import * as S from '../../../styles/styles';

export const Card = styled.div`
	height: 15rem;
	width: 1rem;
	background-image: url(${(props) => props.img});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 1.5rem;
	cursor: pointer;
`;

export const Name = styled.h2`
	text-align: center;
	color: var(--white-color);
`;

export const CardName = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-end;
`;

export const MainContent = styled(S.MainContent)``;
