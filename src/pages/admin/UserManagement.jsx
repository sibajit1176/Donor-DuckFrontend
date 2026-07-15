import { useEffect, useMemo, useState } from "react";
import {
    FiUsers,
    FiGrid,
    FiList,
    FiCheckCircle,
    FiSlash,
    FiUserCheck,
} from "react-icons/fi";

import { toast } from "react-toastify";

import UserFilter from "../../components/admin/user/UserFilter";
import UserTable from "../../components/admin/user/UserTable";
import UserCard from "../../components/admin/user/UserCard";
import UserViewModal from "../../components/admin/user/UserViewModal";
import UserStatusModal from "../../components/admin/user/UserStatusModal";

import {
    getAllUsers,
    updateUserStatus,
} from "../../services/admin.service";

const UserManagement = () => {

    const [loading, setLoading] = useState(true);

    const [statusLoading, setStatusLoading] =
        useState(false);

    const [users, setUsers] = useState([]);

    const [viewMode, setViewMode] =
        useState("table");

    const [selectedUser, setSelectedUser] =
        useState(null);

    const [viewOpen, setViewOpen] =
        useState(false);

    const [statusOpen, setStatusOpen] =
        useState(false);

    const [filters, setFilters] = useState({

        search: "",

        role: "",

        status: "",

        sort: "newest",

    });

    useEffect(() => {

        fetchUsers();

    }, []);

    const fetchUsers = async () => {

        try {

            setLoading(true);

            const result = await getAllUsers();

            setUsers(result.users || []);

        } catch (error) {

            console.error(error);

            toast.error(
                "Failed to load users."
            );

            setUsers([]);

        } finally {

            setLoading(false);

        }

    };

    const filteredUsers = useMemo(() => {

        let data = [...users];

        if (filters.search) {

            data = data.filter((item) =>
                item.name
                    ?.toLowerCase()
                    .includes(
                        filters.search.toLowerCase()
                    ) ||
                item.email
                    ?.toLowerCase()
                    .includes(
                        filters.search.toLowerCase()
                    )
            );

        }

        if (filters.role) {

            data = data.filter(
                (item) =>
                    item.role === filters.role
            );

        }

        if (filters.status) {

            data = data.filter(
                (item) =>
                    item.status ===
                    filters.status
            );

        }

        switch (filters.sort) {

            case "oldest":

                data.sort(
                    (a, b) =>
                        new Date(a.createdAt) -
                        new Date(b.createdAt)
                );

                break;

            case "name_asc":

                data.sort((a, b) =>
                    a.name.localeCompare(
                        b.name
                    )
                );

                break;

            case "name_desc":

                data.sort((a, b) =>
                    b.name.localeCompare(
                        a.name
                    )
                );

                break;

            default:

                data.sort(
                    (a, b) =>
                        new Date(b.createdAt) -
                        new Date(a.createdAt)
                );

        }

        return data;

    }, [users, filters]);

    const handleReset = () => {

        setFilters({

            search: "",

            role: "",

            status: "",

            sort: "newest",

        });

    };

    const openView = (user) => {

        setSelectedUser(user);

        setViewOpen(true);

    };

    const openStatus = (user) => {

        setSelectedUser(user);

        setStatusOpen(true);

    };

    const handleStatusUpdate = async (
        data
    ) => {

        try {

            setStatusLoading(true);

            const payload={
                id:data.id,
                status:data.status,
                reason:data.reason
            }
            const result =
                await updateUserStatus(payload);

            toast.success(result.message);

            setStatusOpen(false);

            setSelectedUser(null);

            fetchUsers();

        } catch (error) {

            toast.error(
                error.response?.data
                    ?.message ||
                "Failed to update user status."
            );

        } finally {

            setStatusLoading(false);

        }

    };

    return (

        <div className="h-[calc(100vh-80px)] overflow-y-auto custom-scrollbar bg-gray-50">

            <div className="max-w-[1700px] mx-auto p-8">

                {/* Header */}

                <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white p-8 shadow-xl">

                    <h1 className="text-4xl font-bold">

                        User Management

                    </h1>

                    <p className="mt-3 text-blue-100">

                        Manage platform users, monitor activity and control account access.

                    </p>

                </div>

                {/* Statistics */}

                <div className="grid lg:grid-cols-4 gap-6 mt-8">

                    <StatCard
                        title="Total Users"
                        value={users.length}
                        icon={<FiUsers size={24} />}
                        color="from-blue-500 to-indigo-600"
                    />

                    <StatCard
                        title="Active Users"
                        value={
                            users.filter(
                                (x) =>
                                    x.status ===
                                    "ACTIVE"
                            ).length
                        }
                        icon={<FiUserCheck size={24} />}
                        color="from-green-500 to-emerald-600"
                    />

                    <StatCard
                        title="Blocked Users"
                        value={
                            users.filter(
                                (x) =>
                                    x.status ===
                                    "BLOCKED"
                            ).length
                        }
                        icon={<FiSlash size={24} />}
                        color="from-red-500 to-pink-600"
                    />

                    <StatCard
                        title="Verified Users"
                        value={
                            users.filter(
                                (x) =>
                                    x.isVerified
                            ).length
                        }
                        icon={
                            <FiCheckCircle size={24} />
                        }
                        color="from-yellow-500 to-orange-500"
                    />

                </div>

                {/* Filter */}

                <div className="mt-8">

                    <UserFilter
                        filters={filters}
                        setFilters={setFilters}
                        totalUsers={
                            filteredUsers.length
                        }
                        onReset={handleReset}
                    />

                </div>

                {/* Toolbar */}

                <div className="flex justify-between items-center mt-8">

                    <h2 className="text-2xl font-bold">

                        User List

                    </h2>

                    <div className="flex items-center bg-white rounded-2xl border border-gray-200 shadow-sm p-1">

                        <button
                            onClick={() =>
                                setViewMode("table")
                            }
                            className={`
                                flex items-center gap-2
                                px-5
                                h-11
                                rounded-xl
                                font-medium
                                transition

                                ${viewMode ===
                                    "table"
                                    ? "bg-blue-600 text-white shadow"
                                    : "text-gray-600 hover:bg-gray-100"
                                }
                            `}
                        >

                            <FiList size={18} />

                            <span>Table</span>

                        </button>

                        <button
                            onClick={() =>
                                setViewMode("grid")
                            }
                            className={`
                                flex items-center gap-2
                                px-5
                                h-11
                                rounded-xl
                                font-medium
                                transition

                                ${viewMode ===
                                    "grid"
                                    ? "bg-blue-600 text-white shadow"
                                    : "text-gray-600 hover:bg-gray-100"
                                }
                            `}
                        >

                            <FiGrid size={18} />

                            <span>Grid</span>

                        </button>

                    </div>

                </div>

                {/* Loading */}

                {loading && (

                    <div className="grid lg:grid-cols-3 gap-6 mt-8">

                        {Array.from({
                            length: 6,
                        }).map((_, index) => (

                            <div
                                key={index}
                                className="bg-white rounded-3xl h-72 animate-pulse"
                            />

                        ))}

                    </div>

                )}

                {/* Empty */}

                {!loading &&
                    filteredUsers.length ===
                    0 && (

                        <div className="bg-white rounded-3xl shadow mt-8 p-20 text-center">

                            <FiUsers
                                size={70}
                                className="mx-auto text-gray-300"
                            />

                            <h2 className="mt-6 text-2xl font-bold">

                                No Users Found

                            </h2>

                            <p className="mt-2 text-gray-500">

                                No users matched
                                your current
                                filters.

                            </p>

                        </div>

                    )}
                {/* Table View */}

                {!loading &&
                    filteredUsers.length > 0 &&
                    viewMode === "table" && (

                        <div className="mt-8">

                            <UserTable
                                users={filteredUsers}
                                onView={openView}
                                onStatus={openStatus}
                            />

                        </div>

                    )}

                {/* Grid View */}

                {!loading &&
                    filteredUsers.length > 0 &&
                    viewMode === "grid" && (

                        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8 mt-8">

                            {filteredUsers.map((user) => (

                                <UserCard
                                    key={user.id}
                                    user={user}
                                    onView={openView}
                                    onStatus={openStatus}
                                />

                            ))}

                        </div>

                    )}

            </div>

            {/* View Modal */}

            <UserViewModal
                open={viewOpen}
                user={selectedUser}
                onClose={() => {

                    setViewOpen(false);

                    setSelectedUser(null);

                }}
            />

            {/* Status Modal */}

            <UserStatusModal
                open={statusOpen}
                user={selectedUser}
                loading={statusLoading}
                onClose={() => {

                    setStatusOpen(false);

                    setSelectedUser(null);

                }}
                onSubmit={handleStatusUpdate}
            />

        </div>

    );

};

const StatCard = ({
    title,
    value,
    icon,
    color,
}) => (

    <div
        className={`
            bg-gradient-to-r
            ${color}
            rounded-3xl
            p-6
            text-white
            shadow-lg
            hover:shadow-xl
            transition-all
            duration-300
            hover:-translate-y-1
        `}
    >

        <div className="flex justify-between items-start">

            <div>

                <p className="text-white/80 text-sm">

                    {title}

                </p>

                <h2 className="text-4xl font-bold mt-3">

                    {value}

                </h2>

            </div>

            <div
                className="
                    h-16
                    w-16
                    rounded-2xl
                    bg-white/20
                    flex
                    items-center
                    justify-center
                    text-3xl
                    backdrop-blur-sm
                "
            >

                {icon}

            </div>

        </div>

    </div>

);

export default UserManagement;