import {
    FiX,
    FiSave,
    FiRotateCcw,
    FiFolderPlus,
    FiFileText,
    FiDollarSign,
    FiCalendar,
    FiGrid,
} from "react-icons/fi";

const categories = [
    "Education",
    "Healthcare",
    "Food",
    "Environment",
    "Animal Welfare",
    "Women Empowerment",
    "Disaster Relief",
    "Children",
    "Other",
];

const Input = ({
    label,
    name,
    value,
    onChange,
    icon,
    type = "text",
    placeholder = "",
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
                onChange={onChange}
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

const CreateProjectModal = ({
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

                {/* Header */}

<div className="bg-gradient-to-r from-green-600 to-emerald-500 px-8 py-6 flex items-center justify-between">

    <div className="flex items-center gap-4">

        <div className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">

            <FiFolderPlus
                size={28}
                className="text-white"
            />

        </div>

        <div>

            <h2 className="text-2xl font-bold text-white">
                Create New Project
            </h2>

            <p className="text-green-100 mt-1">
                Launch a new fundraising campaign for your charity.
            </p>

        </div>

    </div>

    <button
        type="button"
        onClick={onClose}
        className="h-11 w-11 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-white transition flex items-center justify-center"
    >
        <FiX size={22} />
    </button>

</div>

                {/* Body */}

                <form
                    id="create-project-form"
                    onSubmit={handleSubmit}
                    className="flex-1 overflow-y-auto scrollbar-hide p-7 space-y-6"
                >

                    {/* Basic Information */}

                    <div className="bg-white rounded-3xl border border-gray-100 p-6">

                        <h3 className="text-lg font-bold text-gray-800 mb-6">
                            Project Information
                        </h3>

                        <div className="space-y-5">

                            <Input
                                icon={<FiFolderPlus />}
                                label="Project Title"
                                name="title"
                                value={formData?.title}
                                onChange={handleChange}
                                placeholder="Enter project title"
                            />

                            <div>

                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Description
                                </label>

                                <div className="relative">

                                    <span className="absolute left-4 top-5 text-green-600">
                                        <FiFileText />
                                    </span>

                                    <textarea
                                        rows={5}
                                        name="description"
                                        value={formData?.description ?? ""}
                                        onChange={handleChange}
                                        placeholder="Write project description..."
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

                        </div>

                    </div>

                    {/* Details */}

                    <div className="bg-white rounded-3xl border border-gray-100 p-6">

                        <h3 className="text-lg font-bold text-gray-800 mb-6">
                            Campaign Details
                        </h3>

                        <div className="grid md:grid-cols-2 gap-5">

                            <div>

                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Category
                                </label>

                                <div className="relative">

                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600">
                                        <FiGrid />
                                    </span>

                                    <select
                                        name="category"
                                        value={formData?.category ?? ""}
                                        onChange={handleChange}
                                        className="
                                            w-full
                                            h-12
                                            rounded-2xl
                                            border
                                            border-gray-200
                                            pl-12
                                            pr-4
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

                            <Input
                                icon={<FiDollarSign />}
                                label="Goal Amount"
                                type="number"
                                name="goalAmount"
                                value={formData?.goalAmount}
                                onChange={handleChange}
                                placeholder="50000"
                            />

                            <Input
                                icon={<FiCalendar />}
                                label="Start Date"
                                type="date"
                                name="startDate"
                                value={formData?.startDate}
                                onChange={handleChange}
                            />

                            <Input
                                icon={<FiCalendar />}
                                label="End Date"
                                type="date"
                                name="endDate"
                                value={formData?.endDate}
                                onChange={handleChange}
                            />

                        </div>

                    </div>

                </form>

                {/* Footer */}

                <div className="bg-white border-t border-gray-200 px-8 py-5 flex items-center justify-between">

                    <button
                        type="button"
                        onClick={handleReset}
                        className="h-11 px-6 rounded-xl border border-gray-200 hover:bg-gray-100 transition flex items-center gap-2"
                    >
                        <FiRotateCcw />
                        Reset
                    </button>

                    <div className="flex gap-3">

                        <button
                            type="button"
                            onClick={onClose}
                            className="h-11 px-6 rounded-xl border border-gray-200 hover:bg-gray-100 transition"
                        >
                            Cancel
                        </button>

                        <button
                            form="create-project-form"
                            disabled={loading}
                            className="
                                h-11
                                px-8
                                rounded-xl
                                bg-gradient-to-r
                                from-green-600
                                to-emerald-500
                                hover:from-green-700
                                hover:to-emerald-600
                                text-white
                                flex
                                items-center
                                gap-2
                                transition
                                disabled:opacity-60
                            "
                        >
                            <FiSave />

                            {loading
                                ? "Creating..."
                                : "Create Project"}
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default CreateProjectModal;