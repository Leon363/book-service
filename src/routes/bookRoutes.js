import express from 'express';
import * as bookController from '../controllers/BookController.js';


const router = express.Router();

router.post('book', bookController.createBook);
router.get('/book/:isbn', bookController.getBookByIsbn);
router.delete('/book/:isbn', bookController.removeBook);
router.put('/book/:isbn', bookController.updateBook);
router.get('/book/author', bookController.getBookByAuthor);
router.get('/book/publisher', bookController.getBooksByPublisher);
router.get('/authors', bookController.getAllAuthors);

export default router;
