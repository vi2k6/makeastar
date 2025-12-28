import { z } from 'zod';
import { insertWishSchema, wishes } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  wishes: {
    create: {
      method: 'POST' as const,
      path: '/api/wishes',
      input: insertWishSchema,
      responses: {
        201: z.custom<typeof wishes.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
};
