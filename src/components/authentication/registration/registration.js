import React from 'react';
import { useFormik } from 'formik';


// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
    const errors = {};

    if (!values.firstname) {
        errors.firstname = 'Required';
    } else if (values.firstname.length > 15) {
    errors.firstname = 'Must be 15 characters or less';
    }

    if (!values.lastname) {
        errors.lastname = 'Required';
    } else if (values.lastname.length > 20) {
        errors.lastname = 'Must be 20 characters or less';
    }    
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    
    if(!values.password){
        errors.password = 'Required';
    }

    if (!values.country) {
        errors.country = 'Required';
    } 

    if (!values.address) {
        errors.address = 'Required';
    }

    if (!values.photo) {
        errors.photo = 'Required';
    } 

    return errors;
};

function Registration() {

    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            country: '',
            address: '',
            // photo: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <div className="w-full max-w-xs mx-auto py-20">
                
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" enctype="multipart/form-data" onSubmit={formik.handleSubmit}>
                    <h2 className="text-center font-bold mb-4">Registration</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="firstname">
                        Firstname
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="firstname" 
                            type="text" 
                            placeholder="Firstname"
                            onChange={formik.handleChange}
                            value={formik.values.firstname}
                        />
                        {formik.errors.firstName ?<p className="text-red-500 text-xs italic">Please enter your firstname!</p> : null }
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="lastname">
                        Lastname
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="lastname" 
                            type="text" 
                            placeholder="Lastname"
                            onChange={formik.handleChange}
                            value={formik.values.lastname}
                        />
                        {formik.errors.firstName ?<p className="text-red-500 text-xs italic">Please enter your lastname!</p> : null }
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
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
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
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
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="country">
                            Country
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="country" 
                            type="text" 
                            placeholder="Country"
                            onChange={formik.handleChange}
                            value={formik.values.country}
                        />
                        {formik.errors.country ?<p className="text-red-500 text-xs italic">Please select your country!</p> : null }
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="address">
                            Address
                        </label>
                        <textarea 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="address" 
                            placeholder="Address"
                            onChange={formik.handleChange}
                            value={formik.values.address}
                        ></textarea>
                        {formik.errors.address ?<p className="text-red-500 text-xs italic">Please enter your address!</p> : null }
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="photo">
                            Photo
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="photo" 
                            type="file" 
                            placeholder="Photo"
                            onChange={formik.handleChange}
                            value={formik.values.photo}
                        />
                        {formik.errors.country ?<p className="text-red-500 text-xs italic">Please select your photo!</p> : null }
                    </div>

                    <div className="flex flex-col items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Register
                        </button>
                        
                        <div className="flex flex-col items-center justify-between py-3">
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Forgot Password?
                            </a>
                            <p>
                                Already have an account? 
                                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 ml-2" href="#">
                                    Login
                                </a>

                            </p>
                            
                        </div>
                        
                    </div>
                </form>
            </div>
        </>
    );
}

export default Registration;