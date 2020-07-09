import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { signInWithPassword } from '../../../hooks/useAuth';
import Auth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthUser } from '../../../redux/actions/authActions';


// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
    const errors = {};
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    
    if(!values.password){
        errors.password = 'Required';
    }

    return errors;
};

const Login = (props) => {

    const auth = Auth();
    let history = useHistory();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));

            const email = values.email;
            const password = values.password;

            auth.signInWithPassword(email, password)
            .then(res => {
                props.setAuthUser(res);
                history.push('/dashboard');
                // console.log(res.user)
            })
            .catch(err=>{
                console.log(err)
            })
        },
    });

    const handleSignIn = () => {
        auth.signInWithGoogle()
            .then(res => {
                props.setAuthUser(res);
                history.push('/dashboard');
            })
    }

    const handleSignOut = () => {
        auth.signOut()
            .then(res => {
                props.setAuthUser(null);
                history.push('/');
            })
    }

    return (
        <>
            <div className="w-full max-w-xs mx-auto py-20">
                
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>
                    <h2 className="text-center font-bold mb-4">Login</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="email" 
                            type="email" 
                            placeholder="Email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        {formik.errors.email ?<p className="text-red-500 text-xs italic">Please enter a valid email!</p> : null }
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                        </label>
                        <input 
                            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                            id="password" 
                            type="password" 
                            placeholder="******************"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        {formik.errors.password ?<p className="text-red-500 text-xs italic">Password is required!</p> : null }
                    </div>
                    <div className="flex flex-col items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Login
                        </button>
                        
                        <div className="flex flex-col items-center justify-between py-3">
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Forgot Password?
                            </a>
                            <p>
                                Meed an account? 
                                <Link to='/registration' className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 ml-2" href="#">
                                    Register
                                </Link>

                            </p>
                            
                        </div>

                        <h1>OR</h1>

                        <button type="button" onClick={handleSignIn} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" href="#">
                                    google sign in
                        </button>
                        
                    </div>
                </form>
            </div>
        </>
    );
}

const mapDispatchToProps = {
    setAuthUser
}

export default connect( null, mapDispatchToProps)(Login);