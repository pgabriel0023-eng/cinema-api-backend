import { Router } from 'express';
import RoomRepository from '../repository/roomRepository.js';

const router = Router();
const roomRepo = new RoomRepository();

router.get('/', async (req, res) => {
  const result = await roomRepo.getAll();
  res.status(200).send(result);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await roomRepo.getById(id);
  res.status(200).send(result);
});

export default router;
