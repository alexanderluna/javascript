import { Schema, model } from 'mongoose';

const EntrySchema = new Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Entry = model('entries', EntrySchema);
export default Entry;
