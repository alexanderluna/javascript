import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    handle: { type: String, required: true, max: 40 },
    skills: { type: [String], required: true },
    status: { type: String, required: true },
    githubusername: { type: String },
    company: { type: String },
    location: { type: String },
    website: { type: String },
    bio: { type: String },
    profile: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

const User = mongoose.model('users', UserSchema);
export default User;