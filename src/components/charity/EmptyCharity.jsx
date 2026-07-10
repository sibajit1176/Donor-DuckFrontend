import { FiHeart } from "react-icons/fi";

const EmptyCharity = () => {
    return (
        <div className="flex flex-col items-center py-24">

            <FiHeart
                size={80}
                className="text-green-500"
            />

            <h2 className="text-2xl font-bold mt-6">

                No charities found

            </h2>

            <p className="text-gray-500 mt-2">

                Be the first to register a charity.

            </p>

        </div>
    );
};

export default EmptyCharity;