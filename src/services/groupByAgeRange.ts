import { User, UsersArraySchema } from '../schemas/user.schema.js';
import { getAgeRange } from '../utils/getAgeRange.js';

export function groupByAgeRange(input: unknown) {
  const users = UsersArraySchema.parse(input); // zod-валидация

  const res: Record<string, User[]> = {
    '0-17': [],
    '18-25': [],
    '26-35': [],
    '36-50': [],
    '50+': [],
  };

  for (const user of users) {
    const range = getAgeRange(user.age);
    res[range].push(user);
  }

  return res;
}
