import { api } from './baseApi';

export interface WorkoutSet {
    reps: number;
    weight: number;
    notes?: string;
}

export interface WorkoutExercise {
    name: string;
    sets: WorkoutSet[];
}

export interface WorkoutLog {
    _id: string;
    date: string;
    name: string;
    exercises: WorkoutExercise[];
    notes?: string;
}

export const workoutApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getMyWorkouts: builder.query<{ status: string; data: { workouts: WorkoutLog[] } }, void>({
            query: () => '/workouts',
            providesTags: ['Workouts'],
        }),
        createWorkout: builder.mutation<{ status: string; data: { workout: WorkoutLog } }, Partial<WorkoutLog>>({
            query: (workout) => ({
                url: '/workouts',
                method: 'POST',
                body: workout,
            }),
            invalidatesTags: ['Workouts'],
        }),
    }),
});

export const {
    useGetMyWorkoutsQuery,
    useCreateWorkoutMutation,
} = workoutApi;
