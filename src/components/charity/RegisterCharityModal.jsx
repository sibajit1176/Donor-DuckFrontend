import { FiHeart, FiUpload, FiX } from "react-icons/fi";

const RegisterCharityModal = ({
    isOpen,
    onClose,
    formData,
    handleChange,
    handleSubmit,
    loading,
}) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">

            <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl overflow-hidden">

                {/* Header */}

                <div className="relative bg-gradient-to-r from-green-600 to-emerald-500 px-6 py-5">

                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 h-9 w-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition"
                    >
                        <FiX size={18} />
                    </button>

                    <div className="flex items-center gap-4">

                        <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center">

                            <FiHeart
                                size={22}
                                className="text-white"
                            />

                        </div>

                        <div>

                            <h2 className="text-2xl font-bold text-white">
                                Register Charity
                            </h2>

                            <p className="text-sm text-green-100">
                                Create your charity and start receiving donations.
                            </p>

                        </div>

                    </div>

                </div>

                {/* Form */}

                <form
                    onSubmit={handleSubmit}
                    className="p-6 space-y-5"
                >
                    <div className="grid md:grid-cols-2 gap-5">

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Charity Name
                            </label>

                            <input
                                type="text"
                                name="organizationName"
                                value={formData.organizationName}
                                onChange={handleChange}
                                placeholder="Helping Hands Foundation"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Registration Number
                            </label>

                            <input
                                type="text"
                                name="registrationNumber"
                                value={formData.registrationNumber}
                                onChange={handleChange}
                                placeholder="NGO-2026-12345"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                            />
                        </div>

                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Description
                        </label>

                        <textarea
                            rows={4}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Tell us about your organization and the communities you serve..."
                            className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Category
                            </label>

                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                            >
                                <option value="">Select Category</option>
                                <option value="Education">Education</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Food">Food</option>
                                <option value="Environment">Environment</option>
                                <option value="Women Empowerment">Women Empowerment</option>
                                <option value="Child Welfare">Child Welfare</option>
                                <option value="Animal Welfare">Animal Welfare</option>
                                <option value="Disaster Relief">Disaster Relief</option>
                                <option value="Community Development">
                                    Community Development
                                </option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Website
                            </label>

                            <input
                                type="url"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                placeholder="https://example.org"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                            />
                        </div>

                    </div>

                    <div className="rounded-2xl border border-green-200 bg-green-50 p-4">

                        <div className="flex items-center gap-3">

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-600">

                                <FiHeart className="text-white text-xl" />

                            </div>

                            <div>

                                <h3 className="font-semibold text-green-800">
                                    Charity Verification
                                </h3>

                                <p className="text-sm text-green-700 mt-1">
                                    After registration, your charity will be reviewed by the
                                    administrator before it becomes publicly visible and starts
                                    accepting donations.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="flex justify-end gap-3 pt-2">

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 px-7 py-3 font-semibold text-white shadow-md transition hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading ? "Registering..." : "Register Charity"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default RegisterCharityModal;