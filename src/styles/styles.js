import styled from 'styled-components';
import media from 'styled-media-query';

export const MainContent = styled.section`
	width: 90%;
	margin: 0 auto;
	padding: 1rem;
`;

export const genericTitle = styled.h2`
	font-weight: 900;
	font-size: 2.4rem;
	line-height: 8rem;
	color: var(--black-color);
`;
export const Link = styled.a`
	width: 20rem;
	height: 6rem;
	font-weight: 900;
	font-size: 2.1rem;
	line-height: 2.5rem;
	text-align: center;
	letter-spacing: 0.105rem;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;

	${media.lessThan('large')`
    width: 13rem;
    height: 4.2rem;
    font-size: 1.3rem;
  `}
`;
