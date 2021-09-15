import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { routes } from './routes';

import { Header } from './cmps/Header';
import { Footer } from './cmps/Footer';

export const App = () => {
  return (
    <div className=''>
      <Router>
        <Header />
        <main className='full grid'>
          <Switch>
            {routes.map(({ path, component }) => (
              <Route path={path} component={component} key={path} />
            ))}
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
};
