import styled, { css } from 'styled-components';
const Message = styled.p`
	padding: 10px;
	${(props) => `
		color: #b02d00;
	`}
	${(props2) => `
		border-color: red;
	`}
`;
