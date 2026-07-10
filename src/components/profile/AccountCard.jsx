import {
    FiCalendar,
    FiClock,
    FiShield,
    FiUser,
} from "react-icons/fi";

const AccountCard = ({ user }) => {

    const InfoRow = ({ icon, title, value }) => (

        <div className="flex items-center gap-4">

            <div className="h-11 w-11 rounded-xl bg-green-100 text-green-600 flex items-center justify-center text-xl">

                {icon}

            </div>

            <div>

                <p className="text-sm text-gray-500">

                    {title}

                </p>

                <p className="font-semibold text-gray-800">

                    {value}

                </p>

            </div>

        </div>

    );

    return (

        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">

            <h2 className="text-xl font-bold text-gray-800 mb-8">

                Account Information

            </h2>

            <div className="space-y-6">

                <InfoRow
                    icon={<FiUser />}
                    title="Role"
                    value={user.role}
                />

                <InfoRow
                    icon={<FiShield />}
                    title="Email Status"
                    value={
                        user.isVerified
                            ? "Verified"
                            : "Not Verified"
                    }
                />

                <InfoRow
                    icon={<FiCalendar />}
                    title="Joined On"
                    value={new Date(
                        user.createdAt
                    ).toLocaleDateString()}
                />

                <InfoRow
                    icon={<FiClock />}
                    title="Last Updated"
                    value={new Date(
                        user.updatedAt
                    ).toLocaleDateString()}
                />

            </div>

        </div>

    );

};

export default AccountCard;