import React, { useState } from 'react';
import { FaPlusSquare } from 'react-icons/fa';
import { useFormik } from 'formik';
import Axios from 'axios';
import https from 'https';

const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    } 

    if (!values.description) {
        errors.description = 'Required';
    } else if (values.description.length > 60) {
        errors.description = 'Must be 60 characters or less';
    }    
  
    if (!values.price) {
      errors.price = 'Required';
    } else if (!/^[0-9]/i.test(values.price)) {
      errors.price = 'Invalid price!';
    }

    if (!values.image) {
        errors.image = 'Required';
    } 

    return errors;
};

const AddItemModal = () => {
    const [showModal, setShowModal] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: '',
            image: '',
        },
        validate,
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));

            // const instance = Axios.create({
            //   httpsAgent: new https.Agent({  
            //     rejectUnauthorized: false
            //   })
            // });
            
            // instance.post('https://localhost:5000/items', {
              
            //     ...values
              
            // });

            Axios({
              url: 'https://localhost:5000/items',
              method: 'POST',
              data: {...values},
              headers: {
              'Content-Type': 'application/json'
              },
              responseType: 'json',
              httpsAgent: new https.Agent({ rejectUnauthorized: false })
              })
              .then(response => {
                console.log(response)
              })
              .catch(error => {
              })

            // fetch('https://localhost:5000/items', {
            //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
            //   mode: 'cors', // no-cors, *cors, same-origin
            //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //   credentials: 'same-origin', // include, *same-origin, omit
            //   headers: {
            //     'Content-Type': 'application/json'
            //     // 'Content-Type': 'application/x-www-form-urlencoded',
            //   },
            //   redirect: 'follow', // manual, *follow, error
            //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            //   body: JSON.stringify({...values}) // body data type must match "Content-Type" header
            // })
            // .then(res => res.json)
            // .then(data => console.log(data))
            // .catch(err => console.log(err));


             
        },
    });
    
  return (
      <div>
        <button onClick={() => setShowModal(true)} className="flex items-center bg-pink-500 active:bg-pink-600 hover:shadow-lg outline-none focus:outline-none text-white font-bold py-2 px-4 rounded fixed top-0 right-0"><FaPlusSquare/>new item</button>

          {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
           
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  
                    <div className="w-full max-w-lg mx-auto py-20">
                    
                    <form className="bg-white rounded px-8 pt-6 pb-8 mb-4" encType="multipart/form-data" onSubmit={formik.handleSubmit}>
                        <h2 className="text-center font-bold mb-4">Add new item</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="name" 
                                type="text" 
                                placeholder="Name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            {formik.errors.name ?<p className="text-red-500 text-xs italic">{formik.errors.name}</p> : null }
                        </div>
                            
                        
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Description
                            </label>
                            <textarea 
                                className="shadow appearance-none border rounded w-full ml-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="description" 
                                placeholder="Description"
                                onChange={formik.handleChange}
                                value={formik.values.description}
                            ></textarea>
                            {formik.errors.description ?<p className="text-red-500 text-xs italic">{formik.errors.description}</p> : null }
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                            Price
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="price" 
                                type="text" 
                                placeholder="Price"
                                onChange={formik.handleChange}
                                value={formik.values.price}
                            />
                            {formik.errors.price ?<p className="text-red-500 text-xs italic">{formik.errors.price}</p> : null }
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                                Image
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="image" 
                                type="file" 
                                placeholder="Image"
                                onChange={formik.handleChange}
                                value={formik.values.image}
                            />
                            {formik.errors.image ?<p className="text-red-500 text-xs italic">{formik.errors.image}</p> : null }
                        </div>

                        <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="submit"
                    style={{ transition: "all .15s ease" }}

                  >
                    Add
                  </button>
                </div>
                    </form>
                </div>

                </div>
                {/*footer*/}
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      </div>
  );
}

export default AddItemModal;