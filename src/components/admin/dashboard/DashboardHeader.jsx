import {
    FiBell,
    FiSearch,
    FiSettings,
} from "react-icons/fi";

const DashboardHeader = () => {

    const today = new Date().toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

            {/* Left */}

            <div>

                <h1 className="text-4xl font-bold text-gray-800">

                    Welcome Back 👋

                </h1>

                <p className="text-gray-500 mt-2">

                    Here's what's happening with your charity platform today.

                </p>

                <p className="text-sm text-gray-400 mt-1">

                    {today}

                </p>

            </div>

            {/* Right */}

            <div className="flex items-center gap-4">

                {/* Search */}

                {/* <div className="relative">

                    <FiSearch
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                    />

                    <input
                        type="text"
                        placeholder="Search..."
                        className="
                            h-12
                            w-72
                            rounded-xl
                            border
                            border-gray-200
                            bg-white
                            pl-11
                            pr-4
                            outline-none
                            focus:ring-2
                            focus:ring-green-500
                        "
                    />

                </div> */}

                {/* Notification */}

                <button
                    className="
                        h-12
                        w-12
                        rounded-xl
                        bg-white
                        shadow
                        hover:bg-green-600
                        hover:text-white
                        transition
                        flex
                        items-center
                        justify-center
                    "
                >

                    <FiBell size={20} />

                </button>

                {/* Settings */}

                <button
                    className="
                        h-12
                        w-12
                        rounded-xl
                        bg-white
                        shadow
                        hover:bg-green-600
                        hover:text-white
                        transition
                        flex
                        items-center
                        justify-center
                    "
                >

                    <FiSettings size={20} />

                </button>

                {/* Admin */}

                <div
                    className="
                        flex
                        items-center
                        gap-3
                        bg-white
                        shadow
                        rounded-xl
                        px-4
                        py-2
                    "
                >

                    <div
                        className="
                            h-11
                            w-11
                            rounded-full
                            bg-green-600
                            text-white
                            flex
                            items-center
                            justify-center
                            font-bold
                            text-lg
                        "
                    >

                        A

                    </div>

                    <div>

                        <h3 className="font-semibold">

                            Admin

                        </h3>

                        <p className="text-sm text-gray-500">

                            Super Admin

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default DashboardHeader;