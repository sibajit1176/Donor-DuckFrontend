import { FiPlus, FiHome } from "react-icons/fi";

const CharityHeader = ({
    hasCharity,
    onRegister,
    onMyCharity,
}) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-8">

            <div>
                <h1 className="text-4xl font-bold text-gray-800">
                    Charities
                </h1>

                <p className="text-gray-500 mt-2">
                    Support verified charities making a real impact.
                </p>
            </div>

            {hasCharity ? (
                <button
                    onClick={onMyCharity}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white transition"
                >
                    <FiHome />
                    My Charity
                </button>
            ) : (
                <button
                    onClick={onRegister}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white transition"
                >
                    <FiPlus />
                    Register Charity
                </button>
            )}

        </div>
    );
};

export default CharityHeader;