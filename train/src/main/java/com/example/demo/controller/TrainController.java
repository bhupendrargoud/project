package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Train;
import com.example.demo.repository.TrainRepository;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/train")
public class TrainController {
	
	@Autowired
	TrainRepository trainRepository;
	
	
	//to get specific train
	@GetMapping("/get_train_by_no/{t_no}")
	public ResponseEntity<Train> getTrainByNo(@PathVariable("t_no") int t_no)
	{
		Optional<Train> trainData=trainRepository.findById(t_no);
		
		
		if(trainData.isPresent())
		{
			
			return new ResponseEntity<>(trainData.get(),HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	//to get specific train
	@GetMapping("/get_train_by_source/{t_so}") 
	public ResponseEntity<List<Train>>getTrainBySource(@PathVariable("t_so") String t_so)
	{ List<Train> trainData=(trainRepository).findBysource(t_so); 
	return new ResponseEntity<>(trainData,HttpStatus.OK); }
	
	//to get specific train
		@GetMapping("/get_train_by_de/{t_de}") 
		public ResponseEntity<List<Train>>getTrainByDe(@PathVariable("t_de") String t_de)
		{ List<Train> trainData=(trainRepository).findBydestination(t_de); 
		return new ResponseEntity<>(trainData,HttpStatus.OK); }
		
		
		
				
				
	//to save a train
	@PostMapping("/save_train") 
	public ResponseEntity<Train> createTrain(@RequestBody Train train){
		Train _train = trainRepository.save(new Train(train.getTrainNo(),train.getTrainName(),train.getSource(),train.getDestination(),train.getFare()));		
		return new ResponseEntity<>(_train,HttpStatus.CREATED);
	}
	
	
	//fetch all trains
		@GetMapping("/get_all_trains")
		public ResponseEntity<List<Train>> getAllTrains(){
			List trains=new ArrayList<Train>();
			trainRepository.findAll().forEach(trains::add);
			return new ResponseEntity<>(trains,HttpStatus.OK);
		}
		
		//update train by id
				@PutMapping("/update_trainNo/{num}")
				public ResponseEntity<Train> updateTrain(@PathVariable("num") int num,@RequestBody Train train)
				{
					Optional<Train> trainData=trainRepository.findById(num);
					if(trainData.isPresent())
					{
						Train _train=trainData.get();
						_train.setTrainNo(train.getTrainNo());
						_train.setTrainName(train.getTrainName());
						_train.setSource(train.getSource());
						_train.setDestination(train.getDestination());
						_train.setFare(train.getFare());
						return new ResponseEntity<>(trainData.get(),HttpStatus.OK);
					}
					else
					{
						return new ResponseEntity<>(HttpStatus.NOT_FOUND);
					}
					
				}
				
				//delete by train number
				@DeleteMapping("/delete_trainNo/{num}")
				public ResponseEntity<HttpStatus> deleteTrain(@PathVariable("num") int num)
				{
					trainRepository.deleteById(num);
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}
				
				

}
