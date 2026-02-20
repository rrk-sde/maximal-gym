"use client";

import WorkoutLogger from "../components/sections/WorkoutLogger";

export default function WorkoutsPage() {
    return (
        <main className="min-h-screen pt-20 bg-gray-50 dark:bg-black transitions-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Workout <span className="text-[#FF4D00]">Logger</span></h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Track your progress, log your sets, and crush your goals.
                    </p>
                </div>
                <WorkoutLogger />
            </div>
        </main>
    );
}
