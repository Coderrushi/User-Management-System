package com.cdac.demOCRUDPROJECT.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cdac.demOCRUDPROJECT.customexception.userhandlingexception;
import com.cdac.demOCRUDPROJECT.dao.UserRepository;
import com.cdac.demOCRUDPROJECT.pojos.User;

@Service
public class UserService implements IUserService {
	@Autowired
	private UserRepository useerrepo;

	@Override
	public User addUser(User user) {
		// TODO Auto-generated method stub
		return useerrepo.save(user);
	}

	@Override
	public List<User> getUsers() {
		// TODO Auto-generated method stub
		return useerrepo.findAll();
	}

	public String deleteUser(int id) {
		// TODO Auto-generated method stub
		 useerrepo.deleteById(id);
		 return id+"deleted";
	}

	@Override
	// get specific user
	public User getuser(int id) {
		// TODO Auto-generated method stub
		return useerrepo.findById(id).orElseThrow(() -> new userhandlingexception("Invalid Id"));
	}
	
	public User updateUser(User updateUser,User oldUser)
	{
		oldUser.setUsername( updateUser.getUsername());
		oldUser.setAge(updateUser.getAge());
		return  useerrepo.save(oldUser);
	}
}

