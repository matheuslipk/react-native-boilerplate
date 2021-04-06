import {TodoInterface} from '../Models/TodoInterface';
import api from './index';

export const getTodo = async () => {
  const response = await api.get('todos/1');
  return response.data as TodoInterface;
};
