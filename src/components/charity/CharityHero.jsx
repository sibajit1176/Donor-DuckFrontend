import {
    FiMapPin,
    FiGlobe,
    FiCheckCircle,
    FiShare2,
    FiHeart,
    FiUsers,
    FiTarget
} from "react-icons/fi";

const CharityHero = ({
    charity,
    statistics,
    onDonate,
}) => {

    const progress =
        statistics.goalAmount > 0
            ? Math.min(
                  (
                      (statistics.totalRaised /
                          statistics.goalAmount) *
                      100
                  ).toFixed(1),
                  100
              )
            : 0;

    return (

    <section className="relative overflow-hidden rounded-[32px] bg-white shadow-xl">

    {/* Banner */}

    <div className="relative h-[290px]">

        <img
            src={
                charity.banner ||
                "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c"
            }
            alt=""
            className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/20" />

        {/* Decorative */}

        <div className="absolute top-10 right-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-36 w-36 rounded-full bg-green-400/20 blur-3xl" />

    </div>

    {/* Floating Card */}

    <div className="relative px-10 pb-10">

        <div
            className="
                -mt-20
                rounded-[28px]
                border
                border-gray-100
                bg-white
                p-8
                shadow-2xl
            "
        >

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                {/* Left */}

                <div className="flex gap-6">

                    <img
                        src={charity.logo}
                        alt=""
                        className="
                            h-32
                            w-32
                            rounded-3xl
                            border-4
                            border-white
                            object-cover
                            shadow-xl
                            bg-white
                        "
                    />

                    <div className="flex-1">

                        <div className="flex flex-wrap items-center gap-4">

                            <h1 className="text-4xl font-bold text-gray-900">

                                {charity.organizationName}

                            </h1>

                            {charity.isVerified && (

                                <span
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        bg-green-100
                                        px-4
                                        py-2
                                        text-sm
                                        font-semibold
                                        text-green-700
                                    "
                                >

                                    <FiCheckCircle />

                                    Verified NGO

                                </span>

                            )}

                        </div>

                        <p className="mt-4 max-w-3xl text-gray-600 leading-8">

                            {charity.description}

                        </p>

                        <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-600">

                            <span className="flex items-center gap-2">

                                <FiMapPin className="text-green-600" />

                                {charity.address}

                            </span>

                            <span className="flex items-center gap-2">

                                <FiGlobe className="text-green-600" />

                                {charity.website || "Website unavailable"}

                            </span>

                        </div>

                    </div>

                </div>

                {/* Right */}

                <div className="flex flex-col gap-4 lg:w-[240px]">

                    <button
                        onClick={onDonate}
                        className="
                            rounded-2xl
                            bg-green-600
                            py-4
                            font-semibold
                            text-white
                            shadow-lg
                            transition
                            hover:bg-green-700
                            hover:-translate-y-1
                        "
                    >
                        Donate Now
                    </button>

                    <button
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            rounded-2xl
                            border
                            border-gray-200
                            py-4
                            font-semibold
                            text-gray-700
                            transition
                            hover:bg-gray-100
                        "
                    >
                        <FiShare2 />

                        Share Charity

                    </button>

                </div>

            </div>

        </div>

    </div>

</section>

    );

};

export default CharityHero;