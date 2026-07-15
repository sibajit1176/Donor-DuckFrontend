import { useEffect, useState } from "react";
import {
    FiUsers,
    FiHeart,
    FiFolder,
    FiDollarSign,
} from "react-icons/fi";

import DashboardHeader from "../../components/admin/dashboard/DashboardHeader";
import DashboardCard from "../../components/admin/dashboard/DashboardCard";
import DashboardChart from "../../components/admin/dashboard/DashboardChart";
import PendingCharityTable from "../../components/admin/dashboard/PendingCharityTable";
import RecentDonationTable from "../../components/admin/dashboard/RecentDonationTable";
import RecentUserTable from "../../components/admin/dashboard/RecentUserTable";

import { adminDashboard } from "../../services/admin.service";

const AdminDashboard = () => {
    const [loading, setLoading] = useState(true);

    const [dashboard, setDashboard] = useState({
        statistics: {
            totalUsers: 0,
            activeUsers: 0,
            totalCharities: 0,
            pendingCharities: 0,
            totalProjects: 0,
            activeProjects: 0,
            totalDonationAmount: 0,
            todayDonation: 0,
        },
        chartData: [],
        recentUsers: [],
        pendingCharities: [],
        recentDonations: [],
    });

    useEffect(() => {
        fetchDashboard();
    }, []);

    const fetchDashboard = async () => {
        try {
            const response = await adminDashboard();

            setDashboard({
                statistics: response.statistics || {},
                chartData: response.chartData || [],
                recentUsers: response.recentUsers || [],
                pendingCharities: response.pendingCharities || [],
                recentDonations: response.recentDonations || [],
            });
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                Loading Dashboard...
            </div>
        );
    }

    return (
        <div className="h-[calc(100vh-80px)] bg-gray-50 overflow-y-auto scrollbar-hide">
            <div className="p-8">

                <DashboardHeader />

                {/* Statistics */}

                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">

                    <DashboardCard
                        title="Total Users"
                        value={dashboard.statistics?.totalUsers ?? 0}
                        icon={<FiUsers />}
                        color="bg-blue-600"
                    />

                    <DashboardCard
                        title="Total Charities"
                        value={dashboard.statistics?.totalCharities ?? 0}
                        icon={<FiHeart />}
                        color="bg-green-600"
                    />

                    <DashboardCard
                        title="Projects"
                        value={dashboard.statistics?.totalProjects ?? 0}
                        icon={<FiFolder />}
                        color="bg-orange-500"
                    />

                    <DashboardCard
                        title="Total Donation"
                        value={`₹${(
                            dashboard.statistics?.totalDonationAmount ?? 0
                        ).toLocaleString("en-IN")}`}
                        icon={<FiDollarSign />}
                        color="bg-purple-600"
                    />

                </div>

                {/* Chart */}

                <div className="mt-8">
                    <DashboardChart
                        data={dashboard.chartData ?? []}
                    />
                </div>

                {/* Tables */}

                <div className="grid xl:grid-cols-2 gap-8 mt-8">

                    <PendingCharityTable
                        charities={dashboard.pendingCharities ?? []}
                    />

                    <RecentUserTable
                        users={dashboard.recentUsers ?? []}
                    />

                </div>

                <div className="mt-8">

                    <RecentDonationTable
                        donations={dashboard.recentDonations ?? []}
                    />

                </div>

            </div>
        </div>
    );
};

export default AdminDashboard;