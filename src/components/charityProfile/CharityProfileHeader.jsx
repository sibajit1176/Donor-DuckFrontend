import {
    FiEdit2,
    FiGlobe,
    FiMail,
    FiPhone,
    FiMapPin,
    FiCheckCircle,
    FiClock,
} from "react-icons/fi";

import { CgProfile } from "react-icons/cg";

const CharityProfileHeader = ({   
    charity,
    onEdit,
    coverInputRef,
    logoInputRef,
    onCoverImageChange,
    onLogoChange,
    coverLoading,
    logoLoading,
}) => {

    const approved = charity?.approvalStatus === "APPROVED";

    return (

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

            {/* Cover */}

            {/* Cover */}

<div className="relative h-52 bg-gradient-to-r from-green-700 via-emerald-600 to-green-500">

    {charity?.coverImage && (
        <img
            src={charity.coverImage}
            alt="Cover"
            className="h-full w-full object-cover"
        />
    )}

    <div className="absolute inset-0 bg-black/20" />

    <button
        type="button"
        onClick={() => coverInputRef.current?.click()}
        className="
            absolute
            right-5
            top-5
            flex
            items-center
            gap-2
            rounded-xl
            bg-white/90
            px-4
            py-2
            text-sm
            font-semibold
            text-gray-800
            backdrop-blur
            transition
            hover:bg-white
        "
    >
        {coverLoading ? (
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-600 border-t-transparent" />
        ) : (
            <FiEdit2 />
        )}

        Change Cover
    </button>

    <input
        ref={coverInputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={onCoverImageChange}
    />

</div>

            {/* Body */}

            <div className="relative px-8 pb-6">

                {/* Logo */}

                {/* Logo */}

<div className="absolute -top-16 left-8">

    <div className="relative">

        <div className="h-32 w-32 overflow-hidden rounded-3xl border-[6px] border-white bg-white shadow-xl">

            {charity?.logo ? (
                <img
                    src={charity.logo}
                    alt={charity.organizationName}
                    className="h-full w-full object-cover"
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-50">
                    <CgProfile
                        size={72}
                        className="text-green-600"
                    />
                </div>
            )}

        </div>

        <button
            type="button"
            onClick={() => logoInputRef.current?.click()}
            disabled={logoLoading}
            className="
                absolute
                -right-1
                -bottom-1
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border-4
                border-white
                bg-green-600
                text-white
                shadow-lg
                transition
                hover:bg-green-700
                disabled:opacity-70
            "
        >
            {logoLoading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
                <FiEdit2 size={18} />
            )}
        </button>

        <input
            ref={logoInputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={onLogoChange}
        />

    </div>

</div>

                {/* Content */}

                <div className="pt-16 flex flex-col lg:flex-row justify-between lg:items-center gap-6">

                    {/* Left */}

                    <div className="flex-1">

                        <div className="flex flex-wrap items-center gap-3">

                            <h1 className="text-3xl font-bold text-gray-800">

                                {charity?.organizationName}

                            </h1>

                            {approved ? (

                                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">

                                    <FiCheckCircle />

                                    Approved

                                </span>

                            ) : (

                                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">

                                    <FiClock />

                                    {charity?.approvalStatus}

                                </span>

                            )}

                        </div>

                        <p className="text-green-700 font-semibold mt-2">

                            {charity?.category}

                        </p>

                        {/* Contact */}

                        <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-gray-600 text-sm">

                            <div className="flex items-center gap-2">

                                <FiMail className="text-green-600" />

                                {charity?.email || "--"}

                            </div>

                            <div className="flex items-center gap-2">

                                <FiPhone className="text-green-600" />

                                {charity?.phone || "--"}

                            </div>

                            <div className="flex items-center gap-2">

                                <FiGlobe className="text-green-600" />

                                {charity?.website || "--"}

                            </div>

                            <div className="flex items-center gap-2">

                                <FiMapPin className="text-green-600" />

                                {charity?.city || "--"}, {charity?.country || "--"}

                            </div>

                        </div>

                    </div>

                    {/* Right */}

                    <button
                        onClick={onEdit}
                        className="
        relative
        overflow-hidden
        h-11
        px-6
        rounded-xl
        bg-gradient-to-r
        from-green-600
        via-emerald-500
        to-green-600
        text-white
        font-semibold
        flex
        items-center
        gap-2
        shadow-lg
        hover:shadow-xl
        transition-all
        duration-300
        hover:scale-[1.02]
        before:absolute
        before:top-0
        before:-left-full
        before:h-full
        before:w-1/2
        before:bg-white/20
        before:skew-x-12
        hover:before:left-[130%]
        before:transition-all
        before:duration-700
    "
                    >
                        <FiEdit2 size={18} />
                        <span className="relative z-10">Edit Profile</span>
                    </button>

                </div>

            </div>

        </div>

    );

};

export default CharityProfileHeader;