import MainPage from '../components/MainPage';

type AppScreenProps = {
  numberOfCards: number;
}

function App({numberOfCards}: AppScreenProps): JSX.Element {
  return (
    <MainPage
      numberOfCards={numberOfCards}
    />
  );
}

export default App;
