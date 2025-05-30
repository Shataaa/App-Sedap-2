import React, { useState, useEffect } from "react";
import { BiPlus, BiEdit, BiTrash } from "react-icons/bi"; // Import ikon edit dan hapus
import PageHeader from "../components/PageHeader"; // Import komponen PageHeader

export default function Customer() {
    const [customers, setCustomers] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false); // State untuk menampilkan form tambah customer
    const [newCustomer, setNewCustomer] = useState({
        customerId: "",
        customerName: "",
        email: "",
        phone: "",
        loyalty: "",
    }); // State untuk data customer baru
    const [editingCustomer, setEditingCustomer] = useState(null); // State untuk menyimpan customer yang sedang diedit

    // Fetch data dari customer.json
    useEffect(() => {
        fetch("/data/customer.json")
            .then((response) => response.json())
            .then((data) => setCustomers(data))
            .catch((error) => console.error("Error fetching customer data:", error));
    }, []);

    // Handle perubahan input form tambah/edit customer
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCustomer((prev) => ({ ...prev, [name]: value }));
    };

    // Handle tambah customer
    const handleAddCustomer = () => {
        if (editingCustomer !== null) {
            // Update customer jika sedang dalam mode edit
            setCustomers((prev) =>
                prev.map((customer) =>
                    customer.customerId === editingCustomer.customerId ? newCustomer : customer
                )
            );
            setEditingCustomer(null); // Reset mode edit
        } else {
            // Tambahkan customer baru
            setCustomers((prev) => [...prev, newCustomer]);
        }
        setNewCustomer({
            customerId: "",
            customerName: "",
            email: "",
            phone: "",
            loyalty: "",
        }); // Reset form
        setShowAddForm(false); // Sembunyikan form setelah menambahkan
    };

    // Handle edit customer
    const handleEditCustomer = (customer) => {
        setEditingCustomer(customer); // Set customer yang sedang diedit
        setNewCustomer(customer); // Isi form dengan data customer yang akan diedit
        setShowAddForm(true); // Tampilkan form
    };

    // Handle hapus customer
    const handleDeleteCustomer = (customerId) => {
        const updatedCustomers = customers.filter((customer) => customer.customerId !== customerId);
        setCustomers(updatedCustomers); // Perbarui daftar customer
    };

    return (
        <div className="p-4">
            {/* Page Header */}
            <PageHeader 
                title="Customer"
                breadcrumb={["Dashboard", "Customer"]}
            />

            {/* Button Add Customer */}
            <div className="mb-4">
                <button
                    onClick={() => {
                        setShowAddForm(!showAddForm);
                        setEditingCustomer(null); // Reset mode edit jika sedang aktif
                        setNewCustomer({
                            customerId: "",
                            customerName: "",
                            email: "",
                            phone: "",
                            loyalty: "",
                        }); // Reset form
                    }}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-600"
                >
                    <BiPlus />
                    <span>{editingCustomer ? "Edit Customer" : "Add Customer"}</span>
                </button>
            </div>

            {/* Form Tambah/Edit Customer */}
            {showAddForm && (
                <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">
                        {editingCustomer ? "Edit Customer" : "Add New Customer"}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700">Customer ID</label>
                            <input
                                type="text"
                                name="customerId"
                                value={newCustomer.customerId}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-lg"
                                disabled={!!editingCustomer} // Nonaktifkan input ID saat edit
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Customer Name</label>
                            <input
                                type="text"
                                name="customerName"
                                value={newCustomer.customerName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={newCustomer.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={newCustomer.phone}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Loyalty</label>
                            <input
                                type="text"
                                name="loyalty"
                                value={newCustomer.loyalty}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <button
                            onClick={handleAddCustomer}
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

            {/* Customer Table */}
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">Customer ID</th>
                            <th className="border border-gray-300 px-4 py-2">Customer Name</th>
                            <th className="border border-gray-300 px-4 py-2">Email</th>
                            <th className="border border-gray-300 px-4 py-2">Phone</th>
                            <th className="border border-gray-300 px-4 py-2">Loyalty</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, index) => (
                            <tr key={index} className="text-center">
                                <td className="border border-gray-300 px-4 py-2">{customer.customerId}</td>
                                <td className="border border-gray-300 px-4 py-2">{customer.customerName}</td>
                                <td className="border border-gray-300 px-4 py-2">{customer.email}</td>
                                <td className="border border-gray-300 px-4 py-2">{customer.phone}</td>
                                <td className="border border-gray-300 px-4 py-2">{customer.loyalty}</td>
                                <td className="border border-gray-300 px-4 py-2 flex justify-center space-x-2">
                                    <button
                                        onClick={() => handleEditCustomer(customer)}
                                        className="bg-yellow-500 text-white px-2 py-1 rounded-lg hover:bg-yellow-600 flex items-center"
                                    >
                                        <BiEdit />
                                    </button>
                                    <button
                                        onClick={() => handleDeleteCustomer(customer.customerId)}
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

