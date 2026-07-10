import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../services/auth.service';
import { toast } from 'react-toastify';
import { useAuth } from '../hooks/useAuth';

const filter = {
    email: null,
    password: null,
}

const LoginForm = () => {
    const [userData, setUserData] = useState(filter)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const{login}=useAuth()
    const handleLogin = async (e) => {
        e.preventDefault();

        if (!userData.email?.trim()) {
            toast.error("Please enter your email.");
            return;
        }

        if (!userData.password?.trim()) {
            toast.error("Please enter your password.");
            return;
        }

        setLoading(true);

        try {
            const result = await loginUser(userData);
            toast.success(result.message);            
            login(result.accessToken)
            navigate("/");
        } catch (error) {
            toast.error(error.response?.data?.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="bg-white shadow-xl rounded-2xl p-10">

            <h1 className="text-3xl font-bold mb-2">
                Welcome Back
            </h1>

            <p className="text-gray-500 mb-8">
                Login to continue your donation journey.
            </p>

            <form className="space-y-5" onSubmit={handleLogin}>

                <div>

                    <label className="block mb-2">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="Enter email"
                        className="w-full border rounded-lg px-4 py-3 outline-none focus:border-green-600"
                        value={userData.email || ""}
                        onChange={(e) => {
                            setUserData({
                                ...userData,
                                email: e.target.value,
                            });
                        }}
                    />

                </div>

                <div>

                    <label className="block mb-2">
                        Password
                    </label>

                    <input
                        type="password"
                        placeholder="Enter password"
                        className="w-full border rounded-lg px-4 py-3 outline-none focus:border-green-600"
                        value={userData.password || ""}
                        onChange={(e) => {
                            setUserData({
                                ...userData,
                                password: e.target.value,
                            });
                        }}
                    />

                </div>

                <div className="flex justify-end">

                    <Link
                        to="/forgot-password"
                        className="text-green-600"
                    >
                        Forgot Password?
                    </Link>

                </div>

                <button
                    className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
                    disabled={loading}
                >
                    {loading ? "Loging.." : "Loging"}
                </button>

            </form>

            <p className="text-center mt-8">

                Don't have an account?

                <Link
                    to="/register"
                    className="text-green-600 ml-2"
                >
                    Register
                </Link>

            </p>

        </div>
    );
};


export default LoginForm
