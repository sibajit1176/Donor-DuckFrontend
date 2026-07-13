import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png"
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import ProfileModal from "../profile/profileModal";

const Navbar = () => {

    const navigate = useNavigate()
    const { isLoggedIn, user, logout, loading } = useAuth()
    const [showProfile, setShowProfile] = useState(false);
    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target)
            ) {
                setShowProfile(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
            <nav className="w-full flex items-center justify-between h-16 px-6">

                {/* Logo */}
                <div className="flex items-center gap-3 cursor-pointer">

                    <img
                        src={logo}
                        alt="Donor Duck"
                        className="w-15 h-15 object-contain"
                    />

                    <h1 className="text-2xl font-bold text-gray-900">
                        Donor Duck
                    </h1>

                </div>

                {/* Menu */}

                <ul className="hidden md:flex items-center gap-10">

                    <li className="cursor-pointer font-medium text-gray-700 hover:text-green-600 transition">
                        Home
                    </li>

                    <li className="cursor-pointer font-medium text-gray-700 hover:text-green-600 transition"
                    onClick={()=>{navigate('/charities')}}
                    >
                        Charities
                    </li>

                    <li className="cursor-pointer font-medium text-gray-700 hover:text-green-600 transition"
                    onClick={()=>{navigate('/AllCharityProjects')}}
                    >
                        Projects
                    </li>

                    <li className="cursor-pointer font-medium text-gray-700 hover:text-green-600 transition">
                        About Us
                    </li>

                </ul>

                {/* Right */}

                <div className="flex items-center gap-5">

                    <button className="text-gray-700 hover:text-green-600 transition">

                        <IoIosSearch size={24} />

                    </button>

                    {!loading && (
                        isLoggedIn ? (
                            <button
                                className="text-gray-700 hover:text-green-600"
                                onClick={() => setShowProfile((prev) => !prev)}
                            >
                                <CgProfile size={28} />
                            </button>
                        ) : (
                            <button
                                onClick={() => navigate("/login")}
                                className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
                            >
                                Login
                            </button>
                        )
                    )}
                    <ProfileModal
                        isOpen={showProfile}
                        onClose={() => setShowProfile(false)}
                        onLogout={logout}
                    />
                </div>

            </nav>
        </header>
    );
};

export default Navbar;