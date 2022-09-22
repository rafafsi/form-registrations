package com.registration.formregistration.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.registration.formregistration.model.Person;

public interface personRepository extends JpaRepository<Person, Integer> {

}
