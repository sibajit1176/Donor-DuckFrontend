import React from "react";
import { motion } from "framer-motion";
import {
    FiArrowRight,
    FiHeart,
    FiShield,
    FiUsers,
    FiTarget,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const stats = [
    {
        title: "Verified Charities",
        value: "350+",
        icon: FiShield,
    },
    {
        title: "Active Donors",
        value: "25K+",
        icon: FiUsers,
    },
    {
        title: "Funds Raised",
        value: "₹4.8 Cr+",
        icon: FiHeart,
    },
    {
        title: "Campaigns",
        value: "950+",
        icon: FiTarget,
    },
];

const Home = () => {

    const navigation=useNavigate()

    return (

        <div className="bg-slate-50 h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide">

            {/* ================= HERO ================= */}

            <section className="relative min-h-[88vh] overflow-hidden bg-gradient-to-br from-green-700 via-emerald-600 to-teal-700">

                {/* Animated circles */}

                <motion.div
                    animate={{
                        y: [-20, 20, -20],
                        x: [-10, 20, -10],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 8,
                    }}
                    className="
                        absolute
                        -top-32
                        -left-32
                        h-96
                        w-96
                        rounded-full
                        bg-white/10
                        blur-3xl
                    "
                />

                <motion.div
                    animate={{
                        y: [20, -20, 20],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 9,
                    }}
                    className="
                        absolute
                        bottom-0
                        right-0
                        h-[500px]
                        w-[500px]
                        rounded-full
                        bg-emerald-400/20
                        blur-3xl
                    "
                />

                <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-32">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -80,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: .8,
                            }}
                        >

                            <div
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-white/20
                                    bg-white/10
                                    backdrop-blur-xl
                                    px-5
                                    py-2
                                    text-sm
                                "
                            >

                                <FiShield />

                                Trusted Donation Platform

                            </div>

                            <h1
                                className="
                                    mt-8
                                    text-6xl
                                    font-black
                                    leading-tight
                                    text-white
                                "
                            >

                                Make Every
                                <br />

                                Donation

                                <span className="text-yellow-300">

                                    {" "}Count

                                </span>

                            </h1>

                            <p
                                className="
                                    mt-8
                                    max-w-xl
                                    text-lg
                                    leading-8
                                    text-green-100
                                "
                            >

                                Join thousands of donors helping verified
                                charities transform lives through education,
                                healthcare, disaster relief and community
                                development.

                            </p>

                            <div className="mt-10 flex flex-wrap gap-5">

                                <button
                                    className="
                                        rounded-2xl
                                        bg-white
                                        px-8
                                        py-4
                                        font-bold
                                        text-green-700
                                        shadow-xl
                                        transition
                                        hover:-translate-y-1
                                    "
                                    onClick={()=>navigation("/AllCharityProjects")}
                                >

                                    Donate Now

                                </button>

                                <button
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        rounded-2xl
                                        border
                                        border-white/20
                                        bg-white/10
                                        backdrop-blur-xl
                                        px-8
                                        py-4
                                        font-bold
                                        text-white
                                        transition
                                        hover:bg-white/20
                                    "
                                onClick={()=>navigation("/charities")}
                                >

                                    Explore Charities

                                    <FiArrowRight />

                                </button>

                            </div>

                        </motion.div>

                        {/* RIGHT */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 80,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: .8,
                            }}
                            className="relative"
                        >

                            <div
                                className="
                                    absolute
                                    -inset-6
                                    rounded-[40px]
                                    bg-gradient-to-r
                                    from-white/20
                                    to-white/5
                                    blur-xl
                                "
                            />

                            <img
                                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
                                alt=""
                                className="
                                    relative
                                    h-[560px]
                                    w-full
                                    rounded-[35px]
                                    object-cover
                                    shadow-2xl
                                "
                            />

                        </motion.div>

                    </div>

                </div>
            </section>
                        {/* ================= STATS ================= */}

            <section className="-mt-20 relative z-20">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                        {stats.map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        y: 40,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.15,
                                    }}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.03,
                                    }}
                                    className="
                                        rounded-3xl
                                        border
                                        border-white/30
                                        bg-white/80
                                        backdrop-blur-xl
                                        p-8
                                        shadow-xl
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-16
                                            w-16
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            bg-gradient-to-r
                                            from-green-500
                                            to-emerald-600
                                            text-white
                                        "
                                    >

                                        <Icon size={30} />

                                    </div>

                                    <h2 className="mt-6 text-4xl font-black text-gray-800">

                                        {item.value}

                                    </h2>

                                    <p className="mt-2 text-gray-500">

                                        {item.title}

                                    </p>

                                </motion.div>

                            );

                        })}

                    </div>

                </div>

            </section>

            {/* ================= WHY CHOOSE US ================= */}

            <section className="py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center">

                        <span className="text-green-600 font-semibold uppercase tracking-widest">

                            Why Donor Duck

                        </span>

                        <h2 className="mt-4 text-5xl font-black text-gray-800">

                            Donate With Confidence

                        </h2>

                        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-500">

                            Every charity is verified and every donation is
                            tracked to ensure complete transparency.

                        </p>

                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 mt-16">

                        {[
                            {
                                icon: FiShield,
                                title: "Verified NGOs",
                                desc: "Every organization is manually reviewed before joining the platform.",
                            },
                            {
                                icon: FiHeart,
                                title: "Secure Donations",
                                desc: "Industry standard payment security keeps every transaction protected.",
                            },
                            {
                                icon: FiUsers,
                                title: "Real Impact",
                                desc: "Track where your donation goes and see measurable community impact.",
                            },
                        ].map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        y: 40,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.2,
                                    }}
                                    whileHover={{
                                        y: -10,
                                    }}
                                    className="
                                        rounded-3xl
                                        bg-white
                                        p-10
                                        shadow-lg
                                        border
                                        border-gray-100
                                    "
                                >

                                    <div
                                        className="
                                            h-16
                                            w-16
                                            rounded-2xl
                                            bg-green-100
                                            text-green-600
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >

                                        <Icon size={30} />

                                    </div>

                                    <h3 className="mt-8 text-2xl font-bold">

                                        {item.title}

                                    </h3>

                                    <p className="mt-4 leading-8 text-gray-500">

                                        {item.desc}

                                    </p>

                                </motion.div>

                            );

                        })}

                    </div>

                </div>

            </section>

            {/* ================= CTA ================= */}

            <section className="pb-24">

                <div className="max-w-7xl mx-auto px-6">

                    <motion.div
                        whileHover={{
                            scale: 1.01,
                        }}
                        className="
                            rounded-[40px]
                            bg-gradient-to-r
                            from-green-700
                            via-emerald-600
                            to-teal-600
                            px-14
                            py-20
                            text-center
                            text-white
                            shadow-2xl
                        "
                    >

                        <h2 className="text-5xl font-black">

                            Ready to Make an Impact?

                        </h2>

                        <p className="mt-6 max-w-3xl mx-auto text-xl text-green-100 leading-9">

                            Every contribution changes someone's life.
                            Start supporting trusted charities today and
                            become part of a growing community of changemakers.

                        </p>

                        <div className="mt-12 flex justify-center gap-6">

                            <button
                                className="
                                    rounded-2xl
                                    bg-white
                                    px-8
                                    py-4
                                    font-bold
                                    text-green-700
                                    shadow-lg
                                    hover:-translate-y-1
                                    transition
                                "
                                onClick={()=>navigation("/AllCharityProjects")}
                            >

                                Start Donating

                            </button>

                            <button
                                className="
                                    rounded-2xl
                                    border
                                    border-white/30
                                    px-8
                                    py-4
                                    font-bold
                                    backdrop-blur-xl
                                    hover:bg-white/10
                                    transition
                                "
                            >

                                Browse Charities

                            </button>

                        </div>

                    </motion.div>

                </div>

            </section>

        </div>

    );

};

export default Home;