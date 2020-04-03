import styled, { css } from 'styled-components';
const Message1 = styled.p`padding: 10px;${css`color: #b02d00;`}`;
const Message2 = styled.p`
	padding: 10px;



	${css`color: #b02d00;`}`;

const Button = styled.a`
	/* This renders the buttons above... Edit me! */
	display: inline-block;
	border-radius: 3px;
	padding: 0.5rem 0;
	margin: 0.5rem 1rem;
	width: 11rem;
	background: transparent;
	color: white;
	border: 2px solid white;

	/* The GitHub button is a primary button
	 * edit this to target it specifically! */
	${props => props.primary && css`
		background: white;
		color: palevioletred;
	`}
`
const Message3 = styled.p`
	padding: 10px;
	${props => props.a ? css`color: red;` : css`color: blue;` }`;
