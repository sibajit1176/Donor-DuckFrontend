import {
    FiX,
    FiHeart,
    FiDollarSign,
    FiUser,
    FiFolder,
    FiMessageCircle,
} from "react-icons/fi";

const Input = ({
    icon,
    label,
    value,
    name,
    onChange,
    readOnly = false,
    placeholder = "",
    type = "text",
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
                    h-11
                    pl-12
                    pr-4
                    rounded-2xl
                    border
                    border-gray-200
                    bg-gray-50
                    focus:bg-white
                    focus:ring-2
                    focus:ring-green-500
                    focus:outline-none
                    transition
                "
            />

        </div>

    </div>
);

const DonationModal = ({
    isOpen,
    onClose,
    formData,
    handleChange,
    handleSubmit,
    loading,
}) => {

    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-5">

            <div className="w-full max-w-3xl max-h-[75vh] bg-white rounded-[30px] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300">

                {/* Header */}

                <div className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 px-8 py-5 flex items-center justify-between">

                    <div className="flex items-center gap-4">

                        <div className="h-14 w-14 rounded-2xl bg-white/20 flex items-center justify-center">

                            <FiHeart
                                size={28}
                                className="text-white"
                            />

                        </div>

                        <div>

                            <h2 className="text-2xl font-bold text-white">

                                Donate to this Project

                            </h2>

                            <p className="text-green-100 text-sm mt-1">

                                Every contribution creates a meaningful impact ❤️

                            </p>

                        </div>

                    </div>

                    <button
                        onClick={onClose}
                        className="
                            h-11
                            w-11
                            rounded-xl
                            bg-white/20
                            hover:bg-white/30
                            transition
                            flex
                            items-center
                            justify-center
                            text-white
                        "
                    >

                        <FiX size={22} />

                    </button>

                </div>

                {/* Body */}

                <form
                    onSubmit={handleSubmit}
                    className="flex-1 overflow-y-auto scrollbar-hide p-6 space-y-5"
                >

                    {/* Read Only Fields */}

                    <div className="grid md:grid-cols-2 gap-5">

                        <Input
                            icon={<FiUser />}
                            label="Organization"
                            value={formData.organizationName}
                            readOnly
                        />

                        <Input
                            icon={<FiFolder />}
                            label="Project"
                            value={formData.projectTitle}
                            readOnly
                        />

                    </div>

                    {/* Donation */}

                    <div className="grid md:grid-cols-2 gap-5">

                        <Input
                            icon={<FiDollarSign />}
                            label="Donation Amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            type="number"
                            placeholder="₹ Enter Amount"
                        />

                        <div>

                            <label className="block text-sm font-semibold text-gray-700 mb-2">

                                Message (Optional)

                            </label>

                            <div className="relative">

                                <FiMessageCircle className="absolute top-4 left-4 text-green-600" />

                                <textarea
                                    rows={3}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write a message..."
                                    className="
                                        w-full
                                        rounded-2xl
                                        border
                                        border-gray-200
                                        bg-gray-50
                                        focus:bg-white
                                        pl-12
                                        pr-4
                                        py-3
                                        resize-none
                                        focus:ring-2
                                        focus:ring-green-500
                                        focus:outline-none
                                        transition
                                    "
                                />

                            </div>

                        </div>

                    </div>

                    {/* Summary */}

                    <div className="rounded-3xl bg-gradient-to-r from-green-50 via-white to-emerald-50 border border-green-100 p-5">

                        <div className="flex items-center gap-4">

                            <div className="h-14 w-14 rounded-2xl bg-green-100 flex items-center justify-center">

                                <FiHeart
                                    size={24}
                                    className="text-green-600"
                                />

                            </div>

                            <div>

                                <h3 className="font-bold text-lg text-gray-800">

                                    Your Donation Matters ❤️

                                </h3>

                                <p className="text-sm text-gray-600 mt-1 leading-6">

                                    Your generosity directly supports this charity project.
                                    Every rupee contributes to creating a better future for
                                    those in need.

                                </p>

                            </div>

                        </div>

                    </div>

                </form>

                {/* Footer */}

                <div className="border-t border-gray-100 bg-white px-6 py-4 flex items-center justify-end gap-3">

                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            h-11
                            px-6
                            rounded-xl
                            border
                            border-gray-200
                            font-medium
                            hover:bg-gray-100
                            transition
                        "
                    >

                        Cancel

                    </button>

                    <button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={loading}
                        className="
                            relative
                            overflow-hidden
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            h-11
                            min-w-[190px]
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
                            disabled:opacity-60
                            disabled:cursor-not-allowed
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

                        <FiHeart className="relative z-10" />

                        <span className="relative z-10">

                            {loading
                                ? "Processing..."
                                : "Proceed to Pay"}

                        </span>

                    </button>

                </div>

            </div>

        </div>

    );

};

export default DonationModal;