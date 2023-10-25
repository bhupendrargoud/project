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



import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;




@CrossOrigin(origins="*")
@RestController
@RequestMapping("/user")
public class UserController {
				
				@Autowired
				UserRepository userRepository;
				
				
				//insert a user
				@PostMapping("/save")
				public ResponseEntity<User> createUser(@RequestBody User user)
				{
				User _user = userRepository.save(new User(user.getUsid(),user.getName(),user.getDob(),user.getPnum(),user.getEmail(),user.getIdprof(),user.getPaswd()));
				return new ResponseEntity<>(_user,HttpStatus.CREATED);
				}
				
				
				
				//fetch all users
				@GetMapping("/get_all_user")
				public ResponseEntity<List<User>> getAllUsers()
				{
				List users=new ArrayList<User>();
				userRepository.findAll().forEach(users::add);
				return new ResponseEntity<>(users,HttpStatus.OK);
				}
				
				//fetch user by id
				@GetMapping("/get_user_by_uid/{id}")
				public ResponseEntity<User> getUserById(@PathVariable("id") String id)
				{
				Optional<User> userData=userRepository.findById(id);
				if(userData.isPresent())
				{
				return new ResponseEntity<>(userData.get(),HttpStatus.OK);
				}
				else
				{
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
				}
				}
				
				
				/*get by email*/
				@GetMapping("/get_user_email/{e_id}")
				public ResponseEntity<User>getUserByEmail(@PathVariable("e_id") String e_id)
				{
				List<User> userD=(userRepository).findByemail(e_id);
				User userdata=userD.get(0);
				
				return new ResponseEntity<>(userdata,HttpStatus.OK);
				}
				
				/*get by number*/
				@GetMapping("/get_user_num/{n_id}")
				public ResponseEntity<User>getUserByNumber(@PathVariable("n_id") String n_id)
				{
				List<User> userD=(userRepository).findBypnum(n_id);
				
				User userdata=userD.get(0);
				return new ResponseEntity<>(userdata,HttpStatus.OK);
				}
				
				
				
				//update user by id
				@PutMapping("/update_uid/{id}")
				public ResponseEntity<User> updateId(@PathVariable("id") String id,@RequestBody User user)
				{
				Optional<User> userData=userRepository.findById(id);
				if(userData.isPresent())
				{
				User _user=userData.get();
				_user.setName(user.getName());
				_user.setDob(user.getDob());
				_user.setUsid(user.getUsid());
				_user.setPnum(user.getPnum());
				_user.setEmail(user.getEmail());
				_user.setIdprof(user.getIdprof());
				_user.setPaswd(user.getPaswd());
				return new ResponseEntity<>(userData.get(),HttpStatus.OK);
				}
				else
				{
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
				}
				
				}
				
				//delete by id
				@DeleteMapping("/delete_id/{id}")
				public ResponseEntity<HttpStatus> deleteId(@PathVariable("id") String id)
				{
				userRepository.deleteById(id);
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}
				
				
				
				}
