package org.blog.repository;

import org.blog.model.categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICategoriaRepository extends JpaRepository<categoria, Long>{

}
