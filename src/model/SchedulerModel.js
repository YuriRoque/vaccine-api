import mongoose from 'mongoose';

const SchedulerSchema = new mongoose.Schema({
  name: { type: [String], required: true },
  birthDate: { type: [Date], required: true },
  appointment: { type: [Date], required: true },
  appointmentQuantity: { type: Number, max: 2 },
});

const SchedulerModel = mongoose.model('scheduler', SchedulerSchema);

export default SchedulerModel;
