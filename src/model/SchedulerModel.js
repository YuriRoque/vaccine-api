import mongoose from 'mongoose';

const SchedulerSchema = new mongoose.Schema({
  name: String,
  birthDate: Date,
  appointment: Date,
});

const SchedulerModel = mongoose.model('scheduler', SchedulerSchema);

export default SchedulerModel;
