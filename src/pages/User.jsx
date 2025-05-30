import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader"; // Import komponen PageHeader jika diperlukan

export default function User() {
    const [users, setUsers] = useState([]); // State untuk menyimpan data pengguna
    const [loading, setLoading] = useState(true); // State untuk status loading

    // Fetch data dari endpoint
    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.users); // Simpan data pengguna ke state
                setLoading(false); // Set loading selesai
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
                setLoading(false); // Set loading selesai meskipun ada error
            });
    }, []);

    return (
        <div className="p-4">
            {/* Page Header */}
            <PageHeader 
                title="User List"
                breadcrumb={["Dashboard", "Users"]}
            />

            {/* Loading Indicator */}
            {loading ? (
                <p className="text-center text-gray-500">Loading...</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">ID</th>
                                <th className="border border-gray-300 px-4 py-2">Name</th>
                                <th className="border border-gray-300 px-4 py-2">Email</th>
                                <th className="border border-gray-300 px-4 py-2">Phone</th>
                                <th className="border border-gray-300 px-4 py-2">Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} className="text-center">
                                    <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                                    <td className="border border-gray-300 px-4 py-2">{user.firstName} {user.lastName}</td>
                                    <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                                    <td className="border border-gray-300 px-4 py-2">{user.phone}</td>
                                    <td className="border border-gray-300 px-4 py-2">{user.username}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}