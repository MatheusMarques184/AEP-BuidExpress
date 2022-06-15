import styled from 'styled-components';
import * as S from '../../../styles/styles';

export const MainContent = styled(S.MainContent)`
	display: flex;
	flex-direction: column;
	height: 75%;
	justify-content: space-between;
	padding: 0;
`;

export const Header = styled.section`
	background-color: #d2b181;
	width: 100%;
	height: 14.3rem;
	display: flex;
	align-items: flex-end;
`;

export const HeaderTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const HeaderTopLeft = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Location = styled.h1`
	padding-left: 1rem;
`;

export const HeaderTopRight = styled.div`
	color: var(--primary-color);
`;

export const HeaderBottom = styled.div``;

export const Categories = styled.ul`
	list-style: none;
	display: flex;
	justify-content: space-between;
	padding: 1rem 0rem;
`;

export const Category = styled.li`
	cursor: pointer;
`;
