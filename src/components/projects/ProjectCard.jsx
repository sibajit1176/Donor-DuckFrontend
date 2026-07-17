import {
    FiUsers,
    FiArrowRight,
    FiTarget,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project,onDonate,isLoggedIn}) => {
    const navigate = useNavigate();

    const progress = Math.min(
        (
            (Number(project.raisedAmount || 0) /
                Number(project.goalAmount || 1)) *
            100
        ).toFixed(1),
        100
    );

    return (
        <div
            className="
                group
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
                border
                border-gray-100
                hover:-translate-y-1
            "
        >
            {/* Cover */}

            <div className="relative h-44 overflow-hidden">
                <img
                    src={
                        project.coverImage ||
                        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200"
                    }
                    alt={project.title}
                    className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                    "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <span
                    className="
                        absolute
                        top-3
                        left-3
                        px-3
                        py-1
                        rounded-full
                        bg-white/90
                        backdrop-blur
                        text-green-700
                        text-xs
                        font-semibold
                    "
                >
                    {project.category}
                </span>
            </div>

            {/* Body */}

            <div className="p-5">
                {/* Charity */}

                <div
                    onClick={() =>
                        project?.charity?.id &&
                        navigate(`/charityProfile/${project.charity.id}`)
                    }
                    className="
                        flex
                        items-center
                        gap-3
                        cursor-pointer
                        w-fit
                        group/charity
                    "
                >
                    <img
                        src={
                            project?.charity?.logo ||
                            "https://ui-avatars.com/api/?background=16a34a&color=fff&name=Charity"
                        }
                        alt=""
                        className="h-10 w-10 rounded-full object-cover border-2 border-green-100"
                    />

                    <div>
                        <p className="text-[11px] text-gray-500">
                            Organization
                        </p>

                        <h3 className="font-semibold text-sm text-gray-800 group-hover/charity:text-green-600 transition">
                            {project?.charity?.organizationName ||
                                "Unknown Charity"}
                        </h3>
                    </div>
                </div>

                {/* Title */}

                <h2 className="mt-4 text-xl font-bold text-gray-800 line-clamp-1">
                    {project.title}
                </h2>

                {/* Description */}

                <p className="mt-2 text-sm text-gray-500 leading-6 line-clamp-2">
                    {project.description}
                </p>

                {/* Goal */}

                <div className="mt-5">
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">
                            Goal Amount
                        </span>

                        <span className="font-bold text-green-700">
                            ₹{Number(project.goalAmount).toLocaleString()}
                        </span>
                    </div>

                    <div className="h-2.5 rounded-full bg-gray-200 overflow-hidden">
                        <div
                            style={{ width: `${progress}%` }}
                            className="h-full rounded-full bg-gradient-to-r from-green-600 to-emerald-500"
                        />
                    </div>
                </div>

                {/* Footer */}

                <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <FiUsers className="text-green-600" />

                        <span className="font-medium">
                            {project.totalDonors} Donors
                        </span>
                    </div>

                    <button
                        onClick={() => {
                            if(!isLoggedIn){
                                navigate("/login")
                                return
                            }
                            onDonate(project)
                           
                        }}
                        className="
                            relative
                            overflow-hidden
                            inline-flex
                            items-center
                            gap-2
                            h-10
                            px-5
                            rounded-xl
                            bg-gradient-to-r
                            from-green-600
                            via-emerald-500
                            to-green-600
                            text-white
                            text-sm
                            font-semibold
                            shadow-md
                            hover:shadow-lg
                            hover:-translate-y-0.5
                            transition-all
                            duration-300
                            before:absolute
                            before:top-0
                            before:-left-full
                            before:h-full
                            before:w-1/2
                            before:bg-white/20
                            before:skew-x-12
                            before:transition-all
                            before:duration-700
                            hover:before:left-[130%]
                        "
                    >
                        <FiTarget className="relative z-10" />

                        <span className="relative z-10">
                            Donate
                        </span>

                        <FiArrowRight className="relative z-10" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;