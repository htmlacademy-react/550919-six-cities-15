import React from 'react';
import MainPage from '../pages/main';

type AppScreenProps = {
  numberOfCards: number;
};

const App: React.FC<AppScreenProps> = ({ numberOfCards }) => (
  <MainPage
    numberOfCards={numberOfCards}
  />
);


export default App;
