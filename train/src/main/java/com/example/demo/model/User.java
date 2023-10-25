package com.example.demo.model;



import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="User") 
public class User {
	
	
	@Id
	private String usid;
	
	
	@Column(name="dob")
	 private String dob;
	
	@Column(name="name")
	 private String name;
	 
	
	@Column(name="pnum")
	private String  pnum;
	
	@Column(name="email")
	private String email;
	
	@Column(name="idprof")
	private String idprof;
	
	
	@Column(name="paswd")
	 private String paswd;
	
	


	public String getUsid() {
		return usid;
	}


	public void setUsid(String usid) {
		this.usid = usid;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getDob() {
		return dob;
	}


	public void setDob(String dob) {
		this.dob = dob;
	}
	

	
	


	public String getPnum() {
		return pnum;
	}


	public void setPnum(String pnum) {
		this.pnum = pnum;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getIdprof() {
		return idprof;
	}


	public void setIdprof(String idprof) {
		this.idprof = idprof;
	}


	public String getPaswd() {
		return paswd;
	}


	public void setPaswd(String paswd) {
		this.paswd = paswd;
	}
	
	public User() {
		
	}


	public User(String usid, String name, String dob, String pnum, String email, String idprof, String paswd) {
		super();
		this.usid = usid;
		this.name = name;
		this.dob = dob;
		this.pnum = pnum;
		this.email = email;
		this.idprof = idprof;
		this.paswd = paswd;
	}


	@Override
	public String toString() {
		return "User [usid=" + usid + ", name=" + name + ", dob=" + dob + ", pnum=" + pnum + ", email=" + email
				+ ", idprof=" + idprof + ", paswd=" + paswd + "]";
	}


	
	


	


	
	
	
}
