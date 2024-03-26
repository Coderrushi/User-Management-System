package com.cdac.demOCRUDPROJECT.service;

import java.util.List;

import com.cdac.demOCRUDPROJECT.pojos.User;

public interface IUserService {
	
	//register user
	User addUser(User user);

	//get users
	List<User>getUsers();
	
	//get specific user
	User getuser(int id);
	
	//delete specific user
	String deleteUser(int id);
	
	//update specific user
	User updateUser(User newUser, User olduser);
}
