import {
    FiSearch,
    FiRotateCcw,
    FiUsers,
    FiFilter,
} from "react-icons/fi";

const UserFilter = ({
    filters,
    setFilters,
    totalUsers = 0,
    onReset,
}) => {
    return (
        <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6">

            {/* Header */}

            <div className="flex items-center justify-between mb-6">

                <div>

                    <h2 className="text-2xl font-bold text-gray-800">
                        User Filters
                    </h2>

                    <p className="text-gray-500 mt-1">
                        Search and filter registered users.
                    </p>

                </div>

                <div className="flex items-center gap-3 bg-green-50 px-5 py-3 rounded-2xl">

                    <div className="h-12 w-12 rounded-xl bg-green-600 text-white flex items-center justify-center">

                        <FiUsers size={22} />

                    </div>

                    <div>

                        <p className="text-xs text-gray-500 uppercase">
                            Total Users
                        </p>

                        <h3 className="text-xl font-bold text-gray-800">
                            {totalUsers}
                        </h3>

                    </div>

                </div>

            </div>

            {/* Filters */}

            <div className="grid xl:grid-cols-5 lg:grid-cols-2 gap-5">

                {/* Search */}

                <div className="xl:col-span-2">

                    <label className="block text-sm font-semibold text-gray-700 mb-2">

                        Search User

                    </label>

                    <div className="relative">

                        <FiSearch
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            value={filters.search}
                            onChange={(e) =>
                                setFilters({
                                    ...filters,
                                    search: e.target.value,
                                })
                            }
                            className="
                                w-full
                                h-12
                                rounded-xl
                                border
                                border-gray-300
                                pl-11
                                pr-4
                                outline-none
                                transition
                                focus:border-green-500
                                focus:ring-4
                                focus:ring-green-100
                            "
                        />

                    </div>

                </div>

                {/* Role */}

                <div>

                    <label className="block text-sm font-semibold text-gray-700 mb-2">

                        Role

                    </label>

                    <select
                        value={filters.role}
                        onChange={(e) =>
                            setFilters({
                                ...filters,
                                role: e.target.value,
                            })
                        }
                        className="
                            w-full
                            h-12
                            rounded-xl
                            border
                            border-gray-300
                            px-4
                            outline-none
                            focus:border-green-500
                            focus:ring-4
                            focus:ring-green-100
                        "
                    >

                        <option value="">
                            All Roles
                        </option>

                        <option value="USER">
                            User
                        </option>

                        <option value="CHARITY">
                            Charity
                        </option>

                        <option value="ADMIN">
                            Admin
                        </option>

                    </select>

                </div>

                {/* Status */}

                <div>

                    <label className="block text-sm font-semibold text-gray-700 mb-2">

                        Status

                    </label>

                    <select
                        value={filters.status}
                        onChange={(e) =>
                            setFilters({
                                ...filters,
                                status: e.target.value,
                            })
                        }
                        className="
                            w-full
                            h-12
                            rounded-xl
                            border
                            border-gray-300
                            px-4
                            outline-none
                            focus:border-green-500
                            focus:ring-4
                            focus:ring-green-100
                        "
                    >

                        <option value="">
                            All Status
                        </option>

                        <option value="ACTIVE">
                            Active
                        </option>

                        <option value="BLOCKED">
                            Blocked
                        </option>

                    </select>

                </div>

                {/* Sort */}

                <div>

                    <label className="block text-sm font-semibold text-gray-700 mb-2">

                        Sort By

                    </label>

                    <select
                        value={filters.sort}
                        onChange={(e) =>
                            setFilters({
                                ...filters,
                                sort: e.target.value,
                            })
                        }
                        className="
                            w-full
                            h-12
                            rounded-xl
                            border
                            border-gray-300
                            px-4
                            outline-none
                            focus:border-green-500
                            focus:ring-4
                            focus:ring-green-100
                        "
                    >

                        <option value="newest">
                            Newest
                        </option>

                        <option value="oldest">
                            Oldest
                        </option>

                        <option value="name_asc">
                            Name (A-Z)
                        </option>

                        <option value="name_desc">
                            Name (Z-A)
                        </option>

                    </select>

                </div>

            </div>

            {/* Bottom */}

            <div className="mt-6 pt-5 border-t flex flex-wrap justify-between items-center gap-4">

                <div className="flex items-center gap-2 text-gray-500">

                    <FiFilter />

                    <span className="text-sm">
                        Apply filters to quickly find users.
                    </span>

                </div>

                <button
                    onClick={onReset}
                    className="
                        flex
                        items-center
                        gap-2
                        px-5
                        h-11
                        rounded-xl
                        bg-red-50
                        text-red-600
                        hover:bg-red-600
                        hover:text-white
                        transition-all
                    "
                >

                    <FiRotateCcw />

                    Reset Filters

                </button>

            </div>

        </div>
    );
};

export default UserFilter;