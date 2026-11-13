
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Redux/Slice/authSlice';
import { useNavigate, Link } from 'react-router-dom';

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error } = useSelector(
        state => state.authReducer
    );

    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
    });

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(loginUser(loginDetails))
            .unwrap()
            .then(() => {
                
                navigate('/profile');
            })
            .catch(() => {});
    };

    return (
        <div className="container my-5 text-center">
            <h2>Login</h2>

            <form onSubmit={handleLogin}>

                <input
                    className="form-control mb-3 w-25 mx-auto"
                    type="email"
                    placeholder="Enter email"
                    value={loginDetails.email}
                    onChange={e => setLoginDetails({
                        ...loginDetails,
                        email: e.target.value
                    })}
                    required
                />

                <input
                    className="form-control mb-3 w-25 mx-auto"
                    type="password"
                    placeholder="Enter password"
                    value={loginDetails.password}
                    onChange={e => setLoginDetails({
                        ...loginDetails,
                        password: e.target.value
                    })}
                    required
                />

               

                <button className="btn btn-primary" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>

            </form>

            <p className="mt-3">
                New user? <Link to="/register">Register</Link>
            </p>
        </div>
    );
}

export default Login;
