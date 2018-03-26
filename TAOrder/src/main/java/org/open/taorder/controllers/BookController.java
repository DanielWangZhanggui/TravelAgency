package org.open.taorder.controllers;

import org.open.taorder.editors.IsbnEditor;
import org.open.taorder.entity.Book;
import org.open.taorder.model.Isbn;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.open.taorder.entity.Reviewer;
import org.open.taorder.repository.BookRepository;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {
    @Autowired
    private BookRepository bookRepository;

    @InitBinder
    public void initBinder(WebDataBinder binder) {
        binder.registerCustomEditor(Isbn.class, new IsbnEditor());
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public Iterable<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @RequestMapping(value = "/{isbn}", method = RequestMethod.GET)
    public Book getBook(@PathVariable Isbn isbn) {
        return bookRepository.findBookByIsbn(isbn.toString());
    }

    @RequestMapping(value = "/{isbn}/reviewers", method = RequestMethod.GET)
    public List<Reviewer> getReviewers(@PathVariable("isbn") Book book) {
        return book.getReviewers();
    }
}