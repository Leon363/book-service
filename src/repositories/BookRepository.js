import { Book } from '../models/book.model.js';


export const createBook = async (bookData) => {
    const data = {
        _id: bookData.isbn,
        title: bookData.title,
        authors: bookData.authors,
        publisher: bookData.publisher
    };
    return Book.create(data);
};


export const findBookByIsbn = async (isbn) => Book.findById(isbn).exec();


export const deleteBook = async (isbn) => Book.findByIdAndDelete(isbn).exec();


export const updateBook = async (isbn, updatedData) => {

    const data = { ...updatedData };
    delete data.isbn;

    return Book.findByIdAndUpdate(isbn, { $set: data }, { returnDocument: 'after' }).exec();
};


export const findBooksByAuthor = async (authorName) => {
    const authorRegex = new RegExp(`^${authorName}$`, 'i');
    return Book.find({ 'authors.name': authorRegex }).exec();
};


export const findBooksByPublisher = async (publisherName) => {
    const publisherRegex = new RegExp(`^${publisherName}$`, 'i');
    return Book.find({ publisher: publisherRegex }).exec();
};


export const findAllAuthors = async () => {
    return Book.aggregate([
        { $unwind: '$authors' },
        { $group: { _id: { name: '$authors.name', birthDate: '$authors.birthDate' } } },
        { $project: { _id: 0, name: '$_id.name', birthDate: '$_id.birthDate' } }
    ]).exec();
};