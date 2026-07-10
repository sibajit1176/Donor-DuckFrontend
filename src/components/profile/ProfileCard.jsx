import { CgProfile } from "react-icons/cg";

const ProfileCard = () => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-8">

            <div className="flex flex-col items-center">

                <div className="h-32 w-32 rounded-full bg-green-100 flex items-center justify-center">

                    <CgProfile
                        size={90}
                        className="text-green-600"
                    />

                </div>

                <button
                    className="mt-5 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                >
                    Upload Photo
                </button>

            </div>

        </div>
    );
};

export default ProfileCard;