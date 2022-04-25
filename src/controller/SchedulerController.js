import SchedulerModel from '../model/SchedulerModel.js';

class SchedulerController {
  async index(request, response) {
    try {
      const schedulers = await SchedulerModel.find();

      response.json({ schedulers });
    } catch (error) {
      console.error(error);

      response.status(400).json({ message: 'Bad Request' });
    }
  }

  async getOne(request, response) {
    try {
      const { id } = request.params;

      const scheduler = await SchedulerModel.findById(id);

      if (scheduler) {
        return response.json({ scheduler });
      }

      response.status(404).json({ message: 'Scheduler not found' });
    } catch (error) {
      console.error(error);

      response.status(400).json({ message: 'Bad Request' });
    }
  }

  async store(request, response) {
    try {
      const { name, birthDate, appointment } = request.body;

      let scheduler = await SchedulerModel.find({ appointment });

      if (scheduler.length === 0) {
        scheduler = await SchedulerModel.create({
          name,
          birthDate,
          appointment,
          appointmentQuantity: 1,
        });

        return response
          .status(201)
          .json({ message: 'Scheduler created successfully' });
      }

      if (scheduler[0].appointmentQuantity < 2) {
        scheduler.name.push(name);
        scheduler.birthDate.push(birthDate);
        scheduler.appointment.push(appointment);
        scheduler.appointmentQuantity += 1;

        await scheduler.save();

        return response
          .status(201)
          .json({ message: 'Scheduler created successfully' });
      }

      response.status(403).json({
        message: 'Only 2 appointments at the same date at max',
      });
    } catch (error) {
      console.error(error);

      response.status(400).json({ message: 'Bad Request' });
    }
  }

  async remove(request, response) {
    try {
      const { id } = request.params;

      const scheduler = await SchedulerModel.findById(id);

      await scheduler.remove();

      response.status(204).json({ message: 'Scheduler removed successfully' });
    } catch (error) {
      console.error(error);

      response.status(400).json({ message: 'Bad Request' });
    }
  }
}

export default SchedulerController;
