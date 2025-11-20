import { z } from 'zod';

export const UserSchema = z
  .object({
    name: z.string(),
    age: z.number().int().nonnegative(),
  })
  .strict();

export const UsersArraySchema = z.array(UserSchema);

export type User = z.infer<typeof UserSchema>;
export type UsersArray = z.infer<typeof UsersArraySchema>;
