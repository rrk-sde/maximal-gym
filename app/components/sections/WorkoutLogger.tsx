"use client";

import { useCreateWorkoutMutation, useGetMyWorkoutsQuery } from "@/app/store/api/workoutApi";
import { useState } from "react";
import { Plus, Trash, Dumbbell, Calendar, Save } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";

export default function WorkoutLogger() {
    const { data: workoutsData } = useGetMyWorkoutsQuery();
    const [createWorkout, { isLoading }] = useCreateWorkoutMutation();

    // Form State
    const [name, setName] = useState("Daily Workout");
    const [exercises, setExercises] = useState([
        { name: "", sets: [{ reps: 0, weight: 0 }] }
    ]);

    const addExercise = () => {
        setExercises([...exercises, { name: "", sets: [{ reps: 0, weight: 0 }] }]);
    };

    const removeExercise = (index: number) => {
        const newExercises = [...exercises];
        newExercises.splice(index, 1);
        setExercises(newExercises);
    };

    const updateExerciseName = (index: number, val: string) => {
        const newExercises = [...exercises];
        newExercises[index].name = val;
        setExercises(newExercises);
    };

    const addSet = (exerciseIndex: number) => {
        const newExercises = [...exercises];
        newExercises[exerciseIndex].sets.push({ reps: 0, weight: 0 });
        setExercises(newExercises);
    };

    const updateSet = (exerciseIndex: number, setIndex: number, field: 'reps' | 'weight', val: number) => {
        const newExercises = [...exercises];
        newExercises[exerciseIndex].sets[setIndex][field] = val; // Assuming 'any' is acceptable here for simplicity, otherwise define type
        setExercises(newExercises);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createWorkout({
                name,
                exercises,
                date: new Date().toISOString()
            }).unwrap();

            toast.success("Workout logged successfully!");
            // Reset form
            setName("Daily Workout");
            setExercises([{ name: "", sets: [{ reps: 0, weight: 0 }] }]);
        } catch (error: any) {
            toast.error("Failed to log workout");
        }
    };

    const workouts = workoutsData?.data?.workouts || [];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10">
            {/* Logger Form */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
                <div className="flex items-center mb-6">
                    <div className="p-3 bg-[#FF4D00]/10 rounded-full mr-4">
                        <Dumbbell className="w-6 h-6 text-[#FF4D00]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Log Workout</h3>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Workout Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-[#FF4D00] outline-none dark:bg-gray-800 dark:text-white"
                            placeholder="e.g. Leg Day"
                        />
                    </div>

                    <div className="space-y-6 mb-8">
                        {exercises.map((exercise, exIndex) => (
                            <div key={exIndex} className="p-4 bg-gray-50 rounded-xl border border-gray-100 relative">
                                <button
                                    type="button"
                                    onClick={() => removeExercise(exIndex)}
                                    className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                                >
                                    <Trash className="w-4 h-4" />
                                </button>

                                <input
                                    type="text"
                                    value={exercise.name}
                                    onChange={(e) => updateExerciseName(exIndex, e.target.value)}
                                    className="w-full p-2 bg-transparent border-b border-gray-200 mb-4 font-medium focus:border-[#FF4D00] outline-none"
                                    placeholder="Exercise Name (e.g. Bench Press)"
                                />

                                <div className="space-y-2">
                                    <div className="grid grid-cols-4 gap-2 text-xs text-gray-500 font-medium px-2">
                                        <span className="col-span-1">Set</span>
                                        <span className="col-span-1">Reps</span>
                                        <span className="col-span-1">Weight (kg)</span>
                                    </div>
                                    {exercise.sets.map((set, setIndex) => (
                                        <div key={setIndex} className="grid grid-cols-4 gap-2 items-center">
                                            <span className="col-span-1 text-sm text-gray-600 pl-2">{setIndex + 1}</span>
                                            <input
                                                type="number"
                                                value={set.reps}
                                                onChange={(e) => updateSet(exIndex, setIndex, 'reps', parseInt(e.target.value))}
                                                className="col-span-1 p-2 bg-white rounded border border-gray-200 text-center"
                                            />
                                            <input
                                                type="number"
                                                value={set.weight}
                                                onChange={(e) => updateSet(exIndex, setIndex, 'weight', parseInt(e.target.value))}
                                                className="col-span-1 p-2 bg-white rounded border border-gray-200 text-center"
                                            />
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => addSet(exIndex)}
                                        className="text-xs text-[#FF4D00] font-medium mt-2 hover:underline"
                                    >
                                        + Add Set
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <button
                            type="button"
                            onClick={addExercise}
                            className="flex-1 py-3 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 flex items-center justify-center gap-2"
                        >
                            <Plus className="w-5 h-5" /> Add Exercise
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex-1 py-3 bg-[#FF4D00] text-white rounded-xl font-bold hover:bg-[#FF4D00]/90 flex items-center justify-center gap-2"
                        >
                            {isLoading ? 'Saving...' : <><Save className="w-5 h-5" /> Save Workout</>}
                        </button>
                    </div>
                </form>
            </div>

            {/* History Feed */}
            <div className="space-y-6 h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                <h3 className="text-2xl font-bold text-gray-900 sticky top-0 bg-white/80 backdrop-blur pb-4 z-10">Recent Activity</h3>

                {workouts.length === 0 ? (
                    <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                        <Dumbbell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">No workouts logged yet. Start today!</p>
                    </div>
                ) : (
                    workouts.map((workout) => (
                        <div key={workout._id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900">{workout.name}</h4>
                                    <div className="flex items-center text-sm text-gray-500 mt-1">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {format(new Date(workout.date || Date.now()), "MMM d, yyyy 'at' h:mm a")}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {workout.exercises.map((ex, i) => (
                                    <div key={i} className="border-l-2 border-[#FF4D00]/20 pl-4">
                                        <p className="font-medium text-gray-800 text-sm mb-1">{ex.name}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {ex.sets.map((set, j) => (
                                                <span key={j} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                                    {set.reps}x{set.weight}kg
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
