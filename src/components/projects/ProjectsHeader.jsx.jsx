import { FiHeart, FiTrendingUp } from "react-icons/fi";

const ProjectsHeader = ({ totalProjects = 0 }) => {
    return (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 shadow-xl">

            {/* Background Decoration */}

            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative px-8 py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                <div>

                    <div className="flex items-center gap-4">

                        <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">

                            <FiHeart
                                size={30}
                                className="text-white"
                            />

                        </div>

                        <div>

                            <h1 className="text-4xl font-bold text-white">
                                Charity Projects
                            </h1>

                            <p className="text-green-100 mt-2 text-lg">
                                Support verified charities and make a real impact.
                            </p>

                        </div>

                    </div>

                </div>

                <div className="flex gap-5">

                    <div className="bg-white/15 backdrop-blur rounded-2xl px-6 py-5 min-w-[170px]">

                        <p className="text-green-100 text-sm">
                            Available Projects
                        </p>

                        <h2 className="text-3xl font-bold text-white mt-1">
                            {totalProjects}
                        </h2>

                    </div>

                    <div className="bg-white/15 backdrop-blur rounded-2xl px-6 py-5 min-w-[170px]">

                        <div className="flex items-center gap-2 text-white">

                            <FiTrendingUp />

                            <span className="font-semibold">
                                Donate Today
                            </span>

                        </div>

                        <p className="text-green-100 text-sm mt-2">
                            Every donation changes someone's future.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ProjectsHeader;