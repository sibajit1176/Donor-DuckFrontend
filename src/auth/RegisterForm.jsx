import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../services/auth.service";

const filter = {
    name: null,
    email: null,
    password: null,
    confirmpassword: null
}

const RegisterForm = () => {
    const [userData, setUserData] = useState(filter)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()
        if (!userData.name) {
            toast("Enter Name")
            return
        }
        if (!userData.email) {
            toast("Enter Email")
            return
        }
        if (!userData.password) {
            toast("Enter password")
            return
        }
        if (!userData.confirmpassword) {
            toast("Enter confirm password")
            return
        }
        if (userData.password != userData.confirmpassword) {
            toast("Enter same password")
            return
        }
        console.log(userData);
        setLoading(true)
        try {
            const result = await registerUser(userData)
            toast.success(result.message)
            navigate('/login')
        } catch (error) {
            toast.error(error.response?.data?.message || "Registration failed");
        } finally {
            setLoading(false);
        }

    }
    return (
        <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md mx-auto">

            <h1 className="text-3xl font-bold text-gray-800">
                Create Account
            </h1>

            <p className="text-gray-500 mt-2 mb-8">
                Join Donor Duck and start making a difference.
            </p>

            <form className="space-y-5" onSubmit={handleRegister}>

                {/* Name */}
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Full Name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full border rounded-lg px-4 py-3 outline-none focus:border-green-600"
                        value={userData.name || ""}
                        onChange={(e) => {
                            setUserData({
                                ...userData,
                                name: e.target.value,
                            });
                        }}
                    />
                </div>

                {/* Email */}

                <div>
                    <label className="block text-sm font-medium mb-2">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your email"
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

                {/* Password */}

                <div>
                    <label className="block text-sm font-medium mb-2">
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

                {/* Confirm Password */}

                <div>
                    <label className="block text-sm font-medium mb-2">
                        Confirm Password
                    </label>

                    <input
                        type="password"
                        placeholder="Confirm password"
                        className="w-full border rounded-lg px-4 py-3 outline-none focus:border-green-600"
                        value={userData.confirmpassword || ''}
                        onChange={(e) => {
                            setUserData({
                                ...userData,
                                confirmpassword: e.target.value,
                            });
                        }}
                    />
                </div>

                {/* Register Button */}

                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-lg font-semibold"
                    disabled={loading}
                >
                    {loading ? "Creating Account..." : "Create Account"}
                </button>

            </form>

            <p className="text-center mt-8 text-gray-600">

                Already have an account?

                <Link
                    to="/login"
                    className="text-green-600 font-semibold ml-2"
                >
                    Login
                </Link>

            </p>

        </div>
    );
};

export default RegisterForm;