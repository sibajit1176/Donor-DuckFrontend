import {
    FiUser,
    FiPhone,
    FiMail,
    FiMapPin,
    FiGlobe,
} from "react-icons/fi";

const PersonalInfoCard = ({ user }) => {

    return (

        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">

            <h2 className="text-xl font-bold text-gray-800 mb-8">

                Personal Information

            </h2>

            <div className="space-y-6">

                <InfoRow
                    icon={<FiUser />}
                    title="Full Name"
                    value={user.name}
                />

                <InfoRow
                    icon={<FiMail />}
                    title="Email"
                    value={user.email}
                />

                <InfoRow
                    icon={<FiPhone />}
                    title="Phone"
                    value={user.phone || "Not Added"}
                />

                <InfoRow
                    icon={<FiMapPin />}
                    title="Address"
                    value={user.address || "Not Added"}
                />

                <InfoRow
                    icon={<FiMapPin />}
                    title="City"
                    value={user.city || "Not Added"}
                />

                <InfoRow
                    icon={<FiGlobe />}
                    title="Country"
                    value={user.country || "Not Added"}
                />

            </div>

        </div>

    );

};

const InfoRow = ({ icon, title, value }) => {

    return (

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

};

export default PersonalInfoCard;