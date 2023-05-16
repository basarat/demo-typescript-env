import { z } from 'zod';

const envSchema = z.object({
  SOME_SECRET: z.string().nonempty(),
  ANOTHER_SECRET: z.string().nonempty(),
});

export const env = envSchema.parse(process.env);
