import { z } from 'zod';

const bookSchema = z.object({
  title: z.string({
    invalid_type_error: "Title must be a string!!"
  }).min(1),
  author: z.string(),
  publishYear: z.number().int().max(2024),
});


  
export function validateBookSchema(object){

   return bookSchema.safeParse(object);
}