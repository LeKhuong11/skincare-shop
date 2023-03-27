import React, { useEffect } from 'react';
import Header from './layouts/Header/Header';
import { RoutesConfigurations } from './routes/routesConfigurations';
import root from './App.module.scss';
import { Footer } from './layouts/Footer/Footer';
import { useAppDispatch } from './redux/store';
import { fetchProducts } from './redux/slice/productsSilce';

function App() {
  const dispath = useAppDispatch();

  useEffect(() => {
    dispath(fetchProducts())
  }, [])
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
