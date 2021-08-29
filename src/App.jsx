import React from 'react';
import Header from './components/header/header'
import Main from './components/main/main';
import { GlobalStyle } from './styles/global.styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
}

export default App;
