import {
    FiX,
    FiSave,
    FiRotateCcw,
    FiFolder,
    FiAlignLeft,
    FiTag,
    FiDollarSign,
    FiCalendar,
} from "react-icons/fi";

const categories = [
    "Education",
    "Healthcare",
    "Food",
    "Environment",
    "Disaster Relief",
    "Women Empowerment",
    "Children",
    "Animal Welfare",
    "Other",
];

const statuses = [
    "DRAFT",
    "ACTIVE",
    "COMPLETED",
    "CANCELLED",
];

const Input = ({
    icon,
    label,
    name,
    value,
    onChange,
    type = "text",
    placeholder = "",
    readOnly = false,
}) => (
    <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
            {label}
        </label>

        <div className="relative">

            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600">

                {icon}

            </span>

            <input
                type={type}
                name={name}
                value={value ?? ""}
                onChange={readOnly ? undefined : onChange}
                readOnly={readOnly}
                placeholder={placeholder}
                className="
                    w-full
                    h-12
                    pl-12
                    pr-4
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white
                    focus:outline-none
                    focus:ring-2
                    focus:ring-green-500
                    focus:border-green-500
                    transition
                "
            />

        </div>

    </div>
);

const EditProjectModal = ({
    isOpen,
    onClose,
    formData,
    handleChange,
    handleSubmit,
    loading,
    handleReset,
}) => {

    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-5">

            <div className="w-full max-w-5xl h-[88vh] bg-gray-50 rounded-[30px] shadow-2xl overflow-hidden flex flex-col">

                {/* HEADER */}

                <div className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 px-8 py-6 flex items-center justify-between">

                    <div className="flex items-center gap-4">

                        <div className="h-16 w-16 rounded-3xl bg-white/20 backdrop-blur flex items-center justify-center">

                            <FiFolder
                                size={30}
                                className="text-white"
                            />

                        </div>

                        <div>

                            <h2 className="text-3xl font-bold text-white">

                                Edit Project

                            </h2>

                            <p className="text-green-100 mt-1">

                                Update your fundraising project details.

                            </p>

                        </div>

                    </div>

                    <button
                        onClick={onClose}
                        className="h-11 w-11 rounded-xl bg-white/20 hover:bg-white/30 transition flex items-center justify-center text-white"
                    >

                        <FiX size={22} />

                    </button>

                </div>

                {/* BODY */}

                <form
                    id="edit-project-form"
                    onSubmit={handleSubmit}
                    className="flex-1 overflow-y-auto scrollbar-hide p-7 space-y-6"
                >

                    {/* Project */}

                    <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">

                        <h3 className="text-xl font-bold text-gray-800 mb-5">

                            Project Information

                        </h3>

                        <div className="grid md:grid-cols-2 gap-5">

                            <Input
                                icon={<FiFolder />}
                                label="Project Title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                            />

                            <div>

                                <label className="block text-sm font-semibold text-gray-700 mb-2">

                                    Category

                                </label>

                                <select
                                    name="category"
                                    value={formData.category ?? ""}
                                    onChange={handleChange}
                                    className="
                                        w-full
                                        h-12
                                        rounded-2xl
                                        border
                                        border-gray-200
                                        px-4
                                        bg-white
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-green-500
                                    "
                                >

                                    <option value="">
                                        Select Category
                                    </option>

                                    {categories.map((item) => (

                                        <option
                                            key={item}
                                            value={item}
                                        >

                                            {item}

                                        </option>

                                    ))}

                                </select>

                            </div>

                        </div>

                    </div>

                    {/* Description */}

                    <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">

                        <h3 className="text-xl font-bold text-gray-800 mb-5">

                            Project Description

                        </h3>

                        <label className="block text-sm font-semibold mb-2">

                            Description

                        </label>

                        <div className="relative">

                            <FiAlignLeft className="absolute top-5 left-4 text-green-600" />

                            <textarea
                                rows={6}
                                name="description"
                                value={formData.description ?? ""}
                                onChange={handleChange}
                                className="
                                    w-full
                                    rounded-2xl
                                    border
                                    border-gray-200
                                    pl-12
                                    pr-4
                                    py-4
                                    resize-none
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-green-500
                                "
                            />

                        </div>

                    </div>

                    {/* Goal */}

                    {/* Fundraising */}

                    <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">

                        <h3 className="text-xl font-bold text-gray-800 mb-5">
                            Fundraising Details
                        </h3>

                        <div className="grid md:grid-cols-2 gap-5">

                            <Input
                                icon={<FiDollarSign />}
                                label="Goal Amount"
                                name="goalAmount"
                                type="number"
                                value={formData.goalAmount}
                                onChange={handleChange}
                            />

                            <div>

                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Status
                                </label>

                                <div className="relative">

                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600">
                                        <FiTag />
                                    </span>

                                    <select
                                        name="status"
                                        value={formData.status ?? ""}
                                        onChange={handleChange}
                                        className="
                        w-full
                        h-12
                        pl-12
                        pr-4
                        rounded-2xl
                        border
                        border-gray-200
                        bg-white
                        focus:outline-none
                        focus:ring-2
                        focus:ring-green-500
                    "
                                    >

                                        {statuses.map((status) => (

                                            <option
                                                key={status}
                                                value={status}
                                            >
                                                {status}
                                            </option>

                                        ))}

                                    </select>

                                </div>

                            </div>

                            <Input
                                icon={<FiCalendar />}
                                label="Start Date"
                                type="date"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                            />

                            <Input
                                icon={<FiCalendar />}
                                label="End Date"
                                type="date"
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleChange}
                            />

                        </div>

                    </div>

                </form>

                {/* FOOTER */}

                <div className="bg-white border-t border-gray-200 px-8 py-5 flex items-center justify-between">

                    <button
                        type="button"
                        onClick={handleReset}
                        className="
                            flex
                            items-center
                            gap-2
                            h-11
                            px-6
                            rounded-xl
                            border
                            border-gray-200
                            hover:bg-gray-100
                            transition
                        "
                    >

                        <FiRotateCcw />

                        Reset

                    </button>

                    <div className="flex gap-3">

                        <button
                            type="button"
                            onClick={onClose}
                            className="
                                h-11
                                px-6
                                rounded-xl
                                border
                                border-gray-200
                                hover:bg-gray-100
                                transition
                            "
                        >

                            Cancel

                        </button>

                        <button
                            form="edit-project-form"
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

                            <FiSave className="relative z-10" />

                            <span className="relative z-10">

                                {loading ? "Updating..." : "Update Project"}

                            </span>

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default EditProjectModal;