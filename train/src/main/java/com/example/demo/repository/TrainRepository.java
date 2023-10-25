package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Train;



public interface TrainRepository extends JpaRepository<Train,Integer>{

	List<Train> findBysource(String t_so);

	List<Train> findBydestination(String t_de);





	
}
