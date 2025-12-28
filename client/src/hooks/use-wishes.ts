import { useMutation } from "@tanstack/react-query";
import { api, type InsertWish } from "@shared/routes";

export function useCreateWish() {
  return useMutation({
    mutationFn: async (data: InsertWish) => {
      // Validate data before sending using the shared schema if needed, 
      // though fetch usually handles the transport.
      // We use the shared Zod schema in the UI for form validation.
      
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
