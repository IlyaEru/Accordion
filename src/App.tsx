import styled from 'styled-components';
import Questions from './components/questions/Questions';
import {
  StyledContainer,
  StyledMainHeading,
  StyledSection,
} from './globalStyle';

function App() {
  return (
    <MainContainer>
      <ContentWrapper>
        <MainHero>Questions And Answers About Login</MainHero>
        <Questions />
      </ContentWrapper>
    </MainContainer>
  );
}

const MainContainer = styled(StyledContainer).attrs({
  as: 'main',
})`
  max-width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.purple};
  display: grid;
  place-items: center;
  @media (max-width: 600px) {
    padding: 0;
  }
`;

const ContentWrapper = styled(StyledSection)`
  margin: 80px 0;

  display: grid;
  width: 90vw;
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 2.5rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.darkShadow};
  @media (min-width: 991px) {
    grid-template-columns: 1fr 3fr;
  }
`;

const MainHero = styled(StyledMainHeading)`
  font-size: 1.25rem;
  font-weight: 500;
  @media (min-width: 991px) {
    font-size: 1.5rem;
  }
`;
export default App;
