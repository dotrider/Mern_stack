import React from 'react';
import Header from './Components/Header/Header';
import routes from './routes';
import '../src/styles/reset.scss';
import '../src/styles/App.scss';

const App = () => {
  return (
    <div className="App">
      <Header/>
      {routes}
    </div>
  );
}

export default App;
