import styled from 'styled-components';
import { StyledContainer } from '../../globalStyle';

export const QuestionsContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 600px) {
    padding: 0;
  }
`;
