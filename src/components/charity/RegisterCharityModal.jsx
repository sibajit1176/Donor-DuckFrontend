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
                    className="p-6 space-y-4"
                >

                    <div className="grid md:grid-cols-2 gap-4">

                        <div>

                            <label className="text-sm font-medium text-gray-700">
                                Charity Name
                            </label>

                            <input
                                type="text"
                                name="organizationName"
                                value={formData.organizationName}
                                onChange={handleChange}
                                placeholder="Helping Hands Foundation"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                            />

                        </div>

                        <div>

                            <label className="text-sm font-medium text-gray-700">
                                Registration No.
                            </label>

                            <input
                                type="text"
                                name="registrationNumber"
                                value={formData.registrationNumber}
                                onChange={handleChange}
                                placeholder="NGO-123456"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                            />

                        </div>

                    </div>

                    <div>

                        <label className="text-sm font-medium text-gray-700">
                            Description
                        </label>

                        <textarea
                            rows={3}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Briefly describe your charity..."
                            className="mt-1 w-full resize-none rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                        />

                    </div>

                    <div className="grid md:grid-cols-2 gap-4">

                        <div>

                            <label className="text-sm font-medium text-gray-700">
                                Category
                            </label>

                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                            >
                                <option value="">Select Category</option>
                                <option value="Education">Education</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Food">Food</option>
                                <option value="Environment">Environment</option>
                                <option value="Animal Welfare">Animal Welfare</option>
                                <option value="Disaster Relief">Disaster Relief</option>
                            </select>

                        </div>

                        <div>

                            <label className="text-sm font-medium text-gray-700">
                                Website
                            </label>

                            <input
                                type="url"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                placeholder="https://example.org"
                                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                            />

                        </div>

                    </div>

                    {/* Upload */}

                    <div>

                        <label className="text-sm font-medium text-gray-700">
                            Charity Logo
                        </label>

                        <label className="mt-2 flex h-28 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-green-300 hover:bg-green-50 transition">

                            <FiUpload
                                size={24}
                                className="text-green-600"
                            />

                            <p className="mt-2 text-sm text-gray-600">

                                {formData.logo
                                    ? formData.logo.name
                                    : "Click to upload logo"}

                            </p>

                            <input
                                hidden
                                type="file"
                                name="logo"
                                accept="image/*"
                                onChange={handleChange}
                            />

                        </label>

                    </div>

                    {/* Footer */}

                    <div className="flex justify-end gap-3 pt-2">

                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg border border-gray-300 px-5 py-2.5 font-medium hover:bg-gray-100 transition"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-lg bg-green-600 px-6 py-2.5 font-medium text-white hover:bg-green-700 disabled:opacity-60 transition"
                        >
                            {loading
                                ? "Registering..."
                                : "Register Charity"}
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default RegisterCharityModal;