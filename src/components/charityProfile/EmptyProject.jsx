import {
    FiFolder,
    FiPlus,
} from "react-icons/fi";

const EmptyProject = ({ onCreate, }) => {

    return (

        <div className="py-20 flex flex-col items-center">

            <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">

                <FiFolder
                    size={36}
                    className="text-green-600"
                />

            </div>

            <h2 className="mt-6 text-2xl font-bold">

                No Projects Yet

            </h2>

            <p className="text-gray-500 mt-2">

                Create your first fundraising project.

            </p>

            <button
                onClick={onCreate}
                className="
        mt-6
        relative
        overflow-hidden
        inline-flex
        items-center
        gap-2
        px-7
        h-12
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

        </div>

    );

};

export default EmptyProject;