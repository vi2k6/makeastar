import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import type { InsertWish } from "@shared/schema";

export function useCreateWish() {
  return useMutation({
    mutationFn: async (data: InsertWish) => {
      const res = await fetch(api.wishes.create.path, {
        method: api.wishes.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to make a wish");
      }

      return api.wishes.create.responses[201].parse(await res.json());
    },
  });
}
