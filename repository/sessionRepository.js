import BaseRepository from './BaseRepository.js';

class SessionRepository extends BaseRepository {
  async getAll(table) {
    try {
      const results = await super.getAll('session', [
        'id',
        'movie_id',
        'room_id',
        'start_time',
        'price_in_cents',
      ]);
      return results;
    } catch (error) {
      throw error;
    }
  }

  async getById(table, id) {
    try {
      const result = await super.getById(
        'session',
        ['id', 'movie_id', 'room_id', 'start_time', 'price_in_cents'],
        id
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default SessionRepository;
