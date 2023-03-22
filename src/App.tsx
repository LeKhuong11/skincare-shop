import React from 'react';
import Header from './layouts/Header/Header';
import { RoutesConfigurations } from './routes/routesConfigurations';
import root from './App.module.scss';
import { Footer } from './layouts/Footer/Footer';

function App() {
  return (
    <div className={root.App}>
      <Header />
      <div className={root.appContentMain}>
        <RoutesConfigurations />
      </div>
      <Footer />
    </div>
  );
}

export default App;
