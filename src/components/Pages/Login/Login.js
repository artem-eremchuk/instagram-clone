import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const Login = () => {
    const history = useHistory()

    return (
        <form onSubmit={e => {
            e.preventDefault()
            history.push('/feed')
        }}>
            <input type="text" placeholder="username" />
            <br />
            <input type="password" />
            <button>
                Log in
            </button>
        </form>
    )
}

export default Login