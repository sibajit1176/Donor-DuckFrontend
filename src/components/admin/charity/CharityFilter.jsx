import {
    FiSearch,
    FiRotateCcw,
    FiFilter,
} from "react-icons/fi";

const CharityFilter = ({
    filters,
    setFilters,
    onReset,
}) => {

    const handleChange = (e) => {

        setFilters((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));

    };

    return (

        <div
            className="
                bg-white
                rounded-3xl
                shadow-lg
                border
                border-gray-100
                p-6
            "
        >

            {/* Header */}

            <div className="flex items-center gap-3 mb-6">

                <div
                    className="
                        h-11
                        w-11
                        rounded-xl
                        bg-green-100
                        flex
                        items-center
                        justify-center
                        text-green-600
                    "
                >

                    <FiFilter size={20} />

                </div>

                <div>

                    <h2 className="text-xl font-bold text-gray-800">

                        Filter Charities

                    </h2>

                    <p className="text-sm text-gray-500">

                        Search and filter charity organizations

                    </p>

                </div>

            </div>

            {/* Filters */}

            <div className="grid xl:grid-cols-4 lg:grid-cols-2 gap-5">

                {/* Search */}

                <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">

                        Search

                    </label>

                    <div className="relative">

                        <FiSearch
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-gray-400
                            "
                        />

                        <input
                            type="text"
                            name="search"
                            placeholder="Organization name..."
                            value={filters.search}
                            onChange={handleChange}
                            className="
                                w-full
                                h-12
                                rounded-xl
                                border
                                border-gray-300
                                pl-11
                                pr-4
                                focus:ring-2
                                focus:ring-green-500
                                outline-none
                            "
                        />

                    </div>

                </div>

                {/* Status */}

                <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">

                        Approval Status

                    </label>

                    <select
                        name="status"
                        value={filters.status}
                        onChange={handleChange}
                        className="
                            w-full
                            h-12
                            rounded-xl
                            border
                            border-gray-300
                            px-4
                            focus:ring-2
                            focus:ring-green-500
                            outline-none
                        "
                    >

                        <option value="">

                            All Status

                        </option>

                        <option value="PENDING">

                            Pending

                        </option>

                        <option value="APPROVED">

                            Approved

                        </option>

                        <option value="REJECTED">

                            Rejected

                        </option>

                    </select>

                </div>

                {/* Category */}

                <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">

                        Category

                    </label>

                    <select
                        name="category"
                        value={filters.category}
                        onChange={handleChange}
                        className="
                            w-full
                            h-12
                            rounded-xl
                            border
                            border-gray-300
                            px-4
                            focus:ring-2
                            focus:ring-green-500
                            outline-none
                        "
                    >

                        <option value="">

                            All Categories

                        </option>

                        <option value="Education">

                            Education

                        </option>

                        <option value="Healthcare">

                            Healthcare

                        </option>

                        <option value="Food">

                            Food

                        </option>

                        <option value="Environment">

                            Environment

                        </option>

                        <option value="Animal Welfare">

                            Animal Welfare

                        </option>

                        <option value="Women Empowerment">

                            Women Empowerment

                        </option>

                        <option value="Disaster Relief">

                            Disaster Relief

                        </option>

                        <option value="Children">

                            Children

                        </option>

                        <option value="Other">

                            Other

                        </option>

                    </select>

                </div>

                {/* Sort */}

                <div>

                    <label className="block text-sm font-medium text-gray-700 mb-2">

                        Sort By

                    </label>

                    <select
                        name="sort"
                        value={filters.sort}
                        onChange={handleChange}
                        className="
                            w-full
                            h-12
                            rounded-xl
                            border
                            border-gray-300
                            px-4
                            focus:ring-2
                            focus:ring-green-500
                            outline-none
                        "
                    >

                        <option value="newest">

                            Newest First

                        </option>

                        <option value="oldest">

                            Oldest First

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

            {/* Footer */}

            <div className="flex justify-end mt-6">

                <button
                    onClick={onReset}
                    className="
                        flex
                        items-center
                        gap-2
                        h-11
                        px-6
                        rounded-xl
                        bg-gray-100
                        hover:bg-red-500
                        hover:text-white
                        transition
                        font-medium
                    "
                >

                    <FiRotateCcw />

                    Reset Filters

                </button>

            </div>

        </div>

    );

};

export default CharityFilter;