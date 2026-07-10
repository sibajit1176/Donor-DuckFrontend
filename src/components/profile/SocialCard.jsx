import {
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";

const SocialCard = ({ user }) => {

    return (

        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">

            <h2 className="text-xl font-bold text-gray-800 mb-8">

                Social Profiles

            </h2>

            <div className="space-y-6">

                {/* LinkedIn */}

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">

                        <div className="h-11 w-11 rounded-xl bg-blue-100 flex items-center justify-center">

                            <FaLinkedin
                                size={24}
                                className="text-blue-600"
                            />

                        </div>

                        <div>

                            <p className="text-sm text-gray-500">

                                LinkedIn

                            </p>

                            <p className="font-medium">

                                {user.linkedInProfile
                                    ? "Available"
                                    : "Not Added"}

                            </p>

                        </div>

                    </div>

                    {user.linkedInProfile && (

                        <a
                            href={user.linkedInProfile}
                            target="_blank"
                            rel="noreferrer"
                            className="text-green-600 font-semibold hover:underline"
                        >
                            Visit
                        </a>

                    )}

                </div>

                {/* Twitter */}

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">

                        <div className="h-11 w-11 rounded-xl bg-sky-100 flex items-center justify-center">

                            <FaTwitter
                                size={24}
                                className="text-sky-500"
                            />

                        </div>

                        <div>

                            <p className="text-sm text-gray-500">

                                Twitter

                            </p>

                            <p className="font-medium">

                                {user.twiterProfile
                                    ? "Available"
                                    : "Not Added"}

                            </p>

                        </div>

                    </div>

                    {user.twiterProfile && (

                        <a
                            href={user.twiterProfile}
                            target="_blank"
                            rel="noreferrer"
                            className="text-green-600 font-semibold hover:underline"
                        >
                            Visit
                        </a>

                    )}

                </div>

            </div>

        </div>

    );

};

export default SocialCard;