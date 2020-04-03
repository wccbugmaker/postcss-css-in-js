import styled, { css } from 'styled-components';
const Message = styled.p`
	padding: 10px;
	${(props) => css`
		color: #b02d00;
	`}
	${(props2) => css`
		border-color: red;
	`}
`;