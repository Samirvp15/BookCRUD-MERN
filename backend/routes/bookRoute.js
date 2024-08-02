import express from 'express';
//import { Book } from '../models/bookModel.js';
import { bookController } from '../controllers/bookController.js';

const router = express.Router();

// Route for Save a new Book
router.post('', bookController.post);

// Route for Get All Books from database
router.get('', bookController.get);

// Route for Get :id Book from database
router.get('/:id', bookController.getBook);

// Route for Update :id Book from database
router.put('/:id', bookController.updateBook);

// Route for Delete :id Book from database
router.delete('/:id', bookController.deleteBook);


export default router;
