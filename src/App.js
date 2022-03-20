import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Feed from './components/Pages/Feed/Feed'
import Login from './components/Pages/Login/Login'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Login />
        </Route>
        <Route path='/feed' exact>
          <Feed />
        </Route>
        <Route path='/feed/moderation' exact>
          <div>moderation</div>
        </Route>
      </Switch>
    </BrowserRouter> 
  );
}

export default App;