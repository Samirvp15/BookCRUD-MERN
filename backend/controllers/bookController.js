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
      return res.status(500).send(error);
    }
  },

  get: async (req, res) => {
    try {
      const books = await Book.find({});

      return res.status(200).json({
        count: books.length,
        data: books,
      });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  getBook: async (req, res) => {
    try {
      const {id} = req.params;
      const book = await Book.findById(id);

      return res.status(200).json({
        book
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  },

  updateBook: async (req, res) => {
    try {
      if (!req.body.title || !req.body.author || !req.body.publishYear) {
        return res.status(400).send({message: 'Send all fields'});
      }

      const {id} = req.params;
      const updatedBook = await Book.findByIdAndUpdate(id, req.body);

      if (!updatedBook) {
        return res.status(404).json({message: 'Book not found'});
      }

      return res.status(200).send({message: 'Book updated successfully'});
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  deleteBook: async (req, res) => {
    try {
      const { id } = req.params;
  
      const result = await Book.findByIdAndDelete(id);
  
      if (!result) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      return res.status(200).send({ message: 'Book deleted successfully' });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

};
