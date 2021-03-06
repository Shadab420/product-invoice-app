import React, { useState, useEffect } from 'react';
import InvoicePDFCreator from '../pdf-generator/InvoicePDFCreator';
import AddInvoiceModal from './AddInvoiceModal';
import EditInvoiceModal from './EditInvoiceModal';
import DeleteInvoiceModal from './DeleteInvoiceModal';
import './invoice.css';
import Axios from 'axios';


const Invoice = () => {

    const [invoices, setInvoices] = useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:5000/invoices')
            .then(res => setInvoices(res.data));
    }, [invoices])

    let grandTotal = 0;

    return (
        <div className="invoice-table-div">
            <AddInvoiceModal/>
            <table className="border-collapse w-full max-h-full">
                <thead>
                    <tr>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden md:table-cell">Invoice No.</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden md:table-cell">Customer Name</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden md:table-cell">Email</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden md:table-cell">Address</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden md:table-cell">Country</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden md:table-cell">Item Name</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden md:table-cell">Price</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden md:table-cell">Quantity</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden md:table-cell">Subtotal</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden md:table-cell">Status</th>
                        <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden md:table-cell">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        invoices.map(invoice =>{
                            return (

                                <tr className="bg-white md:hover:bg-gray-100 flex md:table-row flex-row md:flex-row flex-wrap md:flex-no-wrap mb-10 md:mb-0">
                                    <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b block md:table-cell relative md:static">
                                        <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Invoice No.</span>
                                        { invoice.invoiceNo }
                                    </td>
                                    <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                                        <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Customer Name</span>
                                        { invoice.customerName }
                                    </td>
                                    <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                                        <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Email</span>
                                        { invoice.email }
                                    </td>
                                    <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                                        <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Address</span>
                                        { invoice.address }
                                    </td>
                                    <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                                        <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                                        { invoice.country }
                                    </td>
                                    <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                                        <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Item Name</span>
                                        { invoice.itemName }
                                    </td>
                                    <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                                        <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Price</span>
                                        { `${invoice.price} Tk/${invoice.unit}` }
                                    </td>
                                    <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                                        <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Quantity</span>
                                        { `${invoice.quantity} ${invoice.unit}` }
                                    </td>
                                    <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                                        <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Subtotal</span>
                                        { `${invoice.price * invoice.quantity}` }
                                    </td>
                                    <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                                        <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                                        {invoice.status === 'Delivered' && <span className="rounded bg-green-400 py-1 px-3 text-xs font-bold">{ invoice.status }</span>}
                                        {invoice.status === 'Canceled' && <span className="rounded bg-red-400 py-1 px-3 text-xs font-bold">{ invoice.status }</span>}
                                        {invoice.status === 'In queue' && <span className="rounded bg-orange-400 py-1 px-3 text-xs font-bold">{ invoice.status }</span>}
                                    </td>
                                    <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                                        <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                                        {invoice.status === 'In queue' && <EditInvoiceModal invoice = {invoice}/>}
                                        <InvoicePDFCreator invoice = {invoice}/>
                                        <DeleteInvoiceModal invoice={invoice}/>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    <tr className="bg-white md:hover:bg-gray-100 flex md:table-row flex-row md:flex-row flex-wrap md:flex-no-wrap mb-10 md:mb-0">
                        <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>Grand Total:</td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                             {grandTotal}
                        </td>
                        <td></td><td></td>
                    </tr>
                    
                </tbody>
            </table>

        </div>
    );
}

export default Invoice;