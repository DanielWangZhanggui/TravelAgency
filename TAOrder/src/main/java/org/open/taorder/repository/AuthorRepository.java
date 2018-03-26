package org.open.taorder.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.open.taorder.entity.Author;

@RepositoryRestResource(collectionResourceRel = "writers", path = "writers")
public interface AuthorRepository extends PagingAndSortingRepository<Author, Long> {
}
