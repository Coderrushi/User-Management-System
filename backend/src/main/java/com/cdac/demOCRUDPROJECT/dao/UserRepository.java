package com.cdac.demOCRUDPROJECT.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.demOCRUDPROJECT.pojos.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
