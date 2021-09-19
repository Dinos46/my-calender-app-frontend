//ROUTER
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
//RENDER ROUTES
import { routes } from './routes';
//COMPONENTS
import { Header } from './cmps/Header/Header';
import { Footer } from './cmps/Footer/Footer';

export const App = () => {
  return (
    <div className=''>
      <Router>
        <Header />
        <main className='full main-container'>
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
