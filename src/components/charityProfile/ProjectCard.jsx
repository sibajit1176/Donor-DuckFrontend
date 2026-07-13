import {
    FiCalendar,
    FiTarget,
    FiArrowRight,
} from "react-icons/fi";

import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {

    const percentage =
        (project.currentAmount / project.goalAmount) * 100;

    return (

        <div className="rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300 bg-white">

            <img
                src={
                    project.coverImage ||
                    "https://placehold.co/600x350"
                }
                alt={project.projectName}
                className="h-44 w-full object-cover"
            />

            <div className="p-5">

                <h3 className="font-bold text-xl text-gray-800">

                    {project.projectName}

                </h3>

                <p className="text-gray-500 text-sm mt-2 line-clamp-3">

                    {project.description}

                </p>

                <div className="mt-5">

                    <div className="flex justify-between text-sm">

                        <span className="font-medium">

                            ₹ {project.currentAmount}

                        </span>

                        <span>

                            ₹ {project.goalAmount}

                        </span>

                    </div>

                    <div className="mt-2 h-2 bg-gray-200 rounded-full">

                        <div
                            style={{
                                width: `${percentage}%`,
                            }}
                            className="h-full rounded-full bg-green-600"
                        />

                    </div>

                </div>

                <div className="mt-5 flex justify-between text-sm text-gray-500">

                    <div className="flex items-center gap-2">

                        <FiCalendar />

                        {new Date(
                            project.createdAt
                        ).toLocaleDateString()}

                    </div>

                    <div className="flex items-center gap-2">

                        <FiTarget />

                        {Math.round(percentage)}%

                    </div>

                </div>

                <Link
                    to={`/projectDetails/${project.id}`}
                    className="mt-5 flex items-center justify-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 py-3 rounded-xl font-medium transition"
                >

                    View Project

                    <FiArrowRight />

                </Link>

            </div>

        </div>

    );

};

export default ProjectCard;