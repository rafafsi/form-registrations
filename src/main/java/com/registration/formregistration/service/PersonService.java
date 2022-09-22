package com.registration.formregistration.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.registration.formregistration.model.Person;
import com.registration.formregistration.repository.personRepository;



@Service
public class PersonService {

    @Autowired
    personRepository personRepository;

    public List<Person> getAllPeople() {
        List<Person> people = new ArrayList<Person>();
        personRepository.findAll().forEach(person1 -> people.add(person1));
        return people;
    }

    public Person getPerson(int id) {
        return personRepository.findById(id).get();
    }

    public void deleteById(int id) {
        personRepository.deleteById(id);
    }

    public void saveOrUpdate(Person person) {
        personRepository.save(person);
    }

    public void update(Person person, int id) {
        personRepository.save(person);
    }

}
