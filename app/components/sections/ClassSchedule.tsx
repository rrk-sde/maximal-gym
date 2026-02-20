"use client";

import { useGetClassesQuery, useJoinClassMutation } from "@/app/store/api/gymClassApi";
import { Calendar, Clock, User, Users } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { format } from "date-fns";

export default function ClassSchedule() {
    const { data: classesData, isLoading } = useGetClassesQuery();
    const [joinClass, { isLoading: isJoining }] = useJoinClassMutation();

    const handleJoin = async (classId: string) => {
        try {
            await joinClass(classId).unwrap();
            toast.success("Successfully enrolled in class!");
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to join class");
        }
    };

    if (isLoading) return null;

    const classes = classesData?.data?.classes || [];

    return (
        <section className="py-20 bg-gray-50 dark:bg-black/90" id="classes">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Class <span className="text-[#FF4D00]">Schedule</span></h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Join our energetic group classes led by expert instructors.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {classes.map((gymClass, index) => ( // Using gymClass instead of class
                        <motion.div
                            key={gymClass._id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{gymClass.name}</h3>
                                    <p className="text-sm text-gray-500 flex items-center mt-1">
                                        <User className="w-4 h-4 mr-1" />
                                        {typeof gymClass.coachId === 'object' ? gymClass.coachId.name : 'Instructor'}
                                    </p>
                                </div>
                                <div className={`px-3 py-1 rounded-full text-xs font-medium ${gymClass.status === 'scheduled' ? 'bg-green-100 text-green-700' :
                                    gymClass.status === 'cancelled' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'
                                    }`}>
                                    {gymClass.status?.toUpperCase()}
                                </div>
                            </div>

                            <p className="text-gray-600 text-sm mb-6 line-clamp-2">{gymClass.description}</p>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center text-gray-700 text-sm">
                                    <Calendar className="w-4 h-4 mr-3 text-[#FF4D00]" />
                                    {format(new Date(gymClass.startTime), "EEEE, MMM d")}
                                </div>
                                <div className="flex items-center text-gray-700 text-sm">
                                    <Clock className="w-4 h-4 mr-3 text-[#FF4D00]" />
                                    {format(new Date(gymClass.startTime), "h:mm a")} ({gymClass.durationMinutes} min)
                                </div>
                                <div className="flex items-center text-gray-700 text-sm">
                                    <Users className="w-4 h-4 mr-3 text-[#FF4D00]" />
                                    {gymClass.enrolledUsers.length} / {gymClass.capacity} Spots Filled
                                </div>
                            </div>

                            <button
                                onClick={() => handleJoin(gymClass._id)}
                                disabled={isJoining || gymClass.status !== 'scheduled' || gymClass.enrolledUsers.length >= gymClass.capacity}
                                className="w-full py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-[#FF4D00] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                            >
                                {gymClass.enrolledUsers.length >= gymClass.capacity ? 'Class Full' : 'Join Class'}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
