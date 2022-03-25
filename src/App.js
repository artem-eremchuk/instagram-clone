import './App.scss';
import { createContext, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Feed from './components/Pages/Feed/Feed'
import Login from './components/Pages/Login/Login'

export const AppContext = createContext({
  setLogin: () => {}
})

function App() {
  const [ login, setLogin ] =  useState(false)

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <AppContext.Provider value={{setLogin}}>
            <Login />
          </AppContext.Provider>
        </Route>
        <Route path='/feed' exact>
          { login && <Feed /> }
        </Route>
        <Route path='/feed/moderation' exact>
          <div>moderation</div>
        </Route>
      </Switch>
    </BrowserRouter> 
  );
}

export default App;