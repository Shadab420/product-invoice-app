import React from 'react';
import './invoice.css';

const Invoice = () => {
    return (
        <div className="invoice-table-div">
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
                    <tr className="bg-white md:hover:bg-gray-100 flex md:table-row flex-row md:flex-row flex-wrap md:flex-no-wrap mb-10 md:mb-0">
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Invoice No.</span>
                            28376435643
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Customer Name</span>
                            Shadab Anwar
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Email</span>
                            shadab@gmail.com
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Address</span>
                            17/18, siddeswary road, dhaka-1217.
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                            Bangladesh
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Item Name</span>
                            Mango
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Price</span>
                            80 Tk/Kg
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Quantity</span>
                            5 kg.
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Subtotal</span>
                            400 Tk.
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                            <span className="rounded bg-red-400 py-1 px-3 text-xs font-bold">deleted</span>
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                            <a href="#" className="text-blue-400 hover:text-blue-600 underline">Edit</a>
                            <a href="#" className="text-blue-400 hover:text-blue-600 underline pl-6">Remove</a>
                        </td>
                    </tr>
                    <tr className="bg-white md:hover:bg-gray-100 flex md:table-row flex-row md:flex-row flex-wrap md:flex-no-wrap mb-10 md:mb-0">
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Invoice No.</span>
                            28376435643
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Customer Name</span>
                            Shadab Anwar
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Email</span>
                            shadab@gmail.com
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Address</span>
                            17/18, siddeswary road, dhaka-1217.
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                            Bangladesh
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Item Name</span>
                            Mango
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Price</span>
                            80 Tk/Kg
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Quantity</span>
                            5 kg.
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Subtotal</span>
                            400 Tk.
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                            <span className="rounded bg-red-400 py-1 px-3 text-xs font-bold">deleted</span>
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                            <a href="#" className="text-blue-400 hover:text-blue-600 underline">Edit</a>
                            <a href="#" className="text-blue-400 hover:text-blue-600 underline pl-6">Remove</a>
                        </td>
                    </tr>
                    <tr className="bg-white md:hover:bg-gray-100 flex md:table-row flex-row md:flex-row flex-wrap md:flex-no-wrap mb-10 md:mb-0">
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Invoice No.</span>
                            28376435643
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Customer Name</span>
                            Shadab Anwar
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Email</span>
                            shadab@gmail.com
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Address</span>
                            17/18, siddeswary road, dhaka-1217.
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                            Bangladesh
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Item Name</span>
                            Mango
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Price</span>
                            80 Tk/Kg
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Quantity</span>
                            5 kg.
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Subtotal</span>
                            400 Tk.
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                            <span className="rounded bg-red-400 py-1 px-3 text-xs font-bold">deleted</span>
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                            <a href="#" className="text-blue-400 hover:text-blue-600 underline">Edit</a>
                            <a href="#" className="text-blue-400 hover:text-blue-600 underline pl-6">Remove</a>
                        </td>
                    </tr>

                    <tr className="bg-white md:hover:bg-gray-100 flex md:table-row flex-row md:flex-row flex-wrap md:flex-no-wrap mb-10 md:mb-0">
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Invoice No.</span>
                            28376435643
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Customer Name</span>
                            Shadab Anwar
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Email</span>
                            shadab@gmail.com
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Address</span>
                            17/18, siddeswary road, dhaka-1217.
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                            Bangladesh
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Item Name</span>
                            Mango
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Price</span>
                            80 Tk/Kg
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Quantity</span>
                            5 kg.
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Subtotal</span>
                            400 Tk.
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                            <span className="rounded bg-red-400 py-1 px-3 text-xs font-bold">deleted</span>
                        </td>
                        <td className="w-full md:w-auto p-3 text-gray-800 text-center border border-b text-center block md:table-cell relative md:static">
                            <span className="md:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                            <a href="#" className="text-blue-400 hover:text-blue-600 underline">Edit</a>
                            <a href="#" className="text-blue-400 hover:text-blue-600 underline pl-6">Remove</a>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export default Invoice;