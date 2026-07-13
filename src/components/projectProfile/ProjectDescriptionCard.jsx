import {
    FiAlignLeft,
    FiTag,
    FiCalendar,
    FiClock,
    FiCheckCircle,
    FiStar,
} from "react-icons/fi";

const Item = ({ icon, label, value }) => (

    <div className="flex items-start gap-4">

        <div className="h-11 w-11 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
            {icon}
        </div>

        <div>

            <p className="text-sm text-gray-500">
                {label}
            </p>

            <p className="font-semibold text-gray-800 mt-1">
                {value || "-"}
            </p>

        </div>

    </div>

);

const ProjectDescriptionCard = ({ project }) => {

    return (

        <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-7">

            <div className="flex items-center justify-between mb-7">

                <div>

                    <h2 className="text-2xl font-bold text-gray-800">
                        Project Details
                    </h2>

                    <p className="text-gray-500 mt-1">
                        Complete information about this fundraising project.
                    </p>

                </div>

                <div className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm">

                    {project.status}

                </div>

            </div>

            <div>

                <div className="flex items-start gap-4 mb-8">

                    <div className="h-14 w-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">

                        <FiAlignLeft size={24} />

                    </div>

                    <div>

                        <h4 className="font-semibold text-gray-800 mb-2">

                            Description

                        </h4>

                        <p className="leading-7 text-gray-600 whitespace-pre-wrap">

                            {project.description}

                        </p>

                    </div>

                </div>

                <div className="grid md:grid-cols-2 gap-7">

                    <Item
                        icon={<FiTag />}
                        label="Category"
                        value={project.category}
                    />

                    <Item
                        icon={<FiCalendar />}
                        label="Start Date"
                        value={project.startDate}
                    />

                    <Item
                        icon={<FiCalendar />}
                        label="End Date"
                        value={project.endDate}
                    />

                    <Item
                        icon={<FiClock />}
                        label="Created At"
                        value={new Date(project.createdAt).toLocaleDateString()}
                    />

                    <Item
                        icon={<FiCheckCircle />}
                        label="Last Updated"
                        value={new Date(project.updatedAt).toLocaleDateString()}
                    />

                    <Item
                        icon={<FiStar />}
                        label="Featured Project"
                        value={project.isFeatured ? "Yes" : "No"}
                    />

                </div>

            </div>

        </div>

    );

};

export default ProjectDescriptionCard;