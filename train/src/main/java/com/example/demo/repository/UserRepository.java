package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.User;




public interface UserRepository extends JpaRepository<User,String>{

	List<User> findByemail(String e_id);

	

	List<User> findBypnum(String n_id);
	
}