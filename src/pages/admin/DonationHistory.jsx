import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import DonationStatistics from "../../components/admin/donation/DonationStatistics";
import DonationFilter from "../../components/admin/donation/DonationFilter";
import DonationHistoryTable from "../../components/admin/donation/DonationHistoryTable";
import DonationDetailsModal from "../../components/admin/donation/DonationDetailsModal";

import {
    getAllDonationHistory,
} from "../../services/admin.service";

const DonationHistory = () => {

    const [loading, setLoading] = useState(true);

    const [donations, setDonations] = useState([]);

    const [statistics, setStatistics] = useState({});

    const [selectedDonation, setSelectedDonation] =
        useState(null);

    const [detailsOpen, setDetailsOpen] =
        useState(false);

    const [filters, setFilters] = useState({

        search: "",

        status: "",

        from: "",

        to: "",

    });

    useEffect(() => {

        fetchDonationHistory();

    }, []);

    const fetchDonationHistory = async () => {

        try {

            setLoading(true);

            const result =
                await getAllDonationHistory();

            setDonations(result.donations || []);

            setStatistics(result.statistics || {});

        } catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Unable to load donation history."

            );

        } finally {

            setLoading(false);

        }

    };

    const handleSearch = () => {

        let filtered = [...donations];

        if (filters.search) {

            const keyword =
                filters.search.toLowerCase();

            filtered = filtered.filter(

                (item) =>

                    item.donorName
                        ?.toLowerCase()
                        .includes(keyword) ||

                    item.organizationName
                        ?.toLowerCase()
                        .includes(keyword) ||

                    item.projectName
                        ?.toLowerCase()
                        .includes(keyword) ||

                    item.orderId
                        ?.toLowerCase()
                        .includes(keyword)

            );

        }

        if (filters.status) {

            filtered = filtered.filter(

                (item) =>

                    item.status === filters.status

            );

        }

        if (filters.from) {

            filtered = filtered.filter(

                (item) =>

                    new Date(item.createdAt) >=

                    new Date(filters.from)

            );

        }

        if (filters.to) {

            const endDate = new Date(filters.to);

            endDate.setHours(
                23,
                59,
                59,
                999
            );

            filtered = filtered.filter(

                (item) =>

                    new Date(item.createdAt) <=
                    endDate

            );

        }

        setDonations(filtered);

    };

    const handleReset = () => {

        setFilters({

            search: "",

            status: "",

            from: "",

            to: "",

        });

        fetchDonationHistory();

    };

    const handleExport = () => {

        toast.info(
            "Export feature coming soon."
        );

    };

    const handleViewDetails = (donation) => {

        setSelectedDonation(donation);

        setDetailsOpen(true);

    };

    if (loading) {

        return (

            <div className="flex items-center justify-center h-[70vh]">

                <p className="text-xl font-semibold">

                    Loading...

                </p>

            </div>

        );

    }

    return (

        <div className="h-[calc(100vh-80px)] overflow-y-auto custom-scrollbar bg-gray-50 p-8 space-y-8">

            {/* Statistics */}

            <DonationStatistics
                statistics={statistics}
            />

            {/* Filters */}

            <DonationFilter
                filters={filters}
                setFilters={setFilters}
                onSearch={handleSearch}
                onReset={handleReset}
                onExport={handleExport}
            />

            {/* Table */}

            <DonationHistoryTable
                donations={donations}
                onView={handleViewDetails}
            />

            {/* Details Modal */}

            <DonationDetailsModal
                open={detailsOpen}
                donation={selectedDonation}
                onClose={() =>
                    setDetailsOpen(false)
                }
            />

        </div>

    );

};

export default DonationHistory;