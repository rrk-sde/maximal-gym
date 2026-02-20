"use client";

import { useGetPlansQuery } from "@/app/store/api/membershipApi";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function MembershipPlans() {
    const { data: plansData, isLoading } = useGetPlansQuery();

    if (isLoading) {
        return (
            <div className="py-20 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF4D00] mx-auto"></div>
            </div>
        );
    }

    const plans = plansData?.data?.plans || [];

    return (
        <section className="py-20 bg-gray-900 dark:bg-black text-white" id="memberships">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Membership <span className="text-[#FF4D00]">Plans</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Choose the perfect plan for your fitness journey. Transparent pricing, no hidden fees.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan._id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-[#FF4D00] transition-colors relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="text-9xl font-bold text-gray-500">{index + 1}</span>
                            </div>

                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <div className="flex items-baseline mb-6">
                                <span className="text-4xl font-bold text-[#FF4D00]">${plan.price}</span>
                                <span className="text-gray-400 ml-2">/ {plan.durationMonths} mo</span>
                            </div>

                            <p className="text-gray-400 mb-8 h-12">{plan.description}</p>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-gray-300">
                                        <Check className="w-5 h-5 text-[#FF4D00] mr-3 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-4 rounded-xl bg-white text-gray-900 font-bold hover:bg-[#FF4D00] hover:text-white transition-colors">
                                Choose Plan
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
