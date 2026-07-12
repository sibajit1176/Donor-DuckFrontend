import {
    FiPlus,
    FiHome,
    FiHeart,
    FiArrowRight,
} from "react-icons/fi";

const CharityHeader = ({
    isAuthenticated,
    hasCharity,
    onRegister,
    onMyCharity,
}) => {

    return (

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 via-emerald-500 to-green-500 p-8 lg:p-10 shadow-xl mb-8">

            {/* Decorative circles */}

            <div className="absolute -top-14 -left-14 h-40 w-40 rounded-full bg-white/10"></div>

            <div className="absolute top-6 right-10 h-24 w-24 rounded-full bg-white/10"></div>

            <div className="absolute -bottom-10 right-1/3 h-32 w-32 rounded-full bg-white/5"></div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center gap-8">

                {/* Left */}

                <div className="flex items-start gap-5">

                    <div className="h-20 w-20 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">

                        <FiHeart
                            size={36}
                            className="text-white"
                        />

                    </div>

                    <div>

                        <h1 className="text-4xl lg:text-5xl font-bold text-white">

                            Discover Charities

                        </h1>

                        <p className="text-green-100 mt-3 max-w-2xl leading-7">

                            Browse verified charities, support meaningful causes,
                            and help communities through transparent donations.
                            Every contribution creates a real impact.

                        </p>

                        <div className="flex flex-wrap gap-3 mt-6">

                            <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm">

                                ✓ Verified NGOs

                            </span>

                            <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm">

                                ✓ Transparent Donations

                            </span>

                            <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm">

                                ✓ Live Projects

                            </span>

                        </div>

                    </div>

                </div>

                {/* Right */}

                {isAuthenticated && (

                    <div className="flex flex-col gap-4">

                        {hasCharity ? (

                            <button
                                onClick={onMyCharity}
                                className="group bg-white text-green-700 px-7 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition flex items-center gap-3"
                            >

                                <FiHome size={20} />

                                My Charity

                                <FiArrowRight
                                    size={18}
                                    className="group-hover:translate-x-1 transition"
                                />

                            </button>

                        ) : (

                            <button
                                onClick={onRegister}
                                className="group bg-white text-green-700 px-7 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition flex items-center gap-3"
                            >

                                <FiPlus size={20} />

                                Register Charity

                                <FiArrowRight
                                    size={18}
                                    className="group-hover:translate-x-1 transition"
                                />

                            </button>

                        )}

                    </div>

                )}

            </div>

        </div>

    );

};

export default CharityHeader;