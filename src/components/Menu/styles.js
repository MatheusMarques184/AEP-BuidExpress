import styled from 'styled-components';
import * as S from '../../styles/styles';

export const Menu = styled(S.MainContent)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background: linear-gradient(94.38deg, #d98d1c -31.45%, #f9a425 140.66%);
	border-radius: 15rem;
	color: var(--white-color);
	margin: 1.5rem auto;
	border: 0.5px solid #00000033;
	padding: 0.2rem 2rem;
`;

export const MenuOption = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;
