import { UsersArraySchema } from '../schemas/user.schema';
import { getAgeRange } from '../utils/getAgeRange';

export function groupByAgeRange(input: unknown) {
  const users = UsersArraySchema.parse(input); // zod - валидация

  type AgeRange = ReturnType<typeof getAgeRange>;

  const res: Record<AgeRange, typeof users> = {
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
