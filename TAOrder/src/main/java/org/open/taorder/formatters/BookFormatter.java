package org.open.taorder.formatters;

import org.open.taorder.entity.Book;
import org.springframework.format.Formatter;
import org.open.taorder.repository.BookRepository;

import java.text.ParseException;
import java.util.Locale;

public class BookFormatter implements Formatter<Book> {
    private BookRepository repository;

    public BookFormatter(BookRepository repository) {
        this.repository = repository;
    }

    public Book parse(String bookIdentifier, Locale locale) throws ParseException {
        Book book = repository.findBookByIsbn(bookIdentifier);
        return book != null ? book : repository.findById(Long.valueOf(bookIdentifier)).get();
    }

    public String print(Book book, Locale locale) {
        return book.getIsbn();
    }
}
