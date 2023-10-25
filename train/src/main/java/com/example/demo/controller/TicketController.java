package com.example.demo.controller;

import java.io.BufferedWriter;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
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

import com.example.demo.model.Ticket;
import com.example.demo.model.Train;
import com.example.demo.repository.TicketRepository;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/ticket")
public class TicketController {
	
	@Autowired
	TicketRepository ticketRepository;
	
	
	
	
		
		//to save a ticket
		@PostMapping("/save_ticket") 
		public ResponseEntity<Ticket> createTicket(@RequestBody Ticket ticket){
			Ticket _ticket = ticketRepository.save(new Ticket(ticket.getPNR(),ticket.getTrain(),ticket.getDate(),ticket.getFare(),ticket.getPass_no()));	
			System.out.println(_ticket.getPNR());
			
			
			return new ResponseEntity<>(_ticket,HttpStatus.CREATED);
		}
				
							
						
						
						// return ticket count
						@GetMapping("/get_ticket_count")
						public ResponseEntity<Integer> getTicketcount()
						{
							
							int c=(int) ticketRepository.count();
						
							
								return new ResponseEntity<>(c,HttpStatus.OK);
							
						}
						
						
						@PostMapping("/download/{data}")
						public String downloadTicket(@PathVariable("data") String data)
						{
							Document doc = new Document();  
							try  
							{  
							//generate a PDF at the specified location  
							PdfWriter writer = PdfWriter.getInstance(doc, new FileOutputStream("/home/bhupendra/Desktop/Project(new)/BD24.pdf"));  
							System.out.println("PDF created.");  
							//opens the PDF  
							doc.open();  
							//adds paragraph to the PDF file  
							doc.add(new Paragraph(data));   
							//close the PDF file  
							doc.close();  
							//closes the writer  
							writer.close();  
							
						} catch (IOException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						} catch (DocumentException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
						
							
							
							return "ticket downloaded";
							
							
						}
						
						
						
						
}
