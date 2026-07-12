import {
    FiSave,
    FiX,
    FiRotateCcw,
    FiFileText,
    FiTarget,
    FiGlobe,
    FiMail,
    FiPhone,
    FiMapPin,
    FiHome,
    FiFlag,
    FiDollarSign,
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
    icon,
    label,
    name,
    value,
    onChange,
    disabled = false,
    readOnly = false,
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
                onChange={readOnly || disabled ? undefined : onChange}
                readOnly={readOnly}
                disabled={disabled}
                placeholder={placeholder}
                className={`
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
                    transition
                    ${disabled || readOnly
                        ? "bg-gray-100 cursor-not-allowed"
                        : ""
                    }
                `}
            />

        </div>

    </div>
);
const EditCharityModal = ({
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

            <div className="w-full max-w-5xl h-[88vh] bg-gray-50 rounded-[28px] shadow-2xl overflow-hidden flex flex-col">

                {/* HEADER */}

                <div className="bg-gradient-to-r from-green-600 to-emerald-500 px-8 py-5 flex justify-between items-center">

                    <div className="flex items-center gap-4">

                        <div className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">

                            <FiHome
                                size={28}
                                className="text-white"
                            />

                        </div>

                        <div>

                            <h2 className="text-2xl font-bold text-white">
                                Edit Charity Profile
                            </h2>

                            <p className="text-green-100 text-sm mt-1">
                                Update your organization information.
                            </p>

                        </div>

                    </div>

                    <button
                        onClick={onClose}
                        className="h-11 w-11 rounded-xl bg-white/20 hover:bg-white/30 text-white transition flex items-center justify-center"
                    >
                        <FiX size={22} />
                    </button>

                </div>

                {/* FORM */}

                <form
                    id="edit-charity-form"
                    onSubmit={handleSubmit}
                    className="flex-1 overflow-y-auto scrollbar-hide p-7 space-y-6"
                >

                    {/* Organization */}

                    <div className="bg-white rounded-3xl border border-gray-100 p-6">

                        <h3 className="font-bold text-gray-800 mb-5">
                            Organization Information
                        </h3>

                        <div className="grid md:grid-cols-2 gap-5">

                            <Input
                                icon={<FiHome />}
                                label="Organization Name"
                                name="organizationName"
                                value={formData.organizationName}
                                onChange={handleChange}
                            />

                            <Input
                                icon={<FiFileText />}
                                label="Registration Number"
                                value={formData.registrationNumber}
                                readOnly
                            />

                            <div>

                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Category
                                </label>

                                <select
                                    name="category"
                                    value={formData.category || ""}
                                    onChange={handleChange}
                                    className="w-full h-12 rounded-2xl border border-gray-200 px-4 focus:ring-2 focus:ring-green-500 outline-none"
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

                            <Input
                                icon={<FiDollarSign />}
                                label="Goal Amount"
                                name="goalAmount"
                                type="number"
                                value={formData.goalAmount}
                                onChange={handleChange}
                            />

                        </div>

                    </div>

                    {/* About */}

                    <div className="bg-white rounded-3xl border border-gray-100 p-6">

                        <h3 className="font-bold text-gray-800 mb-5">
                            About Organization
                        </h3>

                        <div className="space-y-5">

                            <div>

                                <label className="block text-sm font-semibold mb-2">
                                    Description
                                </label>

                                <textarea
                                    rows={4}
                                    name="description"
                                    value={formData.description || ""}
                                    onChange={handleChange}
                                    className="w-full rounded-2xl border border-gray-200 p-4 resize-none focus:ring-2 focus:ring-green-500 outline-none"
                                />

                            </div>

                            <div className="grid md:grid-cols-2 gap-5">

                                <div>

                                    <label className="block text-sm font-semibold mb-2">
                                        Mission
                                    </label>

                                    <textarea
                                        rows={4}
                                        name="mission"
                                        value={formData.mission || ""}
                                        onChange={handleChange}
                                        className="w-full rounded-2xl border border-gray-200 p-4 resize-none focus:ring-2 focus:ring-green-500 outline-none"
                                    />

                                </div>

                                <div>

                                    <label className="block text-sm font-semibold mb-2">
                                        Vision
                                    </label>

                                    <textarea
                                        rows={4}
                                        name="vision"
                                        value={formData.vision || ""}
                                        onChange={handleChange}
                                        className="w-full rounded-2xl border border-gray-200 p-4 resize-none focus:ring-2 focus:ring-green-500 outline-none"
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Contact */}

                    <div className="bg-white rounded-3xl border border-gray-100 p-6">

                        <h3 className="font-bold text-gray-800 mb-5">
                            Contact Information
                        </h3>

                        <div className="grid md:grid-cols-3 gap-5">

                            <Input
                                icon={<FiGlobe />}
                                label="Website"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                            />

                            <Input
                                icon={<FiMail />}
                                label="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <Input
                                icon={<FiPhone />}
                                label="Phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />

                        </div>

                    </div>

                    {/* Address */}

                    <div className="bg-white rounded-3xl border border-gray-100 p-6">

                        <h3 className="font-bold text-gray-800 mb-5">
                            Address
                        </h3>

                        <div className="space-y-5">

                            <Input
                                icon={<FiHome />}
                                label="Address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                            />

                            <div className="grid md:grid-cols-3 gap-5">

                                <Input
                                    icon={<FiMapPin />}
                                    label="City"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                />

                                <Input
                                    icon={<FiMapPin />}
                                    label="State"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                />

                                <Input
                                    icon={<FiFlag />}
                                    label="Country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                    </div>

                </form>

                {/* FOOTER */}

                <div className="bg-white border-t border-gray-200 px-8 py-5 flex justify-between items-center">

                    <button
                        type="button"
                        onClick={handleReset}
                        className="flex items-center gap-2 px-6 h-11 rounded-xl border border-gray-200 hover:bg-gray-100 transition"
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
                            form="edit-charity-form"
                            disabled={loading}
                            className="h-11 px-8 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white flex items-center gap-2 transition disabled:opacity-60"
                        >

                            <FiSave />

                            {loading ? "Saving..." : "Save Changes"}

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default EditCharityModal;