import React, { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};

  if (!values.customerName) {
      errors.customerName = 'Required';
  } 

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.address) {
      errors.address = 'Required';
  } 
  
  if (!values.country) {
    errors.country = 'Required';
  } 

  if (!values.itemName) {
    errors.itemName = 'Required';
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

const EditItemModal = (props) => {
    const [showModal, setShowModal] = useState(false);

    let {id, invoiceNo, customerName, email, address, country, itemName, price, unit, quantity, status} = props.invoice;

    const formik = useFormik({
        initialValues: {
          invoiceNo: 0,
          customerName: '',
          email: '',
          address: '',
          country: '',
          itemName: '',
          price: 0,
          unit: '',
          quantity: 0,
          status: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    
  return (
      <div>
        <button onClick={() => setShowModal(true)} className="flex items-center bg-pink-500 active:bg-pink-600 hover:shadow-lg outline-none focus:outline-none text-white font-bold py-2 px-4 rounded"><FaRegEdit/>Edit</button>

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
                  
                    <div className="w-full max-w-lg mx-auto">
                    
                    <form className="bg-white  rounded px-8 pt-6 pb-2 mb-4" enctype="multipart/form-data" onSubmit={formik.handleSubmit}>
                        <h2 className="text-center font-bold mb-4 text-white-700">Edit Invoice</h2>
                        
                        <div className="flex justify-between">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="customerName">
                            Customer Name
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="customerName" 
                                type="text" 
                                placeholder="Customer Name"
                                onChange={formik.handleChange}
                                value={formik.values.customerName}
                            />
                            {formik.errors.customerName ?<p className="text-red-500 text-xs italic">{formik.errors.customerName}</p> : null }
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="email" 
                                type="text" 
                                placeholder="Customer Email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            {formik.errors.email ?<p className="text-red-500 text-xs italic">{formik.errors.email}</p> : null }
                        </div>
                            
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="address">
                            Address
                            </label>
                            <textarea 
                                className="shadow appearance-none border rounded w-full ml-1 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="address" 
                                placeholder="Customer Address"
                                onChange={formik.handleChange}
                                value={formik.values.address}
                            ></textarea>
                            {formik.errors.address ?<p className="text-red-500 text-xs italic">{formik.errors.address}</p> : null }
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="country">
                            Country
                            </label>
                            <select 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="country" 
                                onChange={formik.handleChange}
                                value={formik.values.country}
                            >
                              <option value="">Select country</option>
                            </select>
                            {formik.errors.address ?<p className="text-red-500 text-xs italic">{formik.errors.address}</p> : null }
                        </div>

                        <div className="flex justify-between">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="itemName">
                            Item Name
                            </label>
                            <select 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="itemName" 
                                onChange={formik.handleChange}
                                value={formik.values.itemName}
                            >
                              <option value="">Select Item</option>
                            </select>
                            {formik.errors.itemName ?<p className="text-red-500 text-xs italic">{formik.errors.itemName}</p> : null }
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="price">
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
                        </div>

                        <div className="flex justify-between">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="unit">
                            Unit
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="unit" 
                                type="text" 
                                placeholder="Unit"
                                onChange={formik.handleChange}
                                value={formik.values.unit}
                            />
                            {formik.errors.unit ?<p className="text-red-500 text-xs italic">{formik.errors.unit}</p> : null }
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="quantity">
                            Quantity
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="quantity" 
                                type="number" 
                                placeholder="quantity"
                                onChange={formik.handleChange}
                                value={formik.values.quantity}
                            />
                            {formik.errors.quantity ?<p className="text-red-500 text-xs italic">{formik.errors.quantity}</p> : null }
                        </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" for="status">
                            Status
                            </label>
                            <select 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="status" 
                                onChange={formik.handleChange}
                                value={formik.values.status}
                            >
                              <option value="">Select status</option>
                              <option value="Delivered">Delivered</option>
                              <option value="In queue">In queue</option>
                              <option value="Canceled">Canceled</option>
                            </select>
                            {formik.errors.status ?<p className="text-red-500 text-xs italic">{formik.errors.status}</p> : null }
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
                    Edit
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

export default EditItemModal;