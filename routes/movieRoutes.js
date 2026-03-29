import { Router } from 'express';
import MovieRepository from '../repository/movieRepository.js';

const router = Router();
const movieRepo = new MovieRepository();

router.get('/', async (req, res) => {
  const result = await movieRepo.getAll();
  res.status(200).send(result);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await movieRepo.getById(id);
  res.status(200).send(result);
});

export default router;
