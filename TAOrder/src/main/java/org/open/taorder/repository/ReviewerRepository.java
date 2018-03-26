package org.open.taorder.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.open.taorder.entity.Reviewer;

@RepositoryRestResource
public interface ReviewerRepository extends PagingAndSortingRepository<Reviewer, Long> {
}
