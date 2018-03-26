package org.open.taorder.repository;

import org.open.taorder.entity.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {
    public Book findBookByIsbn(String isbn);
}
