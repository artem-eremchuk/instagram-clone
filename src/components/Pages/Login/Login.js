import { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min"
import { AppContext } from "../../../App";
import { setCookie } from '../../../utils/cookies'
import './Login.scss'

const Login = () => {
    const history = useHistory();
    const { setLoggedIn } = useContext(AppContext);
    const [loginValues, setLoginValues] = 
      useState({
        username: '', 
        password: ''
    });

    const {username, password} = loginValues;

    return (
      <div className="login-window-wrapper">
        <form className="login-form" onSubmit={e => {
            e.preventDefault();

            if (username === 'root' && password === 'root') {
              setLoggedIn(true)
              history.push('/feed')
              setCookie('sessionId', 'cd833f451d0d731fb2de02f0fe0deb5d', {
                'max-age': 3600
              })
            }
        }}>
          <input 
            className="login-input"
            value={loginValues.username}
            onChange={(e) => setLoginValues({
              ...loginValues,
              username: e.target.value,
            })}
            type="text" 
            placeholder="username" 
          />
          <input 
            className="login-input"
            value={loginValues.password}
            onChange={(e) => setLoginValues({
              ...loginValues,
              password: e.target.value
            })}
            type="password" 
          />
          <button>Log in</button>
        </form>
      </div>
    )
}

export default Login