import mongoose from 'mongoose'

const WorkoutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 60
    },
    type: {
        type: String,
        required: true
    },
    exercises: [
        {
            name: {
                type: String
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            weight: {
                type: Number
            },
            distance: {
                type: Number
            },
            duration: {
                type: Number
            },
            pace: {
                type: Number
            },
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true})

export default mongoose.models.Workout || mongoose.model('Workout', WorkoutSchema)

