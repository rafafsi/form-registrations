package repository;

import org.springframework.data.jpa.repository.JpaRepository;

import model.Person;

public interface personRepository extends JpaRepository<Person, Integer> {

}
