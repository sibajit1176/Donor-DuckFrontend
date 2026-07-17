import {
    FiFolder,
    FiSearch,
} from "react-icons/fi";

import CharityProjectCard from "./CharityProjectCard";

const CharityProjects = ({
    projects = [],
    onDonate,
}) => {

    return (

        <section className="mt-10">

            {/* Header */}

            <div className="mb-8 flex items-center justify-between">

                <div>

                    <h2 className="text-3xl font-bold text-gray-800">

                        Active Projects

                    </h2>

                    <p className="mt-2 text-gray-500">

                        Support ongoing projects and make a real impact.

                    </p>

                </div>

                <div
                    className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-green-100
                        text-green-600
                    "
                >

                    <FiFolder size={28} />

                </div>

            </div>

            {/* Empty State */}

            {projects.length === 0 ? (

                <div
                    className="
                        rounded-3xl
                        border
                        border-dashed
                        border-gray-300
                        bg-white
                        py-20
                        text-center
                        shadow-sm
                    "
                >

                    <div
                        className="
                            mx-auto
                            flex
                            h-20
                            w-20
                            items-center
                            justify-center
                            rounded-full
                            bg-green-100
                            text-green-600
                        "
                    >

                        <FiSearch size={34} />

                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-gray-800">

                        No Projects Available

                    </h3>

                    <p className="mt-3 text-gray-500">

                        This charity hasn't created any fundraising
                        projects yet.

                    </p>

                </div>

            ) : (

                <>
                    {/* Count */}

                    <div className="mb-6">

                        <span
                            className="
                                inline-flex
                                items-center
                                rounded-full
                                bg-green-100
                                px-4
                                py-2
                                text-sm
                                font-semibold
                                text-green-700
                            "
                        >

                            {projects.length} Active
                            {" "}
                            {projects.length === 1
                                ? "Project"
                                : "Projects"}

                        </span>

                    </div>

                    {/* Projects Grid */}

                    <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">

                        {projects.map((project) => (

                            <CharityProjectCard
                                key={project.id}
                                project={project}
                                onDonate={onDonate}
                            />

                        ))}

                    </div>

                </>

            )}

        </section>

    );

};

export default CharityProjects;