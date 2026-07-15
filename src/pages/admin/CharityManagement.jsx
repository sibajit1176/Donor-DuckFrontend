import { useEffect, useMemo, useState } from "react";
import {
    FiGrid,
    FiList,
    FiHeart,
    FiClock,
    FiCheckCircle,
    FiXCircle,
} from "react-icons/fi";

import CharityFilter from "../../components/admin/charity/CharityFilter";
import CharityTable from "../../components/admin/charity/CharityTable";
import CharityCard from "../../components/admin/charity/CharityCard";
import CharityViewModal from "../../components/admin/charity/CharityViewModal";
import CharityStatusModal from "../../components/admin/charity/CharityStatusModal";

import { charitymanagement, updateCharityStatus} from "../../services/admin.service";
import { toast } from "react-toastify";

const CharityManagement = () => {

    const [loading, setLoading] = useState(true);

    const [charities, setCharities] = useState([]);

    const [viewMode, setViewMode] = useState("table");

    const [selectedCharity, setSelectedCharity] = useState(null);

    const [viewOpen, setViewOpen] = useState(false);

    const [statusOpen, setStatusOpen] = useState(false);

    const [filters, setFilters] = useState({
        search: "",
        status: "",
        category: "",
        sort: "newest",
    });

    const [statusLoading, setStatusLoading] = useState(false);

    useEffect(() => {

        fetchCharities();

    }, []);

    const fetchCharities = async () => {
        try {
            setLoading(true);

            const result = await charitymanagement();

            console.log(result);

            setCharities(result.charities || []);
        } catch (error) {
            console.error(error);
            setCharities([]);
        } finally {
            setLoading(false);
        }
    };

    const filteredCharities = useMemo(() => {

        let data = [...charities];

        if (filters.search) {

            data = data.filter((item) =>
                item.organizationName
                    ?.toLowerCase()
                    .includes(filters.search.toLowerCase())
            );

        }

        if (filters.status) {

            data = data.filter(
                (item) =>
                    item.approvalStatus === filters.status
            );

        }

        if (filters.category) {

            data = data.filter(
                (item) =>
                    item.category === filters.category
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
                    a.organizationName.localeCompare(
                        b.organizationName
                    )
                );

                break;

            case "name_desc":

                data.sort((a, b) =>
                    b.organizationName.localeCompare(
                        a.organizationName
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

    }, [charities, filters]);

    const handleReset = () => {

        setFilters({
            search: "",
            status: "",
            category: "",
            sort: "newest",
        });

    };

    const openView = (charity) => {

        setSelectedCharity(charity);

        setViewOpen(true);

    };

    const openStatus = (charity) => {

        setSelectedCharity(charity);

        setStatusOpen(true);

    };

    const handleStatusUpdate = async (data) => {
        try {

            setStatusLoading(true);

            const result = await updateCharityStatus(data);

            toast.success(result.message);

            setStatusOpen(false);

            setSelectedCharity(null);

            fetchCharities();

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to update charity status."
            );

        } finally {

            setStatusLoading(false);

        }
    };

    return (

        <div className="h-[calc(100vh-80px)] overflow-y-auto custom-scrollbar bg-gray-50">

            <div className="max-w-[1700px] mx-auto p-8">

                {/* Header */}

                <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-white shadow-xl">

                    <h1 className="text-4xl font-bold">

                        Charity Management

                    </h1>

                    <p className="mt-3 text-green-100">

                        Manage charity organizations, review registrations and approve applications.

                    </p>

                </div>

                {/* Statistics */}

                <div className="grid lg:grid-cols-4 gap-6 mt-8">

                    <StatCard
                        title="Total Charities"
                        value={charities.length}
                        icon={<FiHeart size={24} />}
                        color="from-green-500 to-emerald-600"
                    />

                    <StatCard
                        title="Pending"
                        value={
                            charities.filter(
                                x =>
                                    x.approvalStatus ===
                                    "PENDING"
                            ).length
                        }
                        icon={<FiClock size={24} />}
                        color="from-yellow-500 to-orange-500"
                    />

                    <StatCard
                        title="Approved"
                        value={
                            charities.filter(
                                x =>
                                    x.approvalStatus ===
                                    "APPROVED"
                            ).length
                        }
                        icon={<FiCheckCircle size={24} />}
                        color="from-blue-500 to-indigo-600"
                    />

                    <StatCard
                        title="Rejected"
                        value={
                            charities.filter(
                                x =>
                                    x.approvalStatus ===
                                    "REJECTED"
                            ).length
                        }
                        icon={<FiXCircle size={24} />}
                        color="from-red-500 to-pink-600"
                    />

                </div>

                {/* Filter */}

                <div className="mt-8">

                    <CharityFilter
                        filters={filters}
                        setFilters={setFilters}
                        onReset={handleReset}
                    />

                </div>

                {/* Toolbar */}

                <div className="flex justify-between items-center mt-8">

                    <h2 className="font-bold text-2xl">

                        Charity List

                    </h2>

                    <div className="flex items-center bg-white rounded-2xl border border-gray-200 shadow-sm p-1">

                        <button
                            onClick={() => setViewMode("table")}
                            className={`
            flex items-center gap-2
            px-5
            h-11
            rounded-xl
            font-medium
            transition-all
            duration-300
            ${viewMode === "table"
                                    ? "bg-green-600 text-white shadow-md"
                                    : "text-gray-600 hover:bg-gray-100"
                                }
        `}
                        >
                            <FiList size={18} />

                            <span>Table</span>

                        </button>

                        <button
                            onClick={() => setViewMode("grid")}
                            className={`
            flex items-center gap-2
            px-5
            h-11
            rounded-xl
            font-medium
            transition-all
            duration-300
            ${viewMode === "grid"
                                    ? "bg-green-600 text-white shadow-md"
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

                        {Array.from({ length: 6 }).map(
                            (_, index) => (

                                <div
                                    key={index}
                                    className="bg-white rounded-3xl h-72 animate-pulse"
                                />

                            )
                        )}

                    </div>

                )}

                {/* Empty */}

                {!loading &&
                    filteredCharities.length === 0 && (

                        <div className="bg-white rounded-3xl p-20 mt-8 text-center shadow">

                            <FiHeart
                                size={70}
                                className="mx-auto text-gray-300"
                            />

                            <h2 className="mt-6 text-2xl font-bold">

                                No Charity Found

                            </h2>

                            <p className="mt-2 text-gray-500">

                                No charities matched your filters.

                            </p>

                        </div>

                    )}

                {/* Table */}

                {!loading &&
                    filteredCharities.length > 0 &&
                    viewMode === "table" && (

                        <div className="mt-8">

                            <CharityTable
                                charities={filteredCharities}
                                onView={openView}
                                onStatus={openStatus}
                            />

                        </div>

                    )}

                {/* Grid */}

                {!loading &&
                    filteredCharities.length > 0 &&
                    viewMode === "grid" && (

                        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8 mt-8">

                            {filteredCharities.map(
                                (charity) => (

                                    <CharityCard
                                        key={charity.id}
                                        charity={charity}
                                        onView={openView}
                                    />

                                )
                            )}

                        </div>

                    )}

            </div>

            <CharityViewModal
                open={viewOpen}
                charity={selectedCharity}
                onClose={() =>
                    setViewOpen(false)
                }
            />

           <CharityStatusModal
    open={statusOpen}
    charity={selectedCharity}
    loading={statusLoading}
    onClose={() => {
        setStatusOpen(false);
        setSelectedCharity(null);
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

    <div className={`bg-gradient-to-r ${color} rounded-3xl p-6 text-white shadow-lg`}>

        <div className="flex justify-between">

            <div>

                <p className="text-white/80">

                    {title}

                </p>

                <h2 className="text-4xl font-bold mt-3">

                    {value}

                </h2>

            </div>

            <div className="h-16 w-16 rounded-2xl bg-white/20 flex items-center justify-center text-3xl">

                {icon}

            </div>

        </div>

    </div>

);

export default CharityManagement;