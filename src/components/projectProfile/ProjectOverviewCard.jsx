import {
    FiTarget,
    FiTrendingUp,
    FiUsers,
    FiClock,
    FiPlayCircle,
    FiCheckCircle,
    FiXCircle,
} from "react-icons/fi";

const statusConfig = {
    DRAFT: {
        color: "bg-gray-500",
        icon: <FiClock size={24} />,
    },
    ACTIVE: {
        color: "bg-green-500",
        icon: <FiPlayCircle size={24} />,
    },
    COMPLETED: {
        color: "bg-blue-500",
        icon: <FiCheckCircle size={24} />,
    },
    CANCELLED: {
        color: "bg-red-500",
        icon: <FiXCircle size={24} />,
    },
};

const Card = ({
    icon,
    label,
    value,
    color,
}) => (
    <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
        <div className="flex justify-between items-center">
            <div>
                <p className="text-gray-500 text-sm">
                    {label}
                </p>

                <h3 className="text-3xl font-bold mt-2 text-gray-800">
                    {value}
                </h3>
            </div>

            <div
                className={`h-14 w-14 rounded-2xl ${color} flex items-center justify-center text-white`}
            >
                {icon}
            </div>
        </div>
    </div>
);

const ProjectOverviewCard = ({ project }) => {

    const progress =
        (Number(project?.raisedAmount || 0) /
            Number(project?.goalAmount || 1)) *
        100;

    const currentStatus =
        statusConfig[project?.status] || statusConfig.DRAFT;

    return (
        <div>
            <div className="grid md:grid-cols-4 gap-6">

                <Card
                    label="Raised"
                    value={`₹${Number(project?.raisedAmount || 0).toLocaleString()}`}
                    color="bg-green-500"
                    icon={<FiTrendingUp size={24} />}
                />

                <Card
                    label="Goal"
                    value={`₹${Number(project?.goalAmount || 0).toLocaleString()}`}
                    color="bg-blue-500"
                    icon={<FiTarget size={24} />}
                />

                <Card
                    label="Donors"
                    value={project?.totalDonors || 0}
                    color="bg-purple-500"
                    icon={<FiUsers size={24} />}
                />

                <Card
                    label="Status"
                    value={project?.status || "DRAFT"}
                    color={currentStatus.color}
                    icon={currentStatus.icon}
                />

            </div>

            <div className="bg-white rounded-3xl mt-6 p-6 shadow-lg border border-gray-100">

                <div className="flex justify-between mb-3">

                    <span className="font-semibold">
                        Funding Progress
                    </span>

                    <span className="font-bold text-green-600">
                        {Math.min(progress, 100).toFixed(1)}%
                    </span>

                </div>

                <div className="h-4 rounded-full bg-gray-200 overflow-hidden">

                    <div
                        className="h-full rounded-full bg-gradient-to-r from-green-600 to-emerald-500 transition-all duration-500"
                        style={{
                            width: `${Math.min(progress, 100)}%`,
                        }}
                    />

                </div>

            </div>
        </div>
    );
};

export default ProjectOverviewCard;