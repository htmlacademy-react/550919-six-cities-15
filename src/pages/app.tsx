import React from 'react';
import MainPage from '../components/main';

type AppScreenProps = {
  numberOfCards: number;
};

const App: React.FC<AppScreenProps> = ({ numberOfCards }) => (
  <MainPage
    numberOfCards={numberOfCards}
  />
);


export default App;
