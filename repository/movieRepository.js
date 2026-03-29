import BaseRepository from './BaseRepository.js';

class MovieRepository extends BaseRepository {
  async getAll(table) {
    try {
      const results = await super.getAll('movies', ['id', 'title', 'genre']);
      return results;
    } catch (error) {
      throw error;
    }
  }

  async getById(table, id) {
    try {
      const result = await super.getById(
        'movies',
        ['id', 'title', 'genre'],
        id
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default MovieRepository;
