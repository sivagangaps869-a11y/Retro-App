
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../Redux/Slice/authSlice';
import { useNavigate, Link } from 'react-router-dom';

function Register() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error } = useSelector(
        state => state.authReducer
    );

    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleRegister = (e) => {
        e.preventDefault();

        dispatch(registerUser(userDetails))
            .unwrap()
            .then(() => {
                alert("Registration successful");
                navigate('/login');
            })
            .catch(() => {});
    };

    return (
        <div className="container my-5 text-center ">
            <h2>Register</h2>

            <form onSubmit={handleRegister}>

                <input
                    className="form-control mb-3 w-25 mx-auto"
                    placeholder="Enter name"
                    value={userDetails.name}
                    onChange={e => setUserDetails({
                        ...userDetails,
                        name: e.target.value
                    })}
                    required
                />

                <input
                    className="form-control mb-3 w-25 mx-auto"
                    type="email"
                    placeholder="Enter email"
                    value={userDetails.email}
                    onChange={e => setUserDetails({
                        ...userDetails,
                        email: e.target.value
                    })}
                    required
                />

                <input
                    className="form-control mb-3 w-25 mx-auto"
                    type="password"
                    placeholder="Enter password"
                    value={userDetails.password}
                    onChange={e => setUserDetails({
                        ...userDetails,
                        password: e.target.value
                    })}
                    required
                />

                

                <button className="btn btn-primary" disabled={loading}>
                    {loading ? "Registering..." : "Register"}
                </button>

            </form>

            <p className="mt-3">
                Already registered? <Link to="/login">Login</Link>
            </p>
        </div>
    );
}

export default Register;
