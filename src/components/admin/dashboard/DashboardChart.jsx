import {
    ResponsiveContainer,
    AreaChart,
    Area,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

const DashboardChart = ({ data = [] }) => {

    const total = data.reduce(
        (sum, item) => sum + Number(item.amount),
        0
    );

    return (

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h2 className="text-xl font-bold text-gray-800">

                        Donation Analytics

                    </h2>

                    <p className="text-gray-500 mt-1">

                        Monthly donation performance

                    </p>

                </div>

                <div className="text-right">

                    <p className="text-sm text-gray-500">

                        Total Donations

                    </p>

                    <h2 className="text-3xl font-bold text-green-600">

                        ₹{total.toLocaleString("en-IN")}

                    </h2>

                </div>

            </div>

            <ResponsiveContainer
                width="100%"
                height={350}
            >

                <AreaChart data={data}>

                    <defs>

                        <linearGradient
                            id="colorAmount"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >

                            <stop
                                offset="5%"
                                stopColor="#16a34a"
                                stopOpacity={0.5}
                            />

                            <stop
                                offset="95%"
                                stopColor="#16a34a"
                                stopOpacity={0}
                            />

                        </linearGradient>

                    </defs>

                    <CartesianGrid
                        strokeDasharray="4 4"
                        vertical={false}
                    />

                    <XAxis
                        dataKey="month"
                        tickLine={false}
                    />

                    <YAxis
                        tickLine={false}
                    />

                    <Tooltip
                        contentStyle={{
                            borderRadius: "12px",
                            border: "none",
                            boxShadow:
                                "0 10px 20px rgba(0,0,0,.08)",
                        }}
                        formatter={(value) => [
                            `₹${Number(value).toLocaleString("en-IN")}`,
                            "Donation",
                        ]}
                    />

                    <Area
                        type="monotone"
                        dataKey="amount"
                        stroke="#16a34a"
                        strokeWidth={4}
                        fill="url(#colorAmount)"
                    />

                </AreaChart>

            </ResponsiveContainer>

        </div>

    );

};

export default DashboardChart;