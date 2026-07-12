import {
    FiFileText,
    FiTarget,
    FiEye,
    FiGlobe,
    FiTag,
    FiExternalLink,
} from "react-icons/fi";

const CharityAboutCard = ({ charity }) => {
    return (
        <div className="h-full bg-white rounded-3xl border border-gray-100 shadow-md p-7">

            {/* Header */}

            <div className="flex items-center justify-between mb-6">

                <div>

                    <h2 className="text-2xl font-bold text-gray-800">
                        About Organization
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        Learn more about this charity.
                    </p>

                </div>

                <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                    {charity.category}
                </span>

            </div>

            {/* Description */}

            <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5 mb-6">

                <div className="flex items-center gap-2 mb-3">

                    <FiFileText className="text-green-600" />

                    <h3 className="font-semibold text-gray-800">
                        Description
                    </h3>

                </div>

                <p className="text-gray-600 leading-7">
                    {charity.description || "-"}
                </p>

            </div>

            {/* Mission & Vision */}

            <div className="grid md:grid-cols-2 gap-5">

                <div className="rounded-2xl border border-green-100 bg-green-50 p-5">

                    <div className="flex items-center gap-2 mb-3">

                        <div className="h-10 w-10 rounded-xl bg-green-600 text-white flex items-center justify-center">

                            <FiTarget />

                        </div>

                        <h3 className="font-semibold text-gray-800">
                            Mission
                        </h3>

                    </div>

                    <p className="text-gray-600 leading-7">
                        {charity.mission || "No mission added."}
                    </p>

                </div>

                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">

                    <div className="flex items-center gap-2 mb-3">

                        <div className="h-10 w-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">

                            <FiEye />

                        </div>

                        <h3 className="font-semibold text-gray-800">
                            Vision
                        </h3>

                    </div>

                    <p className="text-gray-600 leading-7">
                        {charity.vision || "No vision added."}
                    </p>

                </div>

            </div>

            {/* Footer */}

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t pt-5">

                <div className="flex items-center gap-3">

                    <div className="h-10 w-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">

                        <FiTag />

                    </div>

                    <div>

                        <p className="text-xs text-gray-500">
                            Category
                        </p>

                        <p className="font-semibold text-gray-800">
                            {charity.category}
                        </p>

                    </div>

                </div>

                {charity.website && (
                    <a
                        href={charity.website}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white transition"
                    >
                        <FiGlobe />
                        Visit Website
                        <FiExternalLink size={15} />
                    </a>
                )}

            </div>

        </div>
    );
};

export default CharityAboutCard;