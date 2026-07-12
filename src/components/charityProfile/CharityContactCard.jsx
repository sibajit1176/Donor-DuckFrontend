import {
    FiMail,
    FiPhone,
    FiHome,
    FiMapPin,
    FiMap,
} from "react-icons/fi";

const ContactItem = ({ icon, title, value }) => (
    <div className="flex items-start gap-3 rounded-xl p-3 hover:bg-green-50 transition">

        <div className="h-10 w-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
            {icon}
        </div>

        <div className="min-w-0 flex-1">

            <p className="text-xs uppercase tracking-wide text-gray-400">
                {title}
            </p>

            <p className="mt-1 text-sm font-medium text-gray-700 break-words">
                {value || "--"}
            </p>

        </div>

    </div>
);

const CharityContactCard = ({ charity }) => {

    return (

        <div className="h-full bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col">

            {/* Header */}

            <div className="flex items-center justify-between px-6 pt-6">

                <h2 className="text-xl font-bold text-gray-800">
                    Contact Information
                </h2>

                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                    Contact
                </span>

            </div>

            {/* Content */}

            <div className="flex-1 p-6 pt-5">

                <div className="grid gap-2">

                    <ContactItem
                        icon={<FiMail size={18} />}
                        title="Email"
                        value={charity.email}
                    />

                    <ContactItem
                        icon={<FiPhone size={18} />}
                        title="Phone"
                        value={charity.phone}
                    />

                    <ContactItem
                        icon={<FiHome size={18} />}
                        title="Address"
                        value={charity.address}
                    />

                    <div className="grid grid-cols-2 gap-2">

                        <ContactItem
                            icon={<FiMapPin size={18} />}
                            title="City"
                            value={charity.city}
                        />

                        <ContactItem
                            icon={<FiMap size={18} />}
                            title="State"
                            value={charity.state}
                        />

                    </div>

                    <ContactItem
                        icon={<FiMap size={18} />}
                        title="Country"
                        value={charity.country}
                    />

                </div>

            </div>

        </div>

    );

};

export default CharityContactCard;