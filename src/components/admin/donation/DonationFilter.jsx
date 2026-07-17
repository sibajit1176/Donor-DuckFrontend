import {
    FiSearch,
    FiFilter,
    FiRefreshCw,
    FiDownload,
} from "react-icons/fi";

const DonationFilter = ({
    filters,
    setFilters,
    onSearch,
    onReset,
    onExport,
}) => {

    const handleChange = (e) => {

        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });

    };

    return (

        <div className="rounded-3xl bg-white border border-gray-100 shadow-lg p-6">

            <div className="flex items-center justify-between mb-6">

                <div>

                    <h2 className="text-2xl font-bold text-gray-800">

                        Filter Donations

                    </h2>

                    <p className="text-gray-500 mt-1">

                        Search and filter donation history

                    </p>

                </div>

                <div
                    className="
                        h-12
                        w-12
                        rounded-2xl
                        bg-green-100
                        text-green-600
                        flex
                        items-center
                        justify-center
                    "
                >

                    <FiFilter size={22} />

                </div>

            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">

                {/* Search */}

                <div className="lg:col-span-2">

                    <label className="block text-sm font-semibold text-gray-700 mb-2">

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
                            value={filters.search}
                            onChange={handleChange}
                            placeholder="Donor, Charity, Project, Order ID..."
                            className="
                                w-full
                                h-12
                                rounded-xl
                                border
                                border-gray-200
                                bg-gray-50
                                pl-11
                                pr-4
                                outline-none
                                focus:bg-white
                                focus:ring-4
                                focus:ring-green-100
                                focus:border-green-500
                            "
                        />

                    </div>

                </div>

                {/* Status */}

                <div>

                    <label className="block text-sm font-semibold text-gray-700 mb-2">

                        Status

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
                            border-gray-200
                            bg-gray-50
                            px-4
                            outline-none
                            focus:bg-white
                            focus:ring-4
                            focus:ring-green-100
                        "
                    >

                        <option value="">

                            All Status

                        </option>

                        <option value="SUCCESS">

                            Success

                        </option>

                        <option value="PENDING">

                            Pending

                        </option>

                        <option value="FAILED">

                            Failed

                        </option>

                        <option value="REFUNDED">

                            Refunded

                        </option>

                    </select>

                </div>

                {/* From Date */}

                <div>

                    <label className="block text-sm font-semibold text-gray-700 mb-2">

                        From Date

                    </label>

                    <input
                        type="date"
                        name="from"
                        value={filters.from}
                        onChange={handleChange}
                        className="
                            w-full
                            h-12
                            rounded-xl
                            border
                            border-gray-200
                            bg-gray-50
                            px-4
                            outline-none
                            focus:bg-white
                            focus:ring-4
                            focus:ring-green-100
                        "
                    />

                </div>

                {/* To Date */}

                <div>

                    <label className="block text-sm font-semibold text-gray-700 mb-2">

                        To Date

                    </label>

                    <input
                        type="date"
                        name="to"
                        value={filters.to}
                        onChange={handleChange}
                        className="
                            w-full
                            h-12
                            rounded-xl
                            border
                            border-gray-200
                            bg-gray-50
                            px-4
                            outline-none
                            focus:bg-white
                            focus:ring-4
                            focus:ring-green-100
                        "
                    />

                </div>
                            </div>

            {/* Action Buttons */}

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-6">

                <div className="text-sm text-gray-500">

                    Search donations by donor, charity, project, status or
                    date range.

                </div>

                <div className="flex flex-wrap gap-3">

                    <button
                        onClick={onReset}
                        className="
                            h-11
                            px-5
                            rounded-xl
                            border
                            border-gray-200
                            bg-white
                            text-gray-700
                            flex
                            items-center
                            gap-2
                            hover:bg-gray-100
                            transition
                        "
                    >

                        <FiRefreshCw />

                        Reset

                    </button>

                    <button
                        onClick={onExport}
                        className="
                            h-11
                            px-5
                            rounded-xl
                            border
                            border-green-200
                            bg-green-50
                            text-green-700
                            flex
                            items-center
                            gap-2
                            hover:bg-green-100
                            transition
                        "
                    >

                        <FiDownload />

                        Export CSV

                    </button>

                    <button
                        onClick={onSearch}
                        className="
                            h-11
                            px-6
                            rounded-xl
                            bg-gradient-to-r
                            from-green-600
                            to-emerald-600
                            text-white
                            font-medium
                            flex
                            items-center
                            gap-2
                            hover:from-green-700
                            hover:to-emerald-700
                            transition
                            shadow-lg
                        "
                    >

                        <FiSearch />

                        Search

                    </button>

                </div>

            </div>

        </div>

    );

};

export default DonationFilter;