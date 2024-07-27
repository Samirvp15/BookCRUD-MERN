import { Book } from '../models/bookModel.js';
import { validateBookSchema } from '../schemas/bookSchema.js';

export const bookController = {
  post: async (req, res) => {
    try {
        const result = validateBookSchema(req.body);
        if (!result.success) {
          return res.status(400).send(result.error);
        }
  
        //const newBook = new Book(result.data);
        //const savedBook = await newBook.save();
        const savedBook = await Book.create(result.data);
  
        return res.status(201).send(savedBook);
      } catch (error) {
        console.log(error.message);
        return res.status(500).send(error);
      }
    },

  get: async (request, response) => {
    try {
      const books = await Book.find({});

      return response.status(200).json({
        count: books.length,
        data: books,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  },
};
