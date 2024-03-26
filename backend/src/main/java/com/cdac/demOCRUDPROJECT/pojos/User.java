package com.cdac.demOCRUDPROJECT.pojos;

import jakarta.annotation.Generated;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
private Integer id;
private String name;
@Column(unique=true)
private String Username;
private int age;
public User() {
	super();
	// TODO Auto-generated constructor stub
}
public User(Integer id, String name, String username, int age) {
	super();
	this.id = id;
	this.name = name;
	Username = username;
	this.age = age;
}
public Integer getId() {
	return id;
}
public void setId(Integer id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getUsername() {
	return Username;
}
public void setUsername(String username) {
	Username = username;
}
public int getAge() {
	return age;
}
public void setAge(int age) {
	this.age = age;
}
@Override
public String toString() {
	return "User [id=" + id + ", name=" + name + ", Username=" + Username + ", age=" + age + "]";
}

}
