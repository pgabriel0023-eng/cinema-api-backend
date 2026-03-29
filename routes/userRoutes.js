import { Router } from 'express';
import UserRepository from '../repository/userRepository.js';

const router = Router();

router.get('/', async (req, res) => {
  const result = await new UserRepository().getAll();
  res.status(200).send(result);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await new UserRepository().getById(id);
  res.status(200).send(result);
});

export default router;
