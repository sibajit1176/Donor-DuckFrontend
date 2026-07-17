import {
    FiTarget,
    FiUsers,
    FiCalendar,
    FiArrowRight,
} from "react-icons/fi";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CharityProjectCard = ({
    project,
    onDonate,
}) => {

    const {isLoggedIn}=useAuth()
    const navigate=useNavigate()

    const percentage = Math.min(
        Math.round(
            (project.raisedAmount / project.targetAmount) * 100
        ) || 0,
        100
    );

    const daysLeft = project.endDate
        ? Math.max(
              0,
              Math.ceil(
                  (new Date(project.endDate) - new Date()) /
                      (1000 * 60 * 60 * 24)
              )
          )
        : null;

    return (

        <div
            className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-gray-100
                bg-white
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
            "
        >

            {/* Image */}

            <div className="relative overflow-hidden">

                <img
                    src={
                        project.image ||
                        "https://placehold.co/700x450?text=Project"
                    }
                    alt={project.title}
                    className="
                        h-44
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                    "
                />

                <div
                    className="
                        absolute
                        right-3
                        top-3
                        rounded-full
                        bg-green-600
                        px-3
                        py-1.5
                        text-xs
                        font-semibold
                        text-white
                    "
                >

                    {percentage}% Funded

                </div>

            </div>

            {/* Body */}

            <div className="p-5">

                <h3 className="text-xl font-bold text-gray-800 line-clamp-1">

                    {project.title}

                </h3>

                <p
                    className="
                        mt-3
                        line-clamp-2
                        text-sm
                        leading-6
                        text-gray-600
                    "
                >

                    {project.description}

                </p>

                {/* Progress */}

                <div className="mt-5">

                    <div className="mb-2 flex items-center justify-between">

                        <span className="text-sm font-medium text-gray-500">

                            Progress

                        </span>

                        <span className="text-sm font-bold text-green-600">

                            {percentage}%

                        </span>

                    </div>

                    <div className="h-2 rounded-full bg-gray-200">

                        <div
                            style={{
                                width: `${percentage}%`,
                            }}
                            className="
                                h-full
                                rounded-full
                                bg-gradient-to-r
                                from-green-500
                                to-emerald-600
                            "
                        />

                    </div>

                </div>

                {/* Amount */}

                <div className="mt-5 grid grid-cols-2 gap-3">

                    <div className="rounded-2xl bg-green-50 p-3">

                        <p className="text-xs text-gray-500">

                            Raised

                        </p>

                        <h4 className="mt-1 text-lg font-bold text-green-700">

                            ₹
                            {Number(
                                project.raisedAmount || 0
                            ).toLocaleString("en-IN")}

                        </h4>

                    </div>

                    <div className="rounded-2xl bg-blue-50 p-3">

                        <p className="text-xs text-gray-500">

                            Goal

                        </p>

                        <h4 className="mt-1 text-lg font-bold text-blue-700">

                            ₹
                            {Number(
                                project.targetAmount || 0
                            ).toLocaleString("en-IN")}

                        </h4>

                    </div>

                </div>
                                {/* Project Info */}

                <div className="mt-5 space-y-3">

                    <div className="flex items-center justify-between text-sm">

                        <div className="flex items-center gap-2 text-gray-600">

                            <FiUsers className="text-green-600" />

                            <span>Donors</span>

                        </div>

                        <span className="font-semibold text-gray-800">

                            {project.totalDonors || 0}

                        </span>

                    </div>

                    {daysLeft !== null && (

                        <div className="flex items-center justify-between text-sm">

                            <div className="flex items-center gap-2 text-gray-600">

                                <FiCalendar className="text-orange-500" />

                                <span>Days Left</span>

                            </div>

                            <span
                                className={`
                                    rounded-full
                                    px-3
                                    py-1
                                    text-xs
                                    font-semibold
                                    ${
                                        daysLeft <= 7
                                            ? "bg-red-100 text-red-600"
                                            : "bg-amber-100 text-amber-700"
                                    }
                                `}
                            >

                                {daysLeft} Days

                            </span>

                        </div>

                    )}

                    <div className="flex items-center justify-between text-sm">

                        <div className="flex items-center gap-2 text-gray-600">

                            <FiTarget className="text-blue-600" />

                            <span>Target</span>

                        </div>

                        <span className="font-semibold text-gray-800">

                            ₹
                            {Number(
                                project.targetAmount || 0
                            ).toLocaleString("en-IN")}

                        </span>

                    </div>

                </div>

                {/* Donate Button */}

                <button
                    onClick={() => {
                            if(!isLoggedIn){
                                navigate("/login")
                                return
                            }
                            onDonate(project)
                           
                        }}
                    className="
                        mt-6
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-2xl
                        bg-gradient-to-r
                        from-green-600
                        to-emerald-600
                        py-3.5
                        text-sm
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:from-green-700
                        hover:to-emerald-700
                        hover:shadow-lg
                    "
                >

                    Donate Now

                    <FiArrowRight
                        className="
                            transition-transform
                            group-hover:translate-x-1
                        "
                    />

                </button>

            </div>

        </div>

    );

};

export default CharityProjectCard;