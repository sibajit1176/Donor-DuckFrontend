import {
    FiMapPin,
    FiHome,
    FiGlobe,
    FiNavigation,
} from "react-icons/fi";

const AddressCard = ({ user }) => {

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
                    {value || "Not Added"}
                </p>
            </div>

        </div>
    );

    return (

        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">

            <h2 className="text-xl font-bold text-gray-800 mb-8">

                Address Details

            </h2>

            <div className="space-y-6">

                <InfoRow
                    icon={<FiHome />}
                    title="Address"
                    value={user.address}
                />

                <InfoRow
                    icon={<FiMapPin />}
                    title="City"
                    value={user.city}
                />

                <InfoRow
                    icon={<FiNavigation />}
                    title="State"
                    value={user.state}
                />

                <InfoRow
                    icon={<FiGlobe />}
                    title="Country"
                    value={user.country}
                />

            </div>

        </div>

    );

};

export default AddressCard;