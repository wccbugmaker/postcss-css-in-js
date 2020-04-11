import styled, { css } from 'styled-components';
const StyledComponent = styled.div`
  margin: 8px 0;

  ${() =>
    css`
      div {
        ${expr};
      }
    `}
`;
