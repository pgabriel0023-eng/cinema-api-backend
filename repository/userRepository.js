import BaseRepository from './BaseRepository.js';

class UserRepository extends BaseRepository {
  async getAll(table) {
    try {
      const results = await super.getAll('users', ['id', 'name', 'email']);
      return results;
    } catch (error) {
      throw error;
    }
  }

  async getById(table, id) {
    try {
      const result = await super.getById('users', ['id', 'name', 'email'], id);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default UserRepository;
