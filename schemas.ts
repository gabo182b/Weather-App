import { z } from 'zod'

export const formSchema = z.object({
  cityName: z.string().min(2).max(50)
})
