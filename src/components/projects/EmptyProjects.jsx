import { FiFolder, FiHeart, FiArrowRight } from "react-icons/fi";

const EmptyProjects = () => {
    return (
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 py-20 px-8 flex flex-col items-center text-center">

            <div className="h-24 w-24 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">

                <FiFolder
                    size={42}
                    className="text-white"
                />

            </div>

            <h2 className="mt-7 text-3xl font-bold text-gray-800">
                No Active Projects
            </h2>

            <p className="mt-3 max-w-lg text-gray-500 leading-7">
                There are no fundraising campaigns available right now.
                Please check back later and support a meaningful cause.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 text-white font-semibold shadow-lg">

                <FiHeart />

                Every Donation Creates Hope

                <FiArrowRight />

            </div>

        </div>
    );
};

export default EmptyProjects;