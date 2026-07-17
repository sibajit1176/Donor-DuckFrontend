import {
    FiMapPin,
    FiGlobe,
    FiMail,
    FiPhone,
    FiCheckCircle,
    FiCalendar,
    FiTarget,
    FiEye,
} from "react-icons/fi";

const InfoItem = ({
    icon,
    title,
    value,
}) => (

    <div
        className="
            flex
            items-start
            gap-4
            rounded-2xl
            border
            border-gray-100
            bg-gray-50
            p-4
            transition
            duration-300
            hover:border-green-200
            hover:bg-green-50
        "
    >

        <div
            className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-green-100
                text-green-600
            "
        >

            {icon}

        </div>

        <div className="min-w-0">

            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">

                {title}

            </p>

            <p className="mt-1 break-all font-semibold text-gray-800">

                {value || "-"}

            </p>

        </div>

    </div>

);

const CharityAbout = ({
    charity,
}) => {

    return (

      <section className="space-y-8">

    {/* ABOUT */}

    <div
        className="
            rounded-3xl
            border
            border-gray-100
            bg-white
            shadow-lg
            overflow-hidden
        "
    >

        <div
            className="
                flex
                items-center
                gap-4
                bg-gradient-to-r
                from-green-600
                to-emerald-600
                px-8
                py-6
                text-white
            "
        >

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">

                <FiCheckCircle size={26} />

            </div>

            <div>

                <h2 className="text-3xl font-bold">

                    About Charity

                </h2>

                <p className="text-green-100">

                    Organization overview

                </p>

            </div>

        </div>

        <div className="p-8">

            <p className="text-lg leading-9 text-gray-600 whitespace-pre-line">

                {charity.description ||
                    "No description available."}

            </p>

        </div>

    </div>

    {/* Mission + Vision */}

    <div className="grid gap-6 lg:grid-cols-2">

        {/* Mission */}

        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg">

            <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-600">

                    <FiTarget size={22} />

                </div>

                <div>

                    <h3 className="text-2xl font-bold text-gray-800">

                        Our Mission

                    </h3>

                    <p className="text-sm text-gray-500">

                        What we work for

                    </p>

                </div>

            </div>

            <p className="mt-6 leading-8 text-gray-600">

                {charity.mission ||
                    "Mission information is not available."}

            </p>

        </div>

        {/* Vision */}

        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg">

            <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">

                    <FiEye size={22} />

                </div>

                <div>

                    <h3 className="text-2xl font-bold text-gray-800">

                        Our Vision

                    </h3>

                    <p className="text-sm text-gray-500">

                        Future goals

                    </p>

                </div>

            </div>

            <p className="mt-6 leading-8 text-gray-600">

                {charity.vision ||
                    "Vision information is not available."}

            </p>

        </div>

    </div>

    {/* Organization Info */}

    <div
        className="
            rounded-3xl
            border
            border-gray-100
            bg-white
            shadow-lg
            overflow-hidden
        "
    >

        <div
            className="
                flex
                items-center
                gap-4
                border-b
                border-gray-100
                px-8
                py-6
            "
        >

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-600">

                <FiCheckCircle size={22} />

            </div>

            <div>

                <h2 className="text-2xl font-bold text-gray-800">

                    Organization Information

                </h2>

                <p className="text-gray-500">

                    Verified charity details

                </p>

            </div>

        </div>

        <div className="grid gap-5 p-8 md:grid-cols-2">

            <InfoItem
                icon={<FiMail size={18} />}
                title="Email"
                value={charity.email}
            />

            <InfoItem
                icon={<FiPhone size={18} />}
                title="Phone"
                value={charity.phone}
            />

            <InfoItem
                icon={<FiGlobe size={18} />}
                title="Website"
                value={charity.website}
            />

            <InfoItem
                icon={<FiMapPin size={18} />}
                title="Address"
                value={charity.address}
            />

            <InfoItem
                icon={<FiCalendar size={18} />}
                title="Founded"
                value={charity.foundedYear}
            />

            <InfoItem
                icon={<FiCheckCircle size={18} />}
                title="Registration No."
                value={charity.registrationNumber}
            />

        </div>

    </div>

</section>
    );

};

export default CharityAbout;