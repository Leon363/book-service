import * as bookService from "../services/BookService.js";

export const createBook = async (req, res)  => {
    try {
        const bookData = req.body;
        const result = await bookService.addBookService(bookData);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export const getBookByIsbn = async (req, res)  => {
    try {
        const { isbn } = req.params;
        const result = await bookService.getBookByIsbnService(isbn);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
} ;

export const removeBook = async (req, res)  => {
    try {
        const {isbn} = req.params;
        const result = await bookService.removeBookService(isbn);
        res.status(200).send(result);
    }catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const updateBook = async (req, res)  => {
    try {
        const {isbn} = req.params;
        const updateData = await bookService.updateBookService(isbn, updateData)
        res.status(200).json(updateData);
    }catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const getBookByAuthor = async (req, res)  => {
    try {
        const authorName = req.query.name;
        const result = await bookService.getBookByIsbnService(authorName);
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const getBooksByPublisher = async (req, res)  => {
    try {
        const publisherName = req.query.name;
        const result = await bookService.getBooksByPublisherService(publisherName);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const getAllAuthors = async (req, res)  => {
    try {
        const result = await bookService.getAllAuthorsService(req, res);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}