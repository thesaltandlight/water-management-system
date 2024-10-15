import { useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
    const [user, setUser] = useState({
        firstName: 'Ewurafua',
        lastName: 'Quansah',
        username: 'ewurafuaaaa',
        email: 'ewurafuaguansah@gmail.com',
        phone: '0500872524',
        region: 'Greater Accra',
        city: 'Accra',
        district: 'Pantang',
        address: 'Pantang Junction, Adom Close, No. 1',
        cardName: 'Ewurafua Quansah',
        cardNumber: '3923 1448 0078 8754',
        expiration: '10-12-2028',
    });

    const [focusedInput, setFocusedInput] = useState({});

    const handleFocus = (field) => {
        setFocusedInput((previousState) => ({ ...previousState, [field]: true }));
    };

    const handleBlur = (field, value) => {
        if (!value) {
            setFocusedInput((previousState) => ({ ...previousState, [field]: false }));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-1/5 bg-white p-6 shadow-md">
                <Link to="/" className="text-gray-600 mb-6 flex items-center space-x-2">
                    <span className="text-xl">← Back To Home</span>
                </Link>
                <nav>
                    <ul className="space-y-4">
                        <li>
                            <a href="#" className="font-semibold text-blue-700">Profile</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500">Order History</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500">Notifications</a>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main content */}
            <div className="flex-1 p-10">
                <div className="flex items-center space-x-6 mb-10">
                    <img src="https://via.placeholder.com/100" alt="User Avatar" className="w-24 h-24 rounded-full" />
                    <div>
                        <h1 className="text-3xl font-bold">{user.firstName} {user.lastName}</h1>
                        <p className="text-gray-500">Joined 2 years ago</p>
                        <div className="mt-3 space-x-4">
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Upload New Photo</button>
                            <button className="px-4 py-2 bg-red-600 text-white rounded-md">Remove</button>
                        </div>
                    </div>
                </div>

                {/* Personal Information */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { label: 'First Name', value: 'firstName' },
                            { label: 'Last Name', value: 'lastName' },
                            { label: 'Username', value: 'username' },
                            { label: 'Phone Number', value: 'phone' },
                            { label: 'Email Address', value: 'email', type: 'email' }
                        ].map((field) => (
                            <div key={field.value} className="relative">
                                <label className="block text-sm font-medium text-gray-600">
                                    {field.label}
                                </label>
                                <input
                                    type={field.type || 'text'}
                                    name={field.value}
                                    value={user[field.value]}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus(field.value)}
                                    onBlur={(e) => handleBlur(field.value, e.target.value)}
                                    className="mt-1 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Address Details */}
                <div className="mt-10">
                    <h2 className="text-xl font-semibold mb-4">Address Details</h2>
                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { label: 'Region/Province', value: 'region' },
                            { label: 'City', value: 'city' },
                            { label: 'District', value: 'district' },
                            { label: 'Street Address', value: 'address' }
                        ].map((field) => (
                            <div key={field.value} className="relative">
                                <label className="block text-sm font-medium text-gray-600">
                                    {field.label}
                                </label>
                                <input
                                    type="text"
                                    name={field.value}
                                    value={user[field.value]}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus(field.value)}
                                    onBlur={(e) => handleBlur(field.value, e.target.value)}
                                    className="mt-1 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Payment Information */}
                <div className="mt-10">
                    <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { label: 'Cardholder Name', value: 'cardName' },
                            { label: 'Card Number', value: 'cardNumber' },
                            { label: 'Expiration Date', value: 'expiration' }
                        ].map((field) => (
                            <div key={field.value} className="relative">
                                <label className="block text-sm font-medium text-gray-600">
                                    {field.label}
                                </label>
                                <input
                                    type="text"
                                    name={field.value}
                                    value={user[field.value]}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus(field.value)}
                                    onBlur={(e) => handleBlur(field.value, e.target.value)}
                                    className="mt-1 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
