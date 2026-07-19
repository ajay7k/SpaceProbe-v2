import { z } from 'zod';

const envSchema = z.object({
  MODE: z.enum(['development', 'production', 'test']),
  VITE_API_URL: z.string().url().default('http://127.0.0.1:8000/api'),
});

const getEnv = () => {
  const parsed = envSchema.safeParse({
    MODE: import.meta.env.MODE,
    VITE_API_URL: import.meta.env.VITE_API_URL,
  });

  if (!parsed.success) {
    console.error('❌ Invalid environment configurations:', parsed.error.format());
    throw new Error('Invalid environment configuration');
  }

  return parsed.data;
};

export const env = getEnv();
