import {
    FiX,
    FiGlobe,
    FiMail,
    FiPhone,
    FiMapPin,
    FiCalendar,
    FiDollarSign,
    FiCheckCircle,
    FiClock,
    FiXCircle,
    FiDownload,
    FiFileText,
    FiTarget,
    FiFlag,
} from "react-icons/fi";

const statusStyle = {
    PENDING: {
        bg: "bg-yellow-100",
        text: "text-yellow-700",
        icon: <FiClock />,
    },
    APPROVED: {
        bg: "bg-green-100",
        text: "text-green-700",
        icon: <FiCheckCircle />,
    },
    REJECTED: {
        bg: "bg-red-100",
        text: "text-red-700",
        icon: <FiXCircle />,
    },
};

const CharityViewModal = ({
    open,
    charity,
    onClose,
}) => {
    if (!open || !charity) return null;

    const status =
        statusStyle[charity.approvalStatus];

    return (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-5">

            <div className="bg-white rounded-3xl w-full max-w-6xl max-h-[92vh] overflow-hidden shadow-2xl">

                {/* Cover */}

                <div className="relative">

                    <img
                        src={
                            charity.coverImage ||
                            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200"
                        }
                        alt=""
                        className="h-60 w-full object-cover"
                    />

                    <button
                        onClick={onClose}
                        className="absolute right-5 top-5 h-11 w-11 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100"
                    >
                        <FiX size={22} />
                    </button>

                    <div className="absolute left-10 -bottom-14">

                        <img
                            src={
                                charity.logo ||
                                "https://ui-avatars.com/api/?name=" +
                                    encodeURIComponent(
                                        charity.organizationName
                                    ) +
                                    "&background=22c55e&color=fff&size=256"
                            }
                            alt=""
                            className="h-28 w-28 rounded-3xl border-4 border-white shadow-lg object-cover"
                        />

                    </div>

                </div>

                <div className="pt-20 px-8 pb-8 overflow-y-auto max-h-[calc(92vh-240px)] custom-scrollbar">

                    {/* Header */}

                    <div className="flex flex-wrap justify-between gap-5">

                        <div>

                            <h2 className="text-3xl font-bold">

                                {charity.organizationName}

                            </h2>

                            <p className="text-gray-500 mt-2">

                                Registration No :
                                {" "}
                                {charity.registrationNumber}

                            </p>

                        </div>

                        <span
                            className={`${status.bg} ${status.text} flex items-center gap-2 px-5 py-3 rounded-full font-semibold h-fit`}
                        >

                            {status.icon}

                            {charity.approvalStatus}

                        </span>

                    </div>

                    {/* Basic */}

                    <div className="grid lg:grid-cols-2 gap-8 mt-10">

                        <InfoCard
                            title="Category"
                            value={charity.category}
                        />

                        <InfoCard
                            title="Website"
                            value={charity.website || "--"}
                            icon={<FiGlobe />}
                        />

                        <InfoCard
                            title="Email"
                            value={charity.email || "--"}
                            icon={<FiMail />}
                        />

                        <InfoCard
                            title="Phone"
                            value={charity.phone || "--"}
                            icon={<FiPhone />}
                        />

                        <InfoCard
                            title="Address"
                            value={`${charity.address || ""}, ${charity.city || ""}, ${charity.state || ""}, ${charity.country || ""}`}
                            icon={<FiMapPin />}
                        />

                        <InfoCard
                            title="Created"
                            value={new Date(
                                charity.createdAt
                            ).toLocaleString()}
                            icon={<FiCalendar />}
                        />

                    </div>

                    {/* Description */}

                    <Section
                        title="Description"
                        icon={<FiFileText />}
                    >
                        {charity.description}
                    </Section>

                    {/* Mission */}

                    <Section
                        title="Mission"
                        icon={<FiTarget />}
                    >
                        {charity.mission || "--"}
                    </Section>

                    {/* Vision */}

                    <Section
                        title="Vision"
                        icon={<FiFlag />}
                    >
                        {charity.vision || "--"}
                    </Section>

                    {/* Financial */}

                    <div className="grid md:grid-cols-2 gap-6 mt-8">

                        <MoneyCard
                            title="Goal Amount"
                            value={charity.goalAmount}
                        />

                        <MoneyCard
                            title="Current Amount"
                            value={charity.currentAmount}
                        />

                    </div>

                    {/* Approval */}

                    <div className="bg-gray-50 rounded-2xl p-6 mt-8">

                        <h3 className="text-xl font-bold mb-5">

                            Approval Details

                        </h3>

                        <div className="grid md:grid-cols-2 gap-6">

                            <InfoCard
                                title="Approved By"
                                value={
                                    charity.approver
                                        ?.name || "--"
                                }
                            />

                            <InfoCard
                                title="Approved At"
                                value={
                                    charity.approvedAt
                                        ? new Date(
                                              charity.approvedAt
                                          ).toLocaleString()
                                        : "--"
                                }
                            />

                            <InfoCard
                                title="Rejected Reason"
                                value={
                                    charity.rejectionReason ||
                                    "--"
                                }
                            />

                        </div>

                    </div>

                    {/* Registration */}

                    <div className="mt-8 flex flex-wrap gap-4">

                        {charity.registrationDocument && (

                            <a
                                href={
                                    charity.registrationDocument
                                }
                                target="_blank"
                                rel="noreferrer"
                                className="px-6 py-3 rounded-xl bg-blue-600 text-white flex items-center gap-2 hover:bg-blue-700 transition"
                            >

                                <FiDownload />

                                Registration Document

                            </a>

                        )}

                        <button
                            onClick={onClose}
                            className="px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200"
                        >

                            Close

                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

const InfoCard = ({
    title,
    value,
    icon,
}) => (

    <div className="bg-gray-50 rounded-2xl p-5">

        <div className="flex items-center gap-2 text-gray-500">

            {icon}

            <span>{title}</span>

        </div>

        <div className="mt-2 font-semibold break-words">

            {value || "--"}

        </div>

    </div>

);

const Section = ({
    title,
    icon,
    children,
}) => (

    <div className="mt-8 bg-white border rounded-2xl p-6">

        <div className="flex items-center gap-3 mb-4">

            <div className="h-10 w-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">

                {icon}

            </div>

            <h3 className="text-xl font-bold">

                {title}

            </h3>

        </div>

        <p className="text-gray-700 leading-8 whitespace-pre-wrap">

            {children || "--"}

        </p>

    </div>

);

const MoneyCard = ({
    title,
    value,
}) => (

    <div className="rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6">

        <div className="flex items-center gap-3">

            <FiDollarSign size={24} />

            <span className="text-lg">

                {title}

            </span>

        </div>

        <h2 className="text-4xl font-bold mt-4">

            ₹
            {Number(value || 0).toLocaleString(
                "en-IN"
            )}

        </h2>

    </div>

);

export default CharityViewModal;