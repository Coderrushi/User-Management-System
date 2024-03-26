package com.cdac.demOCRUDPROJECT.controller;

import java.util.List;

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

import com.cdac.demOCRUDPROJECT.dto.ErrorResponse;
import com.cdac.demOCRUDPROJECT.pojos.User;
import com.cdac.demOCRUDPROJECT.service.IUserService;

@RestController
@RequestMapping("user")
@CrossOrigin("*")
public class UserController 
{
	@Autowired
	private IUserService userService;
	
	//http://localhost:8086/user/add
	@PostMapping("/add")
//public User registerUser(@RequestBody  User user)
//{
//	return userService.addUser(user);
//}
	public ResponseEntity<?>registerUser(@RequestBody  User user)
	{
		try
		{
		User dbUser=	userService.addUser(user);
			return new ResponseEntity<>(dbUser,HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>(new ErrorResponse("User Registeration Failed",e.getMessage()),HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/getUsers") // multiple user
	//	http://localhost:8086/user/getusers
	public List<User>fetchUsers()
	{
		return userService.getUsers();
	}
	
//http://localhost:8086/user/findUser/1
@GetMapping("/findUser/{id}")//find one
public User getUserById(@PathVariable int id)
{
	return userService.getuser(id);
}
//http://localhost:8086/user/delete/1
@DeleteMapping("/delete/{id}")
public String deleteString(@PathVariable int id)
{
return userService.deleteUser(id);
}
//http://localhost:8086/user/update/6
@PutMapping("/update/{id}")
public User updateById(@RequestBody User updateuser, @PathVariable int id)
{
	User olduser =userService.getuser(id);
	return userService.updateUser(updateuser, olduser);
}
}
