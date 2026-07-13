import {
    FiAlertTriangle,
    FiTrash2,
    FiX,
} from "react-icons/fi";

const DeleteProjectDialog = ({
    isOpen,
    onClose,
    onDelete,
    loading,
    projectTitle,
}) => {

    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-5">

            <div className="w-full max-w-md rounded-[28px] overflow-hidden bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-300">

                {/* Header */}

                <div className="relative bg-gradient-to-r from-red-500 via-rose-500 to-red-600 px-8 py-7">

                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 h-10 w-10 rounded-xl bg-white/20 hover:bg-white/30 transition flex items-center justify-center text-white"
                    >

                        <FiX size={20} />

                    </button>

                    <div className="flex flex-col items-center text-center">

                        <div className="h-20 w-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur">

                            <FiAlertTriangle
                                size={42}
                                className="text-white"
                            />

                        </div>

                        <h2 className="mt-5 text-3xl font-bold text-white">

                            Delete Project

                        </h2>

                        <p className="mt-2 text-red-100">

                            This action cannot be undone.

                        </p>

                    </div>

                </div>

                {/* Body */}

                <div className="px-8 py-8">

                    <div className="rounded-2xl border border-red-100 bg-red-50 p-5">

                        <p className="text-gray-700 leading-7">

                            Are you sure you want to permanently delete

                            <span className="font-bold text-red-600">

                                {" "}
                                {projectTitle || "this project"}

                            </span>

                            ?

                        </p>

                        <p className="mt-4 text-sm text-gray-500">

                            All donations, project information, progress, and
                            related records associated with this project may be
                            permanently removed.

                        </p>

                    </div>

                </div>

                {/* Footer */}

                <div className="border-t border-gray-100 px-8 py-5 flex items-center justify-end gap-4 bg-gray-50">

                    <button
                        onClick={onClose}
                        className="
                            h-11
                            px-6
                            rounded-xl
                            border
                            border-gray-300
                            bg-white
                            font-medium
                            hover:bg-gray-100
                            transition
                        "
                    >

                        Cancel

                    </button>

                    <button
                        onClick={onDelete}
                        disabled={loading}
                        className="
                            relative
                            overflow-hidden
                            inline-flex
                            items-center
                            gap-2
                            h-11
                            px-7
                            rounded-xl
                            bg-gradient-to-r
                            from-red-500
                            via-rose-500
                            to-red-600
                            text-white
                            font-semibold
                            shadow-lg
                            hover:shadow-xl
                            hover:from-red-600
                            hover:via-rose-600
                            hover:to-red-700
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
                            disabled:opacity-60
                            disabled:pointer-events-none
                        "
                    >

                        <FiTrash2 className="relative z-10" />

                        <span className="relative z-10">

                            {loading ? "Deleting..." : "Delete Project"}

                        </span>

                    </button>

                </div>

            </div>

        </div>

    );

};

export default DeleteProjectDialog;