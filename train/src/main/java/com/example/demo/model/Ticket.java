package com.example.demo.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="ticket") 
public class Ticket {
	
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Id
	private int count;
	
	@Column(name="PNR")
	private String PNR;
	
	@Column(name="train")
	private int train;
	
	@Column(name="date")
	private String date;
	
	@Column(name="fare")
	private int fare;
	
	@Column(name="pass_no")
	private int pass_no;
	
	

	public Ticket() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Ticket( String pNR, int train, String date, int fare, int pass_no) {

		PNR = pNR;
		this.train = train;
		this.date = date;
		this.fare = fare;
		this.pass_no = pass_no;
	}



	public int getCount() {
		return count;
	}



	public void setCount(int count) {
		this.count = count;
	}



	public String getPNR() {
		return PNR;
	}



	public void setPNR(String pNR) {
		PNR = pNR;
	}



	public int getTrain() {
		return train;
	}



	public void setTrain(int train) {
		this.train = train;
	}



	public String getDate() {
		return date;
	}



	public void setDate(String date) {
		this.date = date;
	}



	public int getFare() {
		return fare;
	}



	public void setFare(int fare) {
		this.fare = fare;
	}



	public int getPass_no() {
		return pass_no;
	}



	public void setPass_no(int pass_no) {
		this.pass_no = pass_no;
	}



	@Override
	public String toString() {
		return "Ticket [count=" + count + ", PNR=" + PNR + ", train=" + train + ", date=" + date + ", fare=" + fare
				+ ", pass_no=" + pass_no + "]";
	}
	
}







		