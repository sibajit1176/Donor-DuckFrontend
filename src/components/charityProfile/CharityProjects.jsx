import { FiPlus } from "react-icons/fi";
import ProjectCard from "./ProjectCard";
import EmptyProject from "./EmptyProject";

const CharityProjects = ({
    projects = [],
    approvalStatus,
    onCreateProject,
}) => {

    return (
        <div className="bg-white rounded-3xl shadow-lg p-6 mt-8">

            <div className="flex items-center justify-between mb-6">

                <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                        Charity Projects
                    </h2>

                    <p className="text-gray-500 text-sm mt-1">
                        Manage all projects created by your charity.
                    </p>
                </div>

                {projects?.length != 0 && (
                    <button
                        onClick={onCreateProject}
                        className="
        relative
        overflow-hidden
        inline-flex
        items-center
        gap-2
        h-11
        px-6
        rounded-xl
        bg-gradient-to-r
        from-green-600
        via-emerald-500
        to-green-600
        text-white
        font-semibold
        shadow-lg
        hover:shadow-xl
        hover:from-green-700
        hover:via-emerald-600
        hover:to-green-700
        transition-all
        duration-300
        hover:-translate-y-0.5
        active:scale-95
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
                        <FiPlus
                            size={18}
                            className="relative z-10"
                        />

                        <span className="relative z-10">
                            Create Project
                        </span>
                    </button>
                )}

            </div>

            {projects.length === 0 ? (
                <EmptyProject onCreate={onCreateProject} />
            ) : (
                    <div
                        className="
        flex
        gap-6
        overflow-x-auto
        overflow-y-hidden
        pb-3
        scrollbar-thin
        scrollbar-thumb-green-400
        scrollbar-track-green-100
    "
                    >
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="flex-shrink-0 w-[360px]"
                            >
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
            )}

        </div>
    );
};

export default CharityProjects;