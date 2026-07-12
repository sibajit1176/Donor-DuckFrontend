import {
    FiCheckCircle,
    FiClock,
    FiXCircle,
    FiDollarSign,
    FiFlag,
} from "react-icons/fi";

const CharityStatusCard = ({ charity }) => {

    const getStatus = () => {
        switch (charity.approvalStatus) {
            case "APPROVED":
                return {
                    color: "bg-green-100 text-green-700",
                    icon: <FiCheckCircle />,
                };

            case "REJECTED":
                return {
                    color: "bg-red-100 text-red-700",
                    icon: <FiXCircle />,
                };

            default:
                return {
                    color: "bg-yellow-100 text-yellow-700",
                    icon: <FiClock />,
                };
        }
    };

    const status = getStatus();

    const goal = Number(charity.goalAmount || 0);

    const current = Number(charity.currentAmount || 0);

    const percent =
        goal > 0 ? Math.min((current / goal) * 100, 100) : 0;

    return (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">

            <h2 className="text-xl font-bold text-gray-800 mb-6">
                Charity Status
            </h2>

            <div className="space-y-6">

                <div>

                    <p className="text-gray-500 text-sm mb-2">
                        Approval Status
                    </p>

                    <span
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold ${status.color}`}
                    >
                        {status.icon}
                        {charity.approvalStatus}
                    </span>

                </div>

                <div>

                    <div className="flex justify-between text-sm mb-2">

                        <span className="flex items-center gap-2">
                            <FiDollarSign />
                            Raised
                        </span>

                        <span>
                            ₹{current.toLocaleString()}
                        </span>

                    </div>

                    <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">

                        <div
                            style={{
                                width: `${percent}%`,
                            }}
                            className="h-full bg-green-500 rounded-full"
                        />

                    </div>

                    <div className="mt-2 text-right text-sm text-gray-500">
                        Goal ₹{goal.toLocaleString()}
                    </div>

                </div>

                <div className="rounded-2xl bg-green-50 p-5">

                    <div className="flex items-center gap-3">

                        <div className="h-12 w-12 rounded-xl bg-green-600 text-white flex items-center justify-center">

                            <FiFlag size={22} />

                        </div>

                        <div>

                            <p className="text-sm text-gray-500">
                                Fundraising Progress
                            </p>

                            <h3 className="text-2xl font-bold text-green-700">
                                {percent.toFixed(1)}%
                            </h3>

                        </div>

                    </div>

                </div>

                {charity.approvalStatus === "REJECTED" &&
                    charity.rejectionReason && (
                        <div className="rounded-xl bg-red-50 border border-red-200 p-4">

                            <p className="font-semibold text-red-700">
                                Rejection Reason
                            </p>

                            <p className="text-sm text-red-600 mt-2">
                                {charity.rejectionReason}
                            </p>

                        </div>
                    )}

            </div>

        </div>
    );
};

export default CharityStatusCard;