import { StyledContainer, StyledButton } from './../../globalStyle';
import styled from 'styled-components';

export const QuestionViewContainer = styled(StyledContainer)`
  padding: 1rem 1.5rem;
  box-shadow: ${({ theme }) => theme.darkShadow};
  .question__view-info {
    height: 0;
    overflow: hidden;
    margin-top: 0.5rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.darkGrey};
    transition: all 0.1s ease-in-out;
    &.show-info {
      height: 100%;
    }
  }
`;

export const QuestionViewHeader = styled.header`
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ShowButton = styled(StyledButton)`
  padding: 0;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.red};
  background-color: ${({ theme }) => theme.colors.grey};
`;
