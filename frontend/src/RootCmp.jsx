import { routes } from './routes.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './cmps/ScrollToTop';
import { AppHeader } from './cmps/AppHeader.jsx';
import { AppFooter } from './cmps/AppFooter';


export function RootCmp() {
  return (
    <div className='App main-root'>
      <Router>
        <ScrollToTop>
          <AppHeader />
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} exact component={route.component} path={route.path} />
            ))}
          </Switch>
          <AppFooter />
        </ScrollToTop>
      </Router>
    </div>
  );
}
