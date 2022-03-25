import { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { AppContext } from "../../../App";

const Login = () => {
    const history = useHistory();
    const { setLogin } = useContext(AppContext);
    const [loginValues, setLoginValues] = 
      useState({
        username: '', 
        password: ''
    });

    const {username, password} = loginValues;

    return (
      <div className="login-window-wrapper">
        <form onSubmit={e => {
            e.preventDefault();

            if (username === 'root' && password === 'root') {
              setLogin(true)
              history.push('/feed')
            }

            setLoginValues({
              username: '', 
              password: ''
            })

            document.cookie = 'sessionId=cd833f451d0d731fb2de02f0fe0deb5d; max-age=3600'
        }}>
          <input 
            className="login-window-username"
            value={loginValues.username}
            onChange={(e) => setLoginValues({
              username: e.target.value,
              password: loginValues.password
            })}
            type="text" 
            placeholder="username" 
          />
          <input 
            className="login-window-password"
            value={loginValues.password}
            onChange={(e) => setLoginValues({
              username: loginValues.username,
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