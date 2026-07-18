import {
    FiEdit2,
    FiTrash2,
    FiCalendar,
    FiTag,
    FiCamera,
} from "react-icons/fi";

const statusColor = {
    DRAFT: "bg-gray-100 text-gray-700",
    ACTIVE: "bg-green-100 text-green-700",
    COMPLETED: "bg-blue-100 text-blue-700",
    CANCELLED: "bg-red-100 text-red-700",
};

const ProjectHeader = ({
    project,
    onEdit,
    onDelete,
    fileInputRef,
    onCoverImageChange,
    uploadLoading,
}) => {
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">

            <div className="relative h-72">

                <img
                    src={
                        project.coverImage ||
                        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1400"
                    }
                    alt={project.title}
                    className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Upload Button */}
                <button
                    type="button"
                    onClick={() => {
                        console.log("Button clicked");
                        fileInputRef.current?.click();
                    }}
                    disabled={uploadLoading}
                    className="
                        absolute
                        top-5
                        right-5
                        z-50
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-black/70
                        px-4
                        py-2
                        text-sm
                        text-white
                        backdrop-blur
                        hover:bg-black/80
                        transition
                        disabled:opacity-50
                    "
                >
                    <FiCamera size={18} />

                    {uploadLoading ? "Uploading..." : "Change Cover"}
                </button>

                <input
    type="file"
    ref={fileInputRef}
    onChange={(e) => {
        console.log("INPUT CHANGED");
        onCoverImageChange(e);
    }}
/>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-8 flex justify-between items-end">

                    <div>

                        <span
                            className={`inline-flex px-4 py-1 rounded-full text-sm font-semibold ${statusColor[project.status]}`}
                        >
                            {project.status}
                        </span>

                        <h1 className="text-4xl font-bold text-white mt-4">
                            {project.title}
                        </h1>

                        <div className="flex flex-wrap gap-5 mt-4 text-white/90">

                            <div className="flex items-center gap-2">
                                <FiTag />
                                {project.category}
                            </div>

                            <div className="flex items-center gap-2">
                                <FiCalendar />
                                {project.startDate} - {project.endDate}
                            </div>

                        </div>

                    </div>

                    <div className="flex gap-3">

                        <button
                            onClick={onEdit}
                            className="
                                flex
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
                                transition
                            "
                        >
                            <FiEdit2 />
                            Edit Project
                        </button>

                        {project.status === "CANCELLED" && (
                            <button
                                onClick={onDelete}
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    h-11
                                    px-6
                                    rounded-xl
                                    bg-gradient-to-r
                                    from-red-500
                                    via-rose-500
                                    to-red-600
                                    text-white
                                    font-semibold
                                    shadow-lg
                                    hover:shadow-xl
                                    transition
                                "
                            >
                                <FiTrash2 />
                                Delete
                            </button>
                        )}

                    </div>

                </div>

            </div>

        </div>
    );
};

export default ProjectHeader;