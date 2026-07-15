import React from "react";
import { motion } from "framer-motion";
import { FiHeart, FiArrowRight, FiUsers, FiTarget, FiShield } from "react-icons/fi";

const stats=[
{label:"Verified Charities",value:"350+"},
{label:"Donors",value:"25K+"},
{label:"Raised",value:"₹4.8 Cr+"},
{label:"Campaigns",value:"950+"},
];

const Home=()=>(
<div className="bg-gray-50 h-[710px] overflow-y-auto scrollbar-hide">
<section className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 text-white">
<div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_40%)]"/>
<div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10 items-center">
<motion.div initial={{opacity:0,x:-40}} animate={{opacity:1,x:0}} transition={{duration:.7}}>
<span className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full">
<FiShield/> Trusted Donation Platform
</span>
<h1 className="mt-6 text-5xl font-extrabold leading-tight">Together We Can Change Lives</h1>
<p className="mt-6 text-lg text-green-100">Support verified charities, fund meaningful campaigns and create real impact.</p>
<div className="mt-8 flex gap-4">
<button className="bg-white text-green-700 px-6 py-3 rounded-xl font-bold hover:scale-105 transition">Donate Now</button>
<button className="border border-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-white hover:text-green-700 transition">Explore <FiArrowRight/></button>
</div>
</motion.div>
<motion.div initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} transition={{duration:.7}}>
<img className="rounded-3xl shadow-2xl w-full h-[430px] object-cover" src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg" alt="hero"/>
</motion.div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
{stats.map((s,i)=>(
<motion.div whileHover={{y:-8}} key={i} className="bg-white rounded-3xl shadow-lg p-6">
<div className="h-14 w-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-700">
{i===0?<FiHeart size={24}/>:i===1?<FiUsers size={24}/>:i===2?<FiTarget size={24}/>:<FiShield size={24}/>}
</div>
<h2 className="text-3xl font-bold mt-5">{s.value}</h2>
<p className="text-gray-500 mt-2">{s.label}</p>
</motion.div>
))}
</div>
</section>
</div>
);

export default Home;
