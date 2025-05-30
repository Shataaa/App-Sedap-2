import React, { useState, useEffect } from "react";
import { BiPlus, BiTrash } from "react-icons/bi"; // Import ikon tambah dan hapus
import PageHeader from "../components/PageHeader"; // Import komponen PageHeader

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false); // State untuk menampilkan form tambah order
    const [newOrder, setNewOrder] = useState({
        orderId: "",
        customerName: "",
        status: "",
        totalPrice: "",
        orderDate: "",
    }); // State untuk data order baru

    // Fetch data dari orders.json
    useEffect(() => {
        fetch("/data/orders.json")
            .then((response) => response.json())
            .then((data) => setOrders(data))
            .catch((error) => console.error("Error fetching orders data:", error));
    }, []);

    // Handle perubahan input form tambah order
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewOrder((prev) => ({ ...prev, [name]: value }));
    };

    // Handle tambah order
    const handleAddOrder = () => {
        setOrders((prev) => [...prev, newOrder]); // Tambahkan order baru ke daftar
        setNewOrder({
            orderId: "",
            customerName: "",
            status: "",
            totalPrice: "",
            orderDate: "",
        }); // Reset form
        setShowAddForm(false); // Sembunyikan form setelah menambahkan
    };

    // Handle hapus order
    const handleDeleteOrder = (orderId) => {
        const updatedOrders = orders.filter((order) => order.orderId !== orderId);
        setOrders(updatedOrders); // Perbarui daftar order
    };

    return (
        <div className="p-4">
            {/* Page Header */}
            <PageHeader 
                title="Orders"
                breadcrumb={["Dashboard", "Order List"]}
            />

            {/* Button Add Order */}
            <div className="mb-4">
                <button
                    onClick={() => {
                        setShowAddForm(!showAddForm);
                        setNewOrder({
                            orderId: "",
                            customerName: "",
                            status: "",
                            totalPrice: "",
                            orderDate: "",
                        }); // Reset form
                    }}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-600"
                >
                    <BiPlus />
                    <span>Add Order</span>
                </button>
            </div>

            {/* Form Tambah Order */}
            {showAddForm && (
                <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Add New Order</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700">Order ID</label>
                            <input
                                type="text"
                                name="orderId"
                                value={newOrder.orderId}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Customer Name</label>
                            <input
                                type="text"
                                name="customerName"
                                value={newOrder.customerName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Status</label>
                            <input
                                type="text"
                                name="status"
                                value={newOrder.status}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Total Price</label>
                            <input
                                type="number"
                                name="totalPrice"
                                value={newOrder.totalPrice}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Order Date</label>
                            <input
                                type="date"
                                name="orderDate"
                                value={newOrder.orderDate}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <button
                            onClick={handleAddOrder}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setShowAddForm(false)}
                            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Orders Table */}
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">Order ID</th>
                            <th className="border border-gray-300 px-4 py-2">Customer Name</th>
                            <th className="border border-gray-300 px-4 py-2">Status</th>
                            <th className="border border-gray-300 px-4 py-2">Total Price</th>
                            <th className="border border-gray-300 px-4 py-2">Order Date</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index} className="text-center">
                                <td className="border border-gray-300 px-4 py-2">{order.orderId}</td>
                                <td className="border border-gray-300 px-4 py-2">{order.customerName}</td>
                                <td className="border border-gray-300 px-4 py-2">{order.status}</td>
                                <td className="border border-gray-300 px-4 py-2">${order.totalPrice}</td>
                                <td className="border border-gray-300 px-4 py-2">{order.orderDate}</td>
                                <td className="border border-gray-300 px-4 py-2 flex justify-center space-x-2">
                                    <button
                                        onClick={() => handleDeleteOrder(order.orderId)}
                                        className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 flex items-center"
                                    >
                                        <BiTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

