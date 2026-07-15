import {
    FiHeart,
    FiShield,
    FiUsers,
    FiTarget,
    FiAward,
    FiGlobe,
    FiCheckCircle,
    FiArrowRight,
} from "react-icons/fi";

const AboutUs = () => {

    const values = [
        {
            icon: <FiHeart size={30} />,
            title: "Compassion",
            description:
                "Every donation represents hope for someone in need. We believe kindness creates lasting impact.",
        },
        {
            icon: <FiShield size={30} />,
            title: "Transparency",
            description:
                "Every campaign, donation, and transaction is transparent and easy to track.",
        },
        {
            icon: <FiUsers size={30} />,
            title: "Community",
            description:
                "Connecting generous donors with trusted charities across the country.",
        },
        {
            icon: <FiAward size={30} />,
            title: "Integrity",
            description:
                "We verify organizations carefully to ensure every contribution reaches the right cause.",
        },
    ];

    const stats = [
        {
            value: "12K+",
            label: "Registered Donors",
        },
        {
            value: "350+",
            label: "Verified Charities",
        },
        {
            value: "₹4.8 Cr+",
            label: "Funds Raised",
        },
        {
            value: "950+",
            label: "Successful Campaigns",
        },
    ];

    const features = [
        "100% Verified Charity Organizations",
        "Secure Online Donations",
        "Transparent Fund Tracking",
        "Real-Time Campaign Updates",
        "Trusted by Thousands of Donors",
        "Dedicated Customer Support",
    ];

    return (

        <div className="bg-gray-50 h-[710px] overflow-y-auto scrollbar-hide">

            {/* Hero */}

            <section className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">

                <div className="max-w-7xl mx-auto px-6 py-24">

                    <div className="grid lg:grid-cols-2 gap-14 items-center">

                        <div>

                            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">

                                ❤️ Together We Can Make a Difference

                            </span>

                            <h1 className="mt-6 text-5xl font-bold leading-tight">

                                Helping People Through Trusted Charity

                            </h1>

                            <p className="mt-6 text-lg text-green-100 leading-8">

                                Our platform connects generous donors with
                                verified charities, ensuring every contribution
                                reaches those who need it most. Together, we
                                create meaningful social impact through
                                transparency, trust, and technology.

                            </p>

                            <div className="mt-10 flex gap-4">

                                <button className="bg-white text-green-700 font-semibold px-7 py-3 rounded-xl hover:bg-gray-100 transition">

                                    Explore Campaigns

                                </button>

                                <button className="border border-white px-7 py-3 rounded-xl hover:bg-white hover:text-green-700 transition">

                                    Contact Us

                                </button>

                            </div>

                        </div>

                        <div>

                            <img
                                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg"
                                alt=""
                                className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
                            />

                        </div>

                    </div>

                </div>

            </section>

            {/* Story */}

            <section className="max-w-7xl mx-auto px-6 py-24">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <img
                        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900"
                        alt=""
                        className="rounded-3xl shadow-xl"
                    />

                    <div>

                        <span className="text-green-600 font-semibold">

                            OUR STORY

                        </span>

                        <h2 className="text-4xl font-bold mt-3">

                            Building Trust Between Donors & Charities

                        </h2>

                        <p className="mt-6 text-gray-600 leading-8">

                            We started with one simple vision — making charity
                            donations easier, safer, and completely transparent.
                            Many people want to help but struggle to identify
                            trustworthy organizations. Our platform solves this
                            by carefully verifying charities before allowing
                            them to create fundraising campaigns.

                        </p>

                        <p className="mt-5 text-gray-600 leading-8">

                            Today, thousands of donors use our platform to
                            support education, healthcare, disaster relief,
                            environmental protection, animal welfare, and many
                            other important causes.

                        </p>

                    </div>

                </div>

            </section>

            {/* Mission */}

            <section className="bg-white py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-8">

                        <div className="rounded-3xl bg-green-600 text-white p-10">

                            <FiTarget size={50} />

                            <h3 className="text-3xl font-bold mt-6">

                                Our Mission

                            </h3>

                            <p className="mt-5 text-green-100 leading-8">

                                To empower individuals and organizations to make
                                a positive social impact by providing a secure,
                                transparent, and easy-to-use donation platform.

                            </p>

                        </div>

                        <div className="rounded-3xl bg-gray-900 text-white p-10">

                            <FiGlobe size={50} />

                            <h3 className="text-3xl font-bold mt-6">

                                Our Vision

                            </h3>

                            <p className="mt-5 text-gray-300 leading-8">

                                A world where every person has the opportunity
                                to contribute towards meaningful causes with
                                complete confidence and transparency.

                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Statistics */}

            <section className="py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {stats.map((item) => (

                            <div
                                key={item.label}
                                className="bg-white rounded-3xl p-8 shadow-lg text-center"
                            >

                                <h2 className="text-5xl font-bold text-green-600">

                                    {item.value}

                                </h2>

                                <p className="mt-4 text-gray-600">

                                    {item.label}

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* Values */}

            <section className="bg-white py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center">

                        <h2 className="text-4xl font-bold">

                            Our Core Values

                        </h2>

                        <p className="text-gray-500 mt-4">

                            Principles that guide every decision we make.

                        </p>

                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">

                        {values.map((item) => (

                            <div
                                key={item.title}
                                className="bg-gray-50 rounded-3xl p-8 text-center hover:shadow-xl transition"
                            >

                                <div className="h-16 w-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mx-auto">

                                    {item.icon}

                                </div>

                                <h3 className="font-bold text-xl mt-6">

                                    {item.title}

                                </h3>

                                <p className="mt-4 text-gray-600 leading-7">

                                    {item.description}

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* Why Choose */}

            <section className="py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        <div>

                            <h2 className="text-4xl font-bold">

                                Why Choose Our Platform?

                            </h2>

                            <p className="mt-6 text-gray-600 leading-8">

                                We focus on building trust, transparency, and
                                simplicity to make giving back easier than ever.

                            </p>

                            <div className="mt-10 space-y-5">

                                {features.map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-center gap-4"
                                    >

                                        <FiCheckCircle className="text-green-600 text-xl" />

                                        <span>{item}</span>

                                    </div>

                                ))}

                            </div>

                        </div>

                        <img
                            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900"
                            alt=""
                            className="rounded-3xl shadow-xl"
                        />

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="bg-gradient-to-r from-green-600 to-emerald-600 py-24 text-white">

                <div className="max-w-5xl mx-auto text-center px-6">

                    <h2 className="text-5xl font-bold">

                        Join Our Mission Today

                    </h2>

                    <p className="mt-6 text-lg text-green-100">

                        Every contribution creates hope, changes lives, and
                        builds a better future. Become part of a community that
                        believes in making a real difference.

                    </p>

                    <button className="mt-10 bg-white text-green-700 px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-3 hover:bg-gray-100 transition">

                        Start Donating

                        <FiArrowRight />

                    </button>

                </div>

            </section>

        </div>

    );

};

export default AboutUs;