import {
    FiHome,
    FiMail,
    FiPhone,
    FiGlobe,
    FiFileText,
} from "react-icons/fi";

const Item = ({
    icon,
    label,
    value,
}) => (

    <div className="flex items-start gap-4">

        <div className="h-12 w-12 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">

            {icon}

        </div>

        <div>

            <p className="text-sm text-gray-500">
                {label}
            </p>

            <p className="font-semibold text-gray-800 mt-1 break-all">
                {value || "-"}
            </p>

        </div>

    </div>

);

const ProjectOrganizationCard = ({
    charity,
}) => {

    return (

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-7 h-full">

            <div className="flex items-center justify-between mb-6">

                <h2 className="text-2xl font-bold text-gray-800">

                    Organization

                </h2>

                <div className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">

                    NGO

                </div>

            </div>

            <div className="space-y-6">

                <Item
                    icon={<FiHome />}
                    label="Organization"
                    value={charity.organizationName}
                />

                <Item
                    icon={<FiFileText />}
                    label="Registration No."
                    value={charity.registrationNumber}
                />

                <Item
                    icon={<FiMail />}
                    label="Email"
                    value={charity.email}
                />

                <Item
                    icon={<FiPhone />}
                    label="Phone"
                    value={charity.phone}
                />

                <Item
                    icon={<FiGlobe />}
                    label="Website"
                    value={charity.website}
                />

            </div>

        </div>

    );

};

export default ProjectOrganizationCard;