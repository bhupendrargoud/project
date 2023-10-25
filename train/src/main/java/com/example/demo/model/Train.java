package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="train") 
public class Train {
	
	@Id
	private int trainNo;
	
	@Column(name="trainName")
	private String trainName;
	
	@Column(name="source")
	private String source;
	
	@Column(name="destination")
	private String destination;
	
	@Column(name="Fare")
	private int Fare;
	
	public Train() {
		
	}

	public Train(int trainNo, String trainName, String source, String destination, int fare) {
		super();
		this.trainNo = trainNo;
		this.trainName = trainName;
		this.source = source;
		this.destination = destination;
		Fare = fare;
	}
	
	public int getTrainNo() {
		return trainNo;
	}
	public void setTrainNo(int trainNo) {
		this.trainNo = trainNo;
	}
	public String getTrainName() {
		return trainName;
	}
	public void setTrainName(String trainName) {
		this.trainName = trainName;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public int getFare() {
		return Fare;
	}
	public void setFare(int fare) {
		Fare = fare;
	}
	
	@Override
	public String toString() {
		return "Train [trainNo="+ trainNo +", trainName=" + trainName + ", source =" + source + ", destination=" + destination + ", Fare=" + Fare + "]";
		
	}

}
