import BaseRepository from './BaseRepository.js';

class RoomRepository extends BaseRepository {
  async getAll(table) {
    try {
      const results = await super.getAll('rooms', ['id', 'name', 'capacity']);
      return results;
    } catch (error) {
      throw error;
    }
  }

  async getById(table, id) {
    try {
      const result = await super.getById(
        'rooms',
        ['id', 'name', 'capacity'],
        id
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default RoomRepository;
